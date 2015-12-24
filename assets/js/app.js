$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#pre-production1'
    })
        .setClassToggle('.fixed', 'active')
        .addIndicators({name: 'pre-production'}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production1'
    })
        .setClassToggle('.pin-top', 'pinned')
        .addIndicators({name: 'pre-production'}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production2'
    })
        .setClassToggle('#pre-production2 ~ h2', 'pinned')
        .addIndicators({name: 'pre-production'}) // add indicators (requires plugin)
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: '#pre-production3'
    })
        .setClassToggle('.fade-in', 'active')
        .addIndicators({name: 'pre-production'}) // add indicators (requires plugin)
        .addTo(controller);
});