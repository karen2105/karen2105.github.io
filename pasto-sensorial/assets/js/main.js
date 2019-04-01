$(document).ready(function() {
	
	if (screen.width < 768){
	  $('#nav_bar').removeClass('navbar-static-top mainNavBar');
      $('#nav_bar').addClass('navbar-fixed-top');
      
	}
	
	$("#mainMenu .nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

init();
  
  $(window).scroll(function () {
      console.log($(window).scrollTop())
	  
	  
	if (screen.width > 768){ 
	
		if ($(window).scrollTop() > $("header").height()-$("#nav_bar").height()) {
		  $('#nav_bar').addClass('navbar-fixed-top');
		  $('#nav_bar').removeClass('navbar-static-top mainNavBar');
		  
		}
		if ($(window).scrollTop() < $("header").height()-$("#nav_bar").height()) {
			$('#nav_bar').addClass('navbar-static-bottom mainNavBar');		
		  $('#nav_bar').removeClass('navbar-fixed-top');
		}
	
	}
	
	
  });
  
  
  $('.selector-left').click(function(){	

	if($(this).parent().attr('class') == 'selector-group gender-group'){
		genderIndex = decreaseImage(cantGender, genderIndex, "decrease");	
		draw();
	} else if($(this).parent().attr('class') == 'selector-group skin-group'){
		skinIndex = decreaseImage(cantBody, skinIndex, "decrease");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group eyes-group'){
		eyeIndex = decreaseImage(cantEyes, eyeIndex, "decrease");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group hair-group'){
		hairIndex = decreaseImage(cantHair, hairIndex, "decrease");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group hair-colour-group'){
		hairColourIndex = decreaseImage(cantHairColour, hairColourIndex, "decrease");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group hat-group'){
		hatIndex = decreaseImage(cantHat, hatIndex, "decrease");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group hat-colour-group'){
		hatColourIndex = decreaseImage(cantHatColour, hatColourIndex, "decrease");
		if(hatIndex==2 && hatColourIndex==0){hatColourIndex=4;}			
		draw();
	} else if($(this).parent().attr('class') == 'selector-group dress-group'){
		dressIndex = decreaseImage(cantDress, dressIndex, "decrease");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group dress-colour-group'){
		dressColourIndex = decreaseImage(cantDressColour, dressColourIndex, "decrease");		
		draw();
	}
	

});


$('.selector-right').click(function(){
	
if($(this).parent().attr('class') == 'selector-group gender-group'){
		genderIndex = decreaseImage(cantGender, genderIndex, "increase");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group skin-group'){		
		skinIndex = decreaseImage(cantBody, skinIndex, "increase");			
		draw();
	} else if($(this).parent().attr('class') == 'selector-group eyes-group'){
		eyeIndex = decreaseImage(cantEyes, eyeIndex, "increase");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group hair-group'){
		hairIndex = decreaseImage(cantHair, hairIndex, "increase");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group hair-colour-group'){
		hairColourIndex = decreaseImage(cantHairColour, hairColourIndex, "increase");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group hat-group'){
		hatIndex = decreaseImage(cantHat, hatIndex, "increase");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group hat-colour-group'){
		hatColourIndex = decreaseImage(cantHatColour, hatColourIndex, "increase");
		if(hatIndex==2 && hatColourIndex==4){hatColourIndex=0;}			
		draw();
	} else if($(this).parent().attr('class') == 'selector-group dress-group'){
		dressIndex = decreaseImage(cantDress, dressIndex, "increase");		
		draw();
	} else if($(this).parent().attr('class') == 'selector-group dress-colour-group'){
		dressColourIndex = decreaseImage(cantDressColour, dressColourIndex, "increase");		
		draw();
	}
	

});
  
  
});



//0 = mujer
var cantGender = 2;
var cantBody = 6;
var cantEyes = 4;
var cantHair = 4;
var cantHairColour = 4;
var cantHat = 4;
var cantHatColour = 6;
var cantDress = 3;
var cantDressColour = 4;





$('btn-reset').click(function(){
	init();	
});

$('btn-save').click(function(){
	
	
})


function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}



