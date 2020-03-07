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

// popover toggle
$(function () {
  $('[data-toggle="popover"]').popover()
})
// tooltip toggle
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// main nav modal toggle
$(document).ready(function(){
	$('#navbar-icon').click(function(){
		$(this).toggleClass('open');
    $("nav").toggleClass("navbar-color");
	});

  // splash nav modal toggle
  $('#navbar-icon-splash').click(function(){
    $(this).toggleClass('open');
  });

});
