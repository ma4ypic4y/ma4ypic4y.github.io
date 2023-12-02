$(document).ready(function(){
  $(document).on('touchstart click', 'nav ul li', function(){
    var currTarget = $(this).attr('data-loc');
    $('html, body').stop().animate({
      scrollTop: $($('#' + currTarget)).offset().top
    }, 500);
  });
});