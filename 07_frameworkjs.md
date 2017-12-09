👉 Framework js 👈

## bxslider
http://bxslider.com/
```html
<ul class="slider">
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
  <li><a href="#" target="_blank"><img src="http://placehold.it/480x480" alt=""></a></li>
</ul>
```
- Tùy chỉnh width
```js
$(document).ready(function (){

  var settings = function() {
    var settings01 = {
      slideWidth: 650,
      minSlides: 2,
      maxSlides: 2,
      moveSlides: 1,
      slideMargin: 20,
      pager: true,
      controls: true,
      responsive: true,
      infiniteLoop: true
    };
    var settings02 = {
      slideWidth: 650,
      minSlides: 4,
      maxSlides: 4,
      moveSlides: 1,
      slideMargin: 24,
      pager: true,
      controls: true,
      responsive: true,
      infiniteLoop: true
    };
    var settings03 = {
      slideWidth: 650,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideMargin: 20,
      pager: true,
      controls: true,
      responsive: true,
      infiniteLoop: true
    };

    var set;
    if($(window).width() <= 480) {
      set = settings03;
    } 
    else if($(window).width() <= 768) {
      set = settings01;
    } 
    else {
      set = settings02;
    }

    return set;

  };
  var sldr;
  var resizeHandler = function() {
    sldr.reloadSlider(settings());
  };
  sldr = $('.slider1').bxSlider(settings());
  $(window).on('resize', resizeHandler);
});
```
- Chỉ trên mobile
```js
$(document).ready(function($) { 
   var slider2 =  $('.slider1').bxSlider({
      slideWidth: 650,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideMargin: 20,
      pager: true,
      controls: true,
      responsive: true,
      infiniteLoop: true
      });
   function slideResponsive01() {
      w = $(window).width();  
      if(w <= 768) {
        slider2.reloadSlider(); 
    }
    else {
      slider2.destroySlider();  
    }
  }
    $(window).on("load resize", slideResponsive01);
});
```
## height auto List Box
http://blog.webcreativepark.net/2013/10/21-112000.html
```js
$(document).ready(function () { 
  $('.list_feature li p').heightLine(); 
});
```
## counterUp
https://github.com/bfintal/Counter-Up
```js
$(function() {
  jQuery(document).ready(function( $ ) {
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });
  });
});
```
## table reponsive mobile
```html
<table class="responsive">

</table>
```

## lightbox
```html
"http://www.jacklmoore.com/colorbox/"
```
