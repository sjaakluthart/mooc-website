$(document).ready(function(){
    // Init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#pre-production1'
    })
        .setClassToggle('.fixed', 'active')
        .addIndicators({name: 'pre-production1'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production1'
    })
        .setClassToggle('.pin-top', 'pinned')
        .addIndicators({name: 'pre-production1'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production2'
    })
        .setClassToggle('#pre-production2 ~ h2', 'pinned')
        .addIndicators({name: 'pre-production2'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production3'
    })
        .setClassToggle('.fade-in', 'active')
        .addIndicators({name: 'pre-production3'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production4'
    })
        .setClassToggle('#pre-production2 ~ h2', 'hide')
        .addIndicators({name: 'pre-production4'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production5'
    })
        .setClassToggle('#pre-production5 ~ h2', 'pinned')
        .addIndicators({name: 'pre-production5'}) // Add indicators (requires plugin)
        .addTo(controller);
});
