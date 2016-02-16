$(document).ready(function(){

    new Elevator({
        element: document.querySelector('.back'),
        duration: 5500
    });

    var height = $( window ).height();

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

    new ScrollMagic.Scene({
        triggerElement: '#production1'
    })
        .setClassToggle('html', 'yellow')
        .addIndicators({name: 'test1'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production1'
    })
        .setClassToggle('#production-chapter', 'pinned')
        .addIndicators({name: 'production1'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production1'
    })
        .setClassToggle('#test-chapter', 'hide')
        .addIndicators({name: 'production1'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production2'
    })
        .setClassToggle('#flipboard-top', 'active')
        .addIndicators({name: 'production2'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production3'
    })
        .setClassToggle('#course', 'pinned')
        .addIndicators({name: 'production3'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production4'
    })
        .setClassToggle('#production4 + div > img', 'swing')
        .addIndicators({name: 'production4'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production5',
        duration: height
    })
        .setClassToggle('html', 'stop')
        .addIndicators({name: 'production5'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production5'
    })
        .setClassToggle('#course', 'hide')
        .addIndicators({name: 'production5'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production6'
    })
        .setClassToggle('#video', 'pinned')
        .addIndicators({name: 'production6'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production7',
        duration: height
    })
        .setClassToggle('html', 'stop')
        .addIndicators({name: 'production7'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#production7'
    })
        .setClassToggle('#video', 'hide')
        .addIndicators({name: 'production7'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution'
    })
        .setClassToggle('html', 'red')
        .addIndicators({name: 'execution'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution'
    })
        .setClassToggle('#back-red', 'hide')
        .addIndicators({name: 'execution'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution'
    })
        .setClassToggle('#clock-red', 'hide')
        .addIndicators({name: 'execution'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution'
    })
        .setClassToggle('#execution-chapter', 'pinned')
        .addIndicators({name: 'execution'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution'
    })
        .setClassToggle('#production-chapter', 'hide')
        .addIndicators({name: 'execution'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution1'
    })
        .setClassToggle('#platform', 'pinned')
        .addIndicators({name: 'execution1'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution2'
    })
        .setClassToggle('#launch', 'pinned')
        .addIndicators({name: 'execution2'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution2'
    })
        .setClassToggle('#platform', 'hide')
        .addIndicators({name: 'execution2'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution3'
    })
        .setClassToggle('#fireworks', 'active')
        .addIndicators({name: 'execution3'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution4'
    })
        .setClassToggle('#maintenance', 'pinned')
        .addIndicators({name: 'execution4'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution4'
    })
        .setClassToggle('#launch', 'hide')
        .addIndicators({name: 'execution4'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution7'
    })
        .setClassToggle('#execution7 ~ div > img', 'shake')
        .addIndicators({name: 'execution7'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution5'
    })
        .setClassToggle('#maintenance', 'hide')
        .addIndicators({name: 'execution5'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution5'
    })
        .setClassToggle('#final', 'pinned')
        .addIndicators({name: 'execution5'}) // Add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#execution6'
    })
        .setClassToggle('#execution6 ~ div > img', 'pulse')
        .addIndicators({name: 'execution6'}) // Add indicators (requires plugin)
        .addTo(controller);

});
