$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('.menu-icon').on('click', function () {
		$(this).toggleClass('menu-icon_active');
		$('.menu').toggle(200);
	})

	$('body').css('min-height', $(window).height()+'px');
});
