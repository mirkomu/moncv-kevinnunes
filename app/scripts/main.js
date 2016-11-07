$(document).ready(function() {
    $('ul li').eq(1).click(function() {

        'use strict';
        $.smoothScroll({
            scrollTarget: '#Objectif'
        });
        return false;
    });
    $('ul li').eq(2).click(function() {

        'use strict';
        $.smoothScroll({
            scrollTarget: '#Formations'
        });
        return false;
    });
    $('ul li').eq(3).click(function() {

        'use strict';
        $.smoothScroll({
            scrollTarget: '#Experiences'
        });
        return false;
    });
    $('ul li').eq(4).click(function() {

        'use strict';
        $.smoothScroll({
            scrollTarget: '#Langues'
        });
        return false;
    });
    $('ul li').eq(5).click(function() {

        'use strict';
        $.smoothScroll({
            scrollTarget: '#Informatique'
        });
        return false;
    });
    $('ul li').eq(6).click(function() {

        'use strict';
        $.smoothScroll({
            scrollTarget: '#Loisirs'
        });
        return false;
    });
    $('ul li').eq(7).click(function() {

        'use strict';
        $.smoothScroll({
            scrollTarget: '#References'
        });
        return false;
    });
    $('a[href*="#hautdepage"]').click(function() {

        'use strict';
        $.smoothScroll({
            scrollTarget: '#hautdepage'
        });
        return false;
    });
    var bar = new ProgressBar.Circle(container, {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: { color: '#FFEA82', a: 0 },
        to: { color: '#ED6A5A', a: 1 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    $(".progress").ready(function() {
        bar.animate(1.0); // Number from 0.0 t
    });
});