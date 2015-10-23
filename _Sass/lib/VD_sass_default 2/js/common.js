$(document).ready(function(){

	var widthWindow = $(window).width();
	var heightWindow = $(window).height();


	// Tooltip
	$('.js-tooltip').tooltip();


	// Camera slider
	$('.js-slider').camera({
		height: '366px',
		pagination: true,
		thumbnails: false,
		navigation: false,
		navigationHover: true,
		loader: 'none',
		playPause: false,
		slicedCols: 30,
		slicedRows: 20,
		hover: false
	});

	// Nav
	$('#menu').mmenu();


	// Filter mixitup
	var $sortSelect = $('#SortSelect');
	var $isotope = $('#isotope');

	$isotope.mixItUp();

	$sortSelect.on('change', function(){
		$isotope.mixItUp('sort', this.value);
	});


	// Slick slider
	$('.js-related-author').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// Easy responsive tabs
	$('.js-tab-topic, .js-tab-content-audio, .js-tab-popular-comment, .js-tab-about').easyResponsiveTabs();


	// Audio
	$('.js-audio, .js-video').mediaelementplayer();


	// Magnific popup
	$(".js-open-popup-sign-in, .js-open-poup-sign-up").magnificPopup({
		type: 'inline',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		fixedContentPos: false,
		midClick: true
	});


	// Input tag
	$('.js-tags').tagsInput();

});


$(window).resize(function(){

	var widthWindow = $(window).width();
	var heightWindow = $(window).height();

});

// |++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// |
// | Function for page load and resize
// |++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++