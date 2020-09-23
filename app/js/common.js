$(function() {

	$('.menu-icon').on('click', function () {
		$(this).toggleClass('menu-icon_active');
		$('.menu').toggle(200);
	});

	//$('body').css('min-height', $(window).height()+'px');

	$('.main-slide').slick({
		prevArrow: '<span class="slick-prev main-slide__arrow main-slide__arrow-left"></span>',
		nextArrow: '<span class="slick-next main-slide__arrow main-slide__arrow-right"></span>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			},
		]
	});

	$('.review-slider').slick({
		arrows: false,
		dots: true
	});

	$('.request_modal').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		showCloseBtn: false
	});

	if($(window).width() > 992){
		$('#contact-map').height($('#contact-map').parent().height());
	}

	$('.questions-tab__item-title').on('click', function () {
		$('.questions-tab__item').removeClass('questions-tab__item_active');
		$(this).parent('.questions-tab__item').addClass('questions-tab__item_active');
	});

	/*$('.service-content-nav').on('init', function (event, slick) {
		var active_item = $('.service-content-nav .service-content-nav__item_active');
		var active_item_num =  $('.service-content-nav .slick-slide').index( active_item );
		$('.service-content-nav').slick('slickGoTo', active_item_num);
	});*/
	$('.service-content-nav').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 3,
		centerMode: true,
		responsive: [
			/*{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},*/
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	if($(window).width() < 768){
		var active_item = $('.service-content-nav .service-content-nav__item_active');
		var active_item_num =  $('.service-content-nav .slick-slide').index( active_item );
		$('.service-content-nav').slick('slickGoTo', active_item_num);

		$('.service-list').slick({
			arrows: false,
			dots: true,
			centerMode: true,
		})
	}

	$('.about-news-slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		prevArrow: '<span class="slick-prev about-news-slider__arrow about-news-slider__arrow-left"></span>',
		nextArrow: '<span class="slick-next about-news-slider__arrow about-news-slider__arrow-right"></span>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		]
	});

	$('.about-articles-slider').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 2,
		centerMode: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
					prevArrow: '<span class="slick-prev about-article-slider__arrow about-article-slider__arrow-left"></span>',
					nextArrow: '<span class="slick-next about-article-slider__arrow about-article-slider__arrow-right"></span>',
				}
			}
		]
	});

	$('.order-form-payment input[name=paymethod]').che
});
