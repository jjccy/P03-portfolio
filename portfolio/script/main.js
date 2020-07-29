$(document).ready(function() {
  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  var offset = -100;
  $("#product-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#project").offset().top + offset},
        'slow');
    return false;
  });

  $("#about-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#about").offset().top  + offset},
        'slow');
    return false;
  });

  $("#contact-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#contact").offset().top + offset},
        'slow');
    return false;
  });

});


$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('#back2Top').fadeIn();
    $('#hint').fadeOut();
  } else {
    $('#back2Top').fadeOut();
    $('#hint').fadeIn();
  }
});
