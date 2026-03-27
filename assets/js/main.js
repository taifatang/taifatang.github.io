/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var href = $anchor.attr('href');
        $('html').css('scroll-snap-type', 'none');
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top
        }, 1500, 'easeInOutExpo', function() {
            $('html').css('scroll-snap-type', 'y mandatory');
        });
        history.pushState(null, null, href);
        event.preventDefault();
    });

    var viewPortHeight = $(window).height();
    $('#headerimg').css({height: viewPortHeight});

});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
