// Materialize Initializations--------------
// $(document).ready(function(){
//   $('.carousel').carousel();
// });


$('.carousel.carousel-slider').carousel({
  fullWidth: false,
  indicators: true,
  duration: 300,
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});
// -----------------------------------------
// move next carousel
$('.moveNextCarousel').click(function(e){
e.preventDefault();
e.stopPropagation();
$('.carousel').carousel('next');
});

// move prev carousel
$('.movePrevCarousel').click(function(e){
e.preventDefault();
e.stopPropagation();
$('.carousel').carousel('prev');
});

// --------------------------
$(window).on('resize', function() {
  if($(window).width() > 450) {
      $('#mobile-links').addClass('hidden');
      $('#body').removeClass('limit400');
  }else{
      $('#body').addClass('limit400');
      $('#body').removeClass('limit1200');
  }
})