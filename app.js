$(function() {
  // Set up the top-y positions for all elements
  var aboutTop    = $('.about').position().top;
  var projectsTop = $('.projects').position().top;
  var contactsTop = $('.contact').position().top;

  updateHover();

  // Add animated underline when <a> are hovered
  $('a').hover(function() {
    $(this).addClass('hover');
  }, function() {
    updateHover();
  });

  // Add animated underline for appropriate <a> when scrolling
  $(window).scroll(function() {
    updateHover();
  });

  function updateHover() {
    var scrollTop = $(window).scrollTop();

    $('a').removeClass('hover');

    if(scrollTop < projectsTop) {
      $('#about-link').addClass('hover');
    } else if(scrollTop < contactsTop) {
      $('#projects-link').addClass('hover');
    } else {
      $('#contact-link').addClass('hover');
    }
  }

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing');
	});
});
