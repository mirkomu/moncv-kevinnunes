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
});