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

	//hamburger menu
	$('.navbar-inner > a > i').on( 'click', function(){
    	$('.menu').toggle();
	});

  //scroll effect
	$('#home').find('.navbar-nav').find('a').click(function(event){
		event.preventDefault();
		var id = event.currentTarget.getAttribute("href");
    var elementFromTop = $(id).offset().top;
		var heightOfNavBar = $('.navbar').height();
    var scrollTo = elementFromTop - heightOfNavBar;

		$('html, body').animate({
			 scrollTop: scrollTo
	  }, 500);


	});
});



// making menu to work on user's click
