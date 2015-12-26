$(document).ready(function(){

    new Elevator({
        element: document.querySelector('.back'),
        duration: 5500
    });

    // Init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '#pre-production'
    })
        .setClassToggle('#pre-production ~ img', 'pulse')
        .addIndicators({name: 'pre-production'}) // Add indicators (requires plugin)
        .addTo(controller);

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

    new ScrollMagic.Scene({
        triggerElement: '#pre-production5'
    })
        .setClassToggle('#pre-production5 ~ h2', 'pinned')
        .addIndicators({name: 'pre-production5'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production6'
    })
        .setClassToggle('.face1', 'active')
        .addIndicators({name: 'pre-production6'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production7'
    })
        .setClassToggle('.faces', 'fixed')
        .addIndicators({name: 'pre-production7'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production7'
    })
        .setClassToggle('.face2', 'active')
        .addIndicators({name: 'pre-production7'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production8'
    })
        .setClassToggle('.face3', 'active')
        .addIndicators({name: 'pre-production8'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production9'
    })
        .setClassToggle('.face4', 'active')
        .addIndicators({name: 'pre-production9'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production10'
    })
        .setClassToggle('.faces article', 'active')
        .addIndicators({name: 'pre-production10'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production11'
    })
        .setClassToggle('.faces', 'hidden')
        .addIndicators({name: 'pre-production11'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production12'
    })
        .setClassToggle('#pre-production12 + div img', 'swing')
        .addIndicators({name: 'pre-production12'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production13'
    })
        .setClassToggle('#pre-production13 + div img', 'rubber-band')
        .addIndicators({name: 'pre-production12'}) // Add indicators (requires plugin)
        .addTo(controller);
});
