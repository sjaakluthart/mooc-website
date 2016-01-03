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
        .setClassToggle('#pre-chapter', 'pinned')
        .addIndicators({name: 'pre-production1'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production2'
    })
        .setClassToggle('#internal-proposal', 'pinned')
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
        .setClassToggle('#internal-proposal', 'hide')
        .addIndicators({name: 'pre-production4'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production5'
    })
        .setClassToggle('#recruitment', 'pinned')
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
        triggerElement: '#pre-production11'
    })
        .setClassToggle('#recruitment', 'hide')
        .addIndicators({name: 'pre-production11'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production11-1'
    })
        .setClassToggle('#research', 'pinned')
        .addIndicators({name: 'pre-production11.1'}) // Add indicators (requires plugin)
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
        .addIndicators({name: 'pre-production13'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production14'
    })
        .setClassToggle('.dart', 'active')
        .addIndicators({name: 'pre-production14'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production15'
    })
        .setClassToggle('#research', 'hide')
        .addIndicators({name: 'pre-production15'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production16'
    })
        .setClassToggle('#concept', 'pinned')
        .addIndicators({name: 'pre-production16'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production17'
    })
        .setClassToggle('#pre-production17 + div img', 'tada')
        .addIndicators({name: 'pre-production17'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production18'
    })
        .setClassToggle('#pre-production18 + div img', 'wobble')
        .addIndicators({name: 'pre-production18'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production19'
    })
        .setClassToggle('#pencil', 'active')
        .addIndicators({name: 'pre-production19'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production20'
    })
        .setClassToggle('#concept', 'hide')
        .addIndicators({name: 'pre-production20'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production21'
    })
        .setClassToggle('#submission', 'pinned')
        .addIndicators({name: 'pre-production21'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production21'
    })
        .setClassToggle('.paper', 'active')
        .addIndicators({name: 'pre-production21'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production22'
    })
        .setClassToggle('#pre-chapter', 'hide')
        .addIndicators({name: 'pre-production22'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production22'
    })
        .setClassToggle('#submission', 'hide')
        .addIndicators({name: 'pre-production22'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#pre-production22'
    })
        .setClassToggle('#test-chapter', 'pinned')
        .addIndicators({name: 'pre-production22'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#test'
    })
        .setClassToggle('html', 'white')
        .addIndicators({name: 'test'}) // Add indicators (requires plugin)
        .addTo(controller);
});
