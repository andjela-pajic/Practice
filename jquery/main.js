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

// changing color of navbar when user scrolls

$(window).load(function(){
	navbarHandler();

	$(window).scroll(navbarHandler);
	$('.navbar-inner > a > i').on( 'click', function(){
    $('.menu').toggle();
});
});



// making menu to work on user's click
