/* Spinner behaviour: Spinner will last 2 seconds, then an animation will reveal the screen and then main content */

$(function() {
  $(".home-container").hide();
  animationHiText();

  setTimeout(function(){
    $(".loader-home").fadeOut("slow", function() {
      //$(".video-background").addClass("home-effects");
      $(".home-container").show();
    });
  }, 2000);

  function animationHiText() {
    setTimeout(function() {
      $( ".hola-text" ).toggle();
      animationHiText();
     }, 1100);
  }
});
