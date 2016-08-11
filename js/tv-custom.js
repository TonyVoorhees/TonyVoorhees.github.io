// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});

// nav modal toggle
$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

// popover toggle
$(function () {
  $('[data-toggle="popover"]').popover()
})
