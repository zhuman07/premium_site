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

	$('.main-slide').slick({
		prevArrow: '<span class="slick-prev main-slide__arrow main-slide__arrow-left"></span>',
		nextArrow: '<span class="slick-next main-slide__arrow main-slide__arrow-right"></span>'
	});
});
