/**
 * @preserve Morf v@VERSION
 * http://www.joelambert.co.uk/morf
 *
 * Copyright 2011, Joe Lambert.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

var Morf = function(elem, css, opts) {
	var from = {}, to = {},
		
	fromElem = document.createElement('div'),
	toElem 	 = document.createElement('div'),
		
	options = {
		timingFunction: 'ease',
		duration: null,
		increment: 0.01,
		debug: false,
		optimise: true, // Whether the outputted CSS should be optimised
		decimalPlaces: 5 // How many decimal places to optimise the WebKitCSSMatrix output to
	},
		
	// Define all other var's used in the function
	i = rule = ruleName = camel = m1 = m2 = progress = frame = rule = transEvent = val = null, cacheKey = '',
	
	// Setup a scoped reference to ourselves
	_this = this,
	
	keyframes = {},
	
	// Create a unique name for this animation
	animName = 'anim'+(new Date().getTime()),
	

	/* --- Helper Functions ------------------------------------------------------------------- */
	
	// Event listener for the webkitAnimationEnd Event
	animationEndListener = function(event){
		elem.removeEventListener('webkitAnimationEnd', animationEndListener, true);
		
		// Dispatch a faux webkitTransitionEnd event to complete the appearance of this being a transition rather than an animation
		// TODO: Should we throw an event for each property changed? (event.propertyName = 'opacity' etc)
		transEvent = document.createEvent("Event");
		transEvent.initEvent("webkitTransitionEnd", true, true);
		elem.dispatchEvent(transEvent);
		
		// Reset transition effects after use
		elem.style.webkitTransitionTimingFunction = null;
		elem.style.webkitTransitionDuration = 0;
		
		if (options.callback) {
			options.callback(elem);
		}
	},
	
	// Adds the CSS to the current page
	addKeyframeRule = function(rule) {
		if (document.styleSheets && document.styleSheets.length)
			document.styleSheets[0].insertRule(rule, 0);
		else
		{
			var style = document.createElement('style');
			style.innerHTML = rule;
			document.head.appendChild(style);			
		}
	},
	
	// Produces a CSS string representation of the Keyframes
	createAnimationCSS = function(kf, name) {
		var str = '@-webkit-keyframes '+name+' {\n', f = pos = rule = null, fStr = '';
		
		for(pos in kf)
		{
			f = kf[pos];
			fStr = '\t'+pos+' {\n';
			
			for(rule in f)
				fStr += '\t\t'+_this.util.toDash(rule)+': '+f[rule]+';\n';
			
			fStr += "\t}\n\n";
			
			str += fStr;
		}
		
		return options.optimise ? optimiseCSS(str+' }') : str+' }';
	},
	
	// Replaces scale(0) with 0.0001 to get around the inability to these decompose matrix
	sanityCheckTransformString = function(str) {
		var scale = str.match(/scale[Y|X|Z]*\([0-9, ]*0[,0-9 ]*\)/g),
			i = 0;
		
		if(scale)
		{
			// There might be multiple scale() properties in the string
			for(i = 0; i < scale.length; i++)
				str = str.replace(scale[i], scale[i].replace(/([^0-9])0([^0.9])/g, "$10.0001$2"));
		}
		
		return str;
	},
	
	// WebKitCSSMatrix toString() ALWAYS outputs numbers to 5 decimal places - this helps optimise the string
	optimiseCSS = function(str, decimalPlaces) {
		decimalPlaces = typeof options.decimalPlaces == 'number' ? options.decimalPlaces : 5;
		var matches = str.match(/[0-9\.]+/gm), 
			i = 0;
		
		if(matches)
		{
			for(i = 0; i < matches.length; i++)
				str = str.replace(matches[i], parseFloat( parseFloat(matches[i]).toFixed(decimalPlaces)));
		}
		
		return str;
	};
	
	/* --- Helper Functions End --------------------------------------------------------------- */	
	
	
	// Import the options	
	for(i in opts)
		options[i] = opts[i];
		
		
	// If timingFunction is a natively supported function then just trigger normal transition
	if(	options.timingFunction === 'ease' || 
		options.timingFunction === 'linear' || 
		options.timingFunction === 'ease-in' || 
		options.timingFunction === 'ease-out' ||
		options.timingFunction === 'ease-in-out' ||
		/^cubic-bezier/.test(options.timingFunction)) {
		
		elem.style.webkitTransitionDuration = options.duration;
		elem.style.webkitTransitionTimingFunction = options.timingFunction;
		
		// Listen for the transitionEnd event to fire the callback if needed
		var transitionEndListener = function(event) {
			elem.removeEventListener('webkitTransitionEnd', transitionEndListener, true);
			
			// Clean up after ourself
			elem.style.webkitTransitionDuration = 0;
			elem.style.webkitTransitionTimingFunction = null;
			
			if (options.callback) {
				// Delay execution to ensure the clean up CSS has taken effect
				setTimeout(function() {
					options.callback(elem);
				}, 10);
			}
		};
		
		elem.addEventListener('webkitTransitionEnd', transitionEndListener, true);
		
		setTimeout(function() {
			for(rule in css) {
				camel = _this.util.toCamel(rule);	
				elem.style[camel] = css[rule];
			}
		}, 10);
		
		this.css = '';
		
		return;	
	}
	else
	{
		// Reset transition properties for this element
		elem.style.webkitTransitionTimingFunction = null;
		elem.style.webkitTransitionDuration = 0;
	}
	
	// Create the key used to cache this animation
	cacheKey += options.timingFunction;
	
	// Setup the start and end CSS state
	for(rule in css)
	{
		camel = this.util.toCamel(rule);
		
		toElem.style[camel] = css[rule];

		// Set the from/start state				
		from[rule] = (camel == 'WebkitTransform') ? new WebKitCSSMatrix( sanityCheckTransformString( window.getComputedStyle(elem)['-webkit-transform'] ) )	: window.getComputedStyle(elem)[rule];
	
		// Set the to/end state
		to[rule]   = (camel == 'WebkitTransform') ? new WebKitCSSMatrix( sanityCheckTransformString( toElem.style.WebkitTransform ) ) : toElem.style[camel];
		
		// Shifty requires numeric values to be a number rather than a string (e.g. for opacity)
		from[rule] = from[rule] == (val = parseInt(from[rule], 10)) ? val : from[rule];
		to[rule]   = to[rule] 	== (val = parseInt(from[rule], 10)) ? val : to[rule];
		
		// Update the cacheKey
		cacheKey += ';' + rule + ':' + from[rule] + '->' + to[rule];
	}
		
	// Check the cache to save expensive calculations
	if(Morf.cache[cacheKey])
	{
		this.css = Morf.cache[cacheKey].css;
		animName = Morf.cache[cacheKey].name;
	}
	else
	{
		// Produce decompositions of matrices here so we don't have to redo it on each iteration
		// Decomposing the matrix is expensive so we need to minimise these requests
		if(from['-webkit-transform'])
		{
			m1 = from['-webkit-transform'].decompose();
			m2 = to['-webkit-transform'].decompose();
		}

		// Produce style keyframes
		for(progress = 0; progress <= 1; progress += options.increment) {
			// Use Shifty.js to work out the interpolated CSS state
			frame = Tweenable.util.interpolate(from, to, progress, options.timingFunction);

			// Work out the interpolated matrix transformation
			if(m1 !== null && m2 !== null)
				frame['-webkit-transform'] = m1.tween(m2, progress, Tweenable.prototype.formula[options.timingFunction]);

			keyframes[parseInt(progress*100, 10)+'%'] = frame;
		}

		// Ensure the last frame has been added
		keyframes['100%'] = to;

		// Add the new animation to the document
		this.css = createAnimationCSS(keyframes, animName);
		addKeyframeRule(this.css);

		Morf.cache[cacheKey] = {css: this.css, name: animName};
	}
	
	// Set the final position state as this should be a transition not an animation & the element should end in the 'to' state
	for(rule in to) 
		elem.style[this.util.toCamel(rule)] = to[rule];
	
	// Trigger the animation
	elem.addEventListener('webkitAnimationEnd', animationEndListener, true);
	elem.style.webkitAnimationDuration = options.duration;
	elem.style.webkitAnimationTimingFunction = 'linear';
	elem.style.webkitAnimationName = animName;
	
	// Print the animation to the console if the debug switch is given
	if(options.debug && window.console && window.console.log)
		console.log(this.css);
};


/**
 * Convenience function for triggering a transition
 * @param {HTMLDom} elem The element to apply the transition to
 * @param {Object} css Key value pair of CSS properties
 * @param {Object} opts Additional configuration options
 * 
 * Configuration options
 * -	timingFunction: {String} Name of the easing function to perform
 * -	duration: {integer} Duration in ms
 * -	increment: {float} How frequently to generate keyframes (Defaults to 0.01, which is every 1%)
 * -	debug: {Boolean} Should the generated CSS Animation be printed to the console  
 *  
 * @returns {Morf} An instance of the Morf object
 */

Morf.transition = function(elem, css, opts){
	return new Morf(elem, css, opts);
};

/**
 * Object to cache generated animations
 */
Morf.cache = {};

/**
 * Current version
 */
Morf.version = '@VERSION';