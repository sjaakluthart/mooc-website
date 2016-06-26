var md = new MobileDetect(window.navigator.userAgent);

if (md.mobile() || md.tablet()) {
  console.log('kut mobieltjes');

  $('.intro-text').remove();
  $('.scroll').remove();
  $('.extra-media').remove();
  $('.fixed').remove();
  $('.main').remove();
  $('#overview').remove();
  $('.mobile-text').css('display', 'block');
}
