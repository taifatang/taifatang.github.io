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
        var target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        history.pushState(null, null, href);
        event.preventDefault();
    });


});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Portfolio touch handling for mobile
(function() {
    var items = document.querySelectorAll('.portfolio-banner-item');

    function clearActive() {
        items.forEach(function(item) { item.classList.remove('touch-active'); });
    }

    items.forEach(function(item) {
        item.addEventListener('touchstart', function(e) {
            var isActive = item.classList.contains('touch-active');
            clearActive();
            if (!isActive) {
                item.classList.add('touch-active');
            }
            e.stopPropagation();
        }, { passive: true });
    });

    document.addEventListener('touchstart', clearActive, { passive: true });
    window.addEventListener('scroll', clearActive, { passive: true });
})();

// Arrow key navigation between snap targets
document.addEventListener('keydown', function(e) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    var snapTargets = Array.from(document.querySelectorAll('header, section:not(.timeline-section), .timeline > li'));
    var scrollTop = window.scrollY;

    var currentIndex = 0;
    for (var i = 0; i < snapTargets.length; i++) {
        var top = snapTargets[i].getBoundingClientRect().top + scrollTop;
        if (top <= scrollTop + 10) {
            currentIndex = i;
        }
    }

    var targetIndex = e.key === 'ArrowDown'
        ? Math.min(currentIndex + 1, snapTargets.length - 1)
        : Math.max(currentIndex - 1, 0);

    if (targetIndex !== currentIndex) {
        e.preventDefault();
        snapTargets[targetIndex].scrollIntoView({ behavior: 'smooth' });
    }
});
