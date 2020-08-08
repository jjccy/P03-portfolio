var offset = -100;

$(document).ready(function() {

  navChange();

  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

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
  if (height > 350) {
    $('#back2Top').fadeIn();
    $('#hint').fadeOut();
  } else {
    $('#back2Top').fadeOut();
    $('#hint').fadeIn();
  }



  navChange();

});

function navChange() {
  var secondOffset = -300;

  var about = $("#about").offset().top;
  var product = $("#project").offset().top;

  if ($(window).scrollTop() >= (about + offset + secondOffset)) {
    console.log(1);
    $('#about-link').addClass('visit');
    $('#product-link').removeClass('visit');
  } else if ($(window).scrollTop() >= (product + offset + secondOffset)) {
    console.log(2);
    $('#about-link').removeClass('visit');
    $('#product-link').addClass('visit');
  } else {
    console.log(3);
    $('#about-link').removeClass('visit');
    $('#product-link').removeClass('visit');
  }
}
