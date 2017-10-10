(function($) {
    "use strict";

    $(document).ready(function() {

        var scroll = new SmoothScroll();
        scroll.init({
            speed: 1000,
            easing: 'easeOutCubic'
        });
    });

    $(window).on('load' ,function () {

        parallaxInit();
        initTyped();
        new WOW().init();
    });

    function parallaxInit() {

        $('#section-home').parallax("30%", 0.3);
        $('#section-work').parallax("30%", 0.1);
    }

})(jQuery);

function initTyped() {
    $("#typed").typed({
        strings: ["A Designer", "A Freelancer", "A Developer"],
        // typing speed
        typeSpeed: 300,
        // time before typing starts
        startDelay: 100,
        // backspacing speed
        backSpeed: 50,
        // time before backspacing
        backDelay: 3000,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: ".",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {
        },
        // starting callback function before each string
        preStringTyped: function() {
        },
        //callback for every typed string
        onStringTyped: function() {
        },
        // callback for reset
        resetCallback: function() {
        }
    });
}
