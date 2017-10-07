

;(function($) {
    "use strict";

    $(document).ready(function() {

    });

    $(window).on('load' ,function () {

        parallaxInit();
    });

    function parallaxInit() {

        $('#section-home').parallax("30%", 0.3);
    }

})(jQuery);
