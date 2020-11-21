$(document).ready(function(){
 





// Mobile menu 
$('#show').hide();

$('#click').click(function(){
	$("#show").slideToggle();
});


// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 600
});



/**
*  owlCarousel
*/
var owl = $('.banner-c');
owl.owlCarousel({
	items:1,
	loop:false,
	margin:10,
	autoplay:false,
	autoplayTimeout:2000,
	autoplayHoverPause:true
});
$('.play').on('click',function(){
	owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
	owl.trigger('stop.owl.autoplay')
})


/**
*  Animated
**/
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();
document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};





});