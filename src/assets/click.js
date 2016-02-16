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
    console.log('click5');
  });

});
