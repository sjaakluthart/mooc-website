$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#pre-production'
    })
        .setClassToggle('.fixed', 'active')
        .addIndicators({name: 'pre-production'}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#pin1"})
        .setClassToggle('#pin1', 'pinned')
        .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);
});