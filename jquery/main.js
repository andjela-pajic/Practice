function navbarHandler(){
	var scrollTop = $(window).scrollTop();
	var $nav = $('nav');
	var backgroundClass = 'pink';
	if (scrollTop > 10) {
		$nav.addClass(backgroundClass);
	} else {
		$nav.removeClass(backgroundClass);
	};
}

// changing color of navbar when user scrolls

$(window).load(function(){
	navbarHandler();

	$(window).scroll(navbarHandler).resize(function(){
		if (window.innerWidth > 960) {
			$('.menu').show();
		}
	});
	$('.navbar-inner > a > i').on( 'click', function(){
    	$('.menu').toggle();
	});
});



// making menu to work on user's click
