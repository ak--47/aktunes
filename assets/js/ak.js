$(document).ready(function() {
    console.log("you're getting warmer...")

    // elements

    var akLogo = $('#logoFX')
    var pulse = $('.pulse')
    var glyph = $('#glyph')
    var glyphContainer = $('#glyphContainer')
    var currentIcon;
    var currentIcon_string;
    var glyphTime = 1500;
    var glitchIt = null;
    var overlay = $('.overText')


    // handlers
    glyphContainer.hover(cycleGlyph, freezeGlyph)


    //workers

    function cycleGlyph() {
        // console.log('glyph hovered')
        glitchIt = window.setInterval(function() {
            currentIcon_string = glyph.attr("class");
            currentIcon = currentIcon_string.split(" ")[1];
            glyph.removeClass(currentIcon).addClass(newIcon()).css({
                "color": colors[Math.floor(Math.random() * glyphies.length)]
            })
        }, Math.random() * (180 - 100) + 100);
        overlay.css({
            opacity: 1
        });
    }

    function freezeGlyph() {
        // console.log('glyph stopped')
        window.clearInterval(glitchIt)
        overlay.css({
            opacity: 0
        });

    }

    function newIcon() {
        var newIcon = glyphies[Math.floor(Math.random() * glyphies.length)];
        return newIcon
    }



    //runs continuously after document ready

    $(document).ready(function() {
        window.setInterval(function() {
            // GETTER
            // console.log('it ran');
            currentIcon_string = glyph.attr("class");
            currentIcon = currentIcon_string.split(" ")[1];
            // console.log(currentIcon)


            // SETTER
            glyph.removeClass(currentIcon).addClass(newIcon()).css({
                "color": colors[Math.floor(Math.random() * glyphies.length)]
            });


        }, glyphTime);
    })


    //assets

    var glyphies = [
        'fa-headphones',
        'fa-music',
        'fa-volume-up',
        'fa-battery-0',
        'fa-battery-4',
        'fa-battery-quarter',
        'fa-bullseye',
        'fa-cubes',
        'fa-flash',
        'fa-flask',
        'fa-gear',
        'fa-hashtag',
        'fa-plug',
        'fa-puzzle-piece',
        'fa-sliders',
        'fa-sun-o',
        'fa-terminal',
        'fa-university',
        'fa-sort-numeric-desc',
        'fa-sort-numeric-asc',
        'fa-hand-spock-o',
        'fa-sheqel',
        'fa-subscript',
        'fa-superscript',
        'fa-unlink',
        'fa-scissors',
        'fa-play'
    ]

    var colors = [
        '#a2faa3',
        '#92c9b1',
        '#4f759b',
        '#5d5179',
        '#571f4e',
        '#ffd8d8',
        '#daffee',
        '#f3d6ff',
        '#00eeff',
        '#ffe7fe',
        '#ffffff',
    ]
});
