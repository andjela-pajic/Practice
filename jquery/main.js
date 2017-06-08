function navbarHandler(){
	var scrollTop = $(window).scrollTop();
	var $nav = $('nav');
	var backgroundClass = 'pink';
	if (scrollTop > 574) {
		$nav.addClass(backgroundClass);
	} else {
		$nav.removeClass(backgroundClass);
	};
}

$(window).load(function(){
	navbarHandler();

	$(window).scroll(navbarHandler);
});

$('.navbar-inner > a > i').on( 'click', function(){
    $('.menu').toggle();
});


