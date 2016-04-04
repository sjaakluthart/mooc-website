$(document).ready(function(){

  var height = $( window ).height();

  // Init controller
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: '#pre-production'
  })
  .setClassToggle('#pre-production ~ img', 'pulse')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production1'
  })
  .setClassToggle('.fixed', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production1'
  })
  .setClassToggle('#pre-chapter', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production2'
  })
  .setClassToggle('#internal-proposal', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production2'
  })
  .setClassToggle('#clock', 'day5')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production3'
  })
  .setClassToggle('.fade-in', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production4'
  })
  .setClassToggle('#internal-proposal', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production5'
  })
  .setClassToggle('#recruitment', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production6'
  })
  .setClassToggle('.face1', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production7'
  })
  .setClassToggle('.faces', 'fixed')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production7'
  })
  .setClassToggle('.face2', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production8'
  })
  .setClassToggle('.face3', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production9'
  })
  .setClassToggle('.face4', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production10'
  })
  .setClassToggle('.faces article', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production11'
  })
  .setClassToggle('.faces', 'hidden')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production11'
  })
  .setClassToggle('#recruitment', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production11-1'
  })
  .setClassToggle('#research', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production11-1'
  })
  .setClassToggle('#clock', 'day8')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production14'
  })
  .setClassToggle('.dart', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production15'
  })
  .setClassToggle('#research', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production16'
  })
  .setClassToggle('#concept', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production16'
  })
  .setClassToggle('#clock', 'day20')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production19'
  })
  .setClassToggle('#pencil', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production20'
  })
  .setClassToggle('#concept', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production21'
  })
  .setClassToggle('#submission', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production21'
  })
  .setClassToggle('.paper', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production21'
  })
  .setClassToggle('#clock', 'day30')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production22'
  })
  .setClassToggle('#pre-chapter', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production22'
  })
  .setClassToggle('#submission', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#pre-production22'
  })
  .setClassToggle('#test-chapter', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#test'
  })
  .setClassToggle('html', 'white')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production1'
  })
  .setClassToggle('html', 'yellow')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production1'
  })
  .setClassToggle('#production-chapter', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production1'
  })
  .setClassToggle('#test-chapter', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production2'
  })
  .setClassToggle('#flipboard-top', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production2'
  })
  .setClassToggle('#clock', 'day60')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production3'
  })
  .setClassToggle('#course', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production4'
  })
  .setClassToggle('#production4 + div > img', 'swing')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production5',
    duration: height
  })
  .setClassToggle('html', 'stop')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production5'
  })
  .setClassToggle('#course', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production6'
  })
  .setClassToggle('#video', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production7',
    duration: height
  })
  .setClassToggle('html', 'stop')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#production7'
  })
  .setClassToggle('#video', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution'
  })
  .setClassToggle('html', 'red')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution'
  })
  .setClassToggle('#back-red', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution'
  })
  .setClassToggle('#clock-red', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution'
  })
  .setClassToggle('#execution-chapter', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution'
  })
  .setClassToggle('#production-chapter', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution'
  })
  .setClassToggle('#clock', 'day120')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution1'
  })
  .setClassToggle('#platform', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution2'
  })
  .setClassToggle('#launch', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution2'
  })
  .setClassToggle('#platform', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution3'
  })
  .setClassToggle('#fireworks', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution4'
  })
  .setClassToggle('#maintenance', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution4'
  })
  .setClassToggle('#launch', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution7'
  })
  .setClassToggle('#execution7 ~ div > img', 'shake')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution5'
  })
  .setClassToggle('#maintenance', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution5'
  })
  .setClassToggle('#final', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#execution6'
  })
  .setClassToggle('#execution6 ~ div > img', 'pulse')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation'
  })
  .setClassToggle('#evaluation-chapter', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation'
  })
  .setClassToggle('#execution-chapter', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation'
  })
  .setClassToggle('#final', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation'
  })
  .setClassToggle('html', 'green')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation'
  })
  .setClassToggle('#back-yellow', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation'
  })
  .setClassToggle('#clock', 'day165')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation1'
  })
  .setClassToggle('.pages', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation2'
  })
  .setClassToggle('#feedback', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation3'
  })
  .setClassToggle('#feedback', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation3'
  })
  .setClassToggle('#evaluation-chapter', 'hide')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation3'
  })
  .setClassToggle('#omt', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation3'
  })
  .setClassToggle('#free-tips', 'pinned')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation3'
  })
  .setClassToggle('html', 'omt')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation3'
  })
  .setClassToggle('#tips1', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation4'
  })
  .setClassToggle('#tips2', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation5'
  })
  .setClassToggle('#tips3', 'active')
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#evaluation6'
  })
  .setClassToggle('#tips4', 'active')
  .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '#evaluation6'
    })
    .setClassToggle('#clock', 'paused')
    .addTo(controller);

});
