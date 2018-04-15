/* giving header background color on scroll */

$(window).scroll(function() {
  var top = $(window).scrollTop();
  if (top >= 60) {
    $('header').addClass('pinkBackground');
  }
  else {
    $('header').removeClass('pinkBackground');
  }
});

$(document).ready(function(){
  var isLastWindowWidthSmall = $(window).width() < 715;
  //scroll effect
  $('#home').find('ul').find('a').click(function(event){
    event.preventDefault();
    var id = event.currentTarget.getAttribute("href");
    var elementFromTop = $(id).offset().top;
    var heightOfHeader = $('header').height();
    var scrollTo = elementFromTop - heightOfHeader;

    $('html, body').animate({
       scrollTop: scrollTo
    }, 500);
  });

  $(window).resize(function() {
    var isResizedWidthSmall = $(window).width() < 715;
    if (isResizedWidthSmall && isLastWindowWidthSmall) {
      return;
    } else if (isResizedWidthSmall){
      $('.menu').hide();
      $('.menuButton').show();
    } else {
      $('.menu').show();
      $('.menuButton').hide();
    }
    isLastWindowWidthSmall = isResizedWidthSmall;
  });
  //hamenuButtonmburger menu
  $('.menuButton').on( 'click', function(){
      $('.menu').toggle();
  });
});
