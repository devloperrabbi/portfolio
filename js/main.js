
(function($){
	$(document).ready(function(){
	   ///// typewriter/////===== -->
		$('.head').typewriter({speed:250});
		
	   ///// slick-careuosel/////===== -->	
		$('.your-class').slick({
			prevArrow: false,
			nextArrow: false,
			autoplay: true,
			autoplaySpeed: 2000,
			infinite: true
		});
		// type js =======>
		var typed = new Typed('.head', {
			strings: [
			'rabbi ahmed',
			'a website designer.',
			'a wordpress devloper'
			],
			typeSpeed: 200,
			startDelay: 1000,
			backDelay: 3000,
			loop: true,
			loopCount: Infinity
		});
		// animate js ===========>
		new WOW({
		  'boxClass': 'animated'
		}).init();
	});
})(jQuery)