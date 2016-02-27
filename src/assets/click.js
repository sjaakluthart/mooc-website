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

});
