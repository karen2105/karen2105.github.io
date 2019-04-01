$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.home').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
   	$('a.portfolio').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#portfolio').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.contact').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#contact').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#menuBtn a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
	
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	
	$('.Texts').css('top',(0-(scrolled*.8))+'px');
	$('.Nubes').css('top',(0-(scrolled*.99))+'px');
	$('.Front').css('top',(0-(scrolled*.1))+'px');
	$('.Down').css('top',(0+(scrolled*.8))+'px')
	$('.Side').css('right',(0-(scrolled*.2))+'px');
	$('.SideD').css('left',(0-(scrolled*.2))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var w = 1030;
	var karen = document.getElementById('#karen');
	var section1Top =  0;
	var section2Top =  $('#about').offset().top - (($('#portfolio').offset().top - $('#about').offset().top) / 2);
	var section3Top =  $('#portfolio').offset().top - (($('#contact').offset().top - $('#portfolio').offset().top) / 2);
	var section4Top =  $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 2);;
	
	$('nav#menuBtn a').removeClass('active');
	$('#karen').removeClass('active');
	
	
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#menuBtn a.home').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#menuBtn a.about').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#menuBtn a.portfolio').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#menuBtn a.contact').addClass('active');
	}
	
	if($(window).width()<= w){
		if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
			$('#karen').addClass('active');
		}
	}
	
	
}