function init(){	
    genderIndex = 0
    skinIndex = 0
    eyeIndex = 0
    hairIndex = 0
    hairColourIndex = 0
    hatIndex = 0
    hatColourIndex = 0 
    dressIndex = 0  
    dressColourIndex = 0
	
	draw();	
}

function rutas(){	
	rutaBack='./assets/img/background.png';
	rutaSkin='./assets/img/skin-' + genderIndex + '-' + skinIndex + '.png';
	rutaEyes='./assets/img/eyes-' + eyeIndex +'.png';
	rutaHair='./assets/img/hair-' + genderIndex + '-' + hairIndex + '-' + hairColourIndex +'.png';	
	rutaHat='./assets/img/hat-'   + genderIndex + '-' + hatIndex +'-' + hatColourIndex +'.png';
	rutaDress='./assets/img/dress-' + genderIndex + '-' + dressIndex +'-' + dressColourIndex +'.png';
}



function draw(){
	rutas();
	
	function loadImages(sources, callback) {
	
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
	  
	  
      canvas = document.getElementById('mainCanvas');
      var context = canvas.getContext('2d');
	  
	  

      var sources = {
		rutaBack: rutaBack,
        body_img: rutaSkin,
        eyes_img: rutaEyes,
		hair_img: rutaHair,
		dress_img: rutaDress,
		hat_img: rutaHat
      };

      loadImages(sources, function(images) {
		  
		var hRatio = canvas.width  / images.body_img.width;
	   var vRatio =  canvas.height / images.body_img.height;	   
	   var ratio  = Math.min ( hRatio, vRatio );	   
	   var centerShift_x = ( canvas.width - images.body_img.width*ratio ) / 2;
	   var centerShift_y = ( canvas.height - images.body_img.height*ratio ) / 2;

	    context.clearRect(0, 0, canvas.width, canvas.height);
	   
	   context.drawImage(images.rutaBack, centerShift_x, centerShift_y, images.rutaBack.width*ratio, images.rutaBack.height*ratio);
		context.drawImage(images.body_img, centerShift_x, centerShift_y, images.body_img.width*ratio, images.body_img.height*ratio);
        context.drawImage(images.eyes_img, centerShift_x, centerShift_y, images.eyes_img.width*ratio, images.eyes_img.height*ratio);
        context.drawImage(images.hair_img, centerShift_x, centerShift_y, images.hair_img.width*ratio, images.hair_img.height*ratio);
        context.drawImage(images.dress_img, centerShift_x, centerShift_y, images.dress_img.width*ratio, images.dress_img.height*ratio);
        context.drawImage(images.hat_img, centerShift_x, centerShift_y, images.hat_img.width*ratio, images.hat_img.height*ratio);
      });
	
}

function decreaseImage(cant, indexEntrada, varible){
		
		if(varible=="decrease"){
			index= indexEntrada - 1;
			
		} else if(varible=="increase"){
			index = indexEntrada + 1;	
		}
		
    	if (index < 0) {
    		index = cant-1;
    	}
		if(index >=cant){
			index = 0;	
		}
		
		return index;
}

function randomize(){

	genderIndex = randomNumber(0, cantGender);
    skinIndex = randomNumber(0, cantBody);
    eyeIndex = randomNumber(0, cantEyes);
    hairIndex = randomNumber(0, cantHair);
    hairColourIndex = randomNumber(0, cantHairColour);
    hatIndex = randomNumber(0, cantHat);
    hatColourIndex = randomNumber(0, cantHatColour);
    dressIndex = randomNumber(0, cantDress);
    dressColourIndex = randomNumber(0, cantDressColour);
	
	draw();		
	
}

function download(){
	var canvas = document.getElementById("mainCanvas");
	canvas.toBlob(function(blob) { saveAs(blob, "avatarCarnaval.png"); });	
}