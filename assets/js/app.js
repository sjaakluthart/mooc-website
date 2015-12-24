$(document).ready(function(){
    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#pre-production1'
    })
        .setClassToggle('.fixed', 'active')
        .addIndicators({name: 'pre-production1'}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production1'
    })
        .setClassToggle('.pin-top', 'pinned')
        .addIndicators({name: 'pre-production1'}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production2'
    })
        .setClassToggle('#pre-production2 ~ h2', 'pinned')
        .addIndicators({name: 'pre-production2'}) // add indicators (requires plugin)
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: '#pre-production3'
    })
        .setClassToggle('.fade-in', 'active')
        .addIndicators({name: 'pre-production3'}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production4'
    })
        .setClassToggle('#pre-production2 ~ h2', 'hide')
        .addIndicators({name: 'pre-production4'}) // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production5'
    })
        .setClassToggle('#pre-production5 ~ h2', 'pinned')
        .addIndicators({name: 'pre-production5'}) // add indicators (requires plugin)
        .addTo(controller);
});