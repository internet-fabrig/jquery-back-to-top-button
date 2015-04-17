/*
================================================================================
jquery.backtopbutton.js (c) 2015 http://www.internet-fabrig.de
================================================================================
*/

(function ($) {
    $.fn.backToTop = function (options) {
        // button
        var topBtn = this;

        // settings
        var settings = $.extend({
            // browser window position (in pixels) after which the "top" button is shown
            'offset': 300,
            'speed': 800,
            'positionBottom': 20,
            'positionRight': 20,
            'scrollTopDuration': 700
        }, options);

        var offset = settings['offset'];
        var speed = settings['speed'];
        var positionBottom = settings['positionBottom'];
        var positionRight = settings['positionRight'];
        var scrollTopDuration = settings['scrollTopDuration'];

        // css button position
        topBtn.css({
            'right': positionRight,
            'bottom': positionBottom
        });

        // button fadeIn and fadeOut
        $(document).scroll(function () {
            var windowPos = $(window).scrollTop();
            if (windowPos >= offset) {
                topBtn.fadeIn(speed);
            } else {
                topBtn.fadeOut(speed);
            }
        });

        // scroll to top on click
        topBtn.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0
                }, scrollTopDuration
            );
        });
    }
}(jQuery));