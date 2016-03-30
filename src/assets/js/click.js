$(document).ready(function(){

  new Elevator({
    element: document.querySelector('.back'),
    duration: 5500
  });

  $('nav li:nth-of-type(1)').click(function(event) {
    $(window).scrollTo('#pre-production', 1000);
  });

  $('nav li:nth-of-type(2)').click(function(event) {
    $(window).scrollTo('#pre-production22', 1000);
  });

  $('nav li:nth-of-type(3)').click(function(event) {
    $(window).scrollTo('#production1', 1000);
  });

  $('nav li:nth-of-type(4)').click(function(event) {
    $(window).scrollTo('#execution', 1000);
  });

  $('nav li:nth-of-type(5)').click(function(event) {
    $(window).scrollTo('#evaluation', 1000);
  });

  $('.overview').click(function(event) {
    $('#overview').toggleClass('active');
  });

  $('#overview1').click(function(event) {
    $('#overview').toggleClass('active');
    $(window).scrollTo('#pre-production', 1000);
  });

  $('#overview2').click(function(event) {
    $('#overview').toggleClass('active');
    $(window).scrollTo('#pre-production22', 1000);
  });

  $('#overview3').click(function(event) {
    $('#overview').toggleClass('active');
    $(window).scrollTo('#production1', 1000);
  });

  $('#overview4').click(function(event) {
    $('#overview').toggleClass('active');
    $(window).scrollTo('#execution', 1000);
  });

  $('#overview5').click(function(event) {
    $('#overview').toggleClass('active');
    $(window).scrollTo('#evaluation', 1000);
  });

  $('.yes').click(function(event) {
    $(window).scrollTo('#production6', 1000);
  });

  $('.no').click(function(event) {
    $(window).scrollTo('#getting-feedback', 1000);
  });

  $('.yes1').click(function(event) {
    $(window).scrollTo('#execution', 1000);
  });

  $('.click').click(function(event) {
    var extraMedia = '#' + $(this).attr('data-name');
    $(extraMedia).addClass('active');
  });

  $('.close').click(function(event) {
    $('.extra-media').removeClass('active');
  });

  $('#extra-media1 .arrow-next').click(function(event) {
    $('#extra-media1').addClass('step1');
  });

  $('#extra-media1 .arrow-back').click(function(event) {
    $('#extra-media1').removeClass('step1');
  });

  $('#extra-media3 .arrow-next').click(function(event) {
    $('#extra-media3').addClass('step1');
  });

  $('#extra-media3 .arrow-back').click(function(event) {
    $('#extra-media3').removeClass('step1');
  });

  $('#extra-media5 .arrow-next').click(function(event) {
    $('#extra-media5').addClass('step1');
  });

  $('#extra-media5 .arrow-back').click(function(event) {
    $('#extra-media5').removeClass('step1');
  });

  $('#extra-media6 .arrow-next').click(function(event) {
    $('#extra-media6').addClass('step1');
  });

  $('#extra-media6 .arrow-back').click(function(event) {
    $('#extra-media6').removeClass('step1');
  });

  $('#extra-media7 .arrow-next').click(function(event) {

    if ($('#extra-media7').hasClass('step1')) {
        $('#extra-media7').addClass('step2');
    } else {
      $('#extra-media7').addClass('step1');
    }

  });

  $('#extra-media7 .arrow-back').click(function(event) {

    if ($('#extra-media7').hasClass('step2')) {
        $('#extra-media7').removeClass('step2');
    } else {
      $('#extra-media7').removeClass('step1');
    }

  });

});
