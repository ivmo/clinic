var hamburger = document.getElementById('hamburger');
hamburger.onclick = function(e){
  e.preventDefault();
  hamburger.classList.toggle('hamburger--close');
  document.getElementById('main-nav').classList.toggle('main-nav--active');
  document.getElementById('main-nav__list').classList.toggle('main-nav__list--visible');
}

if ( jQuery(window).width() <= 767) {
jQuery(".main-nav__link").on('click', function() {
  jQuery("#hamburger").toggleClass("hamburger--close");
  jQuery("#main-nav").toggleClass("main-nav--active");
  jQuery("#main-nav__list").toggleClass("main-nav__list--visible");
});
}

// menu scroll
$(document).ready(function(){

        var $menu = $("#main-nav");
				var $height = $(".main-header").outerHeight()

        jQuery(window).scroll(function(){
            if ( jQuery(this).scrollTop() > $height && $menu.hasClass("main-nav") ){
                $menu.addClass("main-nav--fixed");
								jQuery(".main-nav__link").addClass("main-nav__link--fixed");
                jQuery('.main-header').css('margin-bottom', '79px');
            } else if(jQuery(this).scrollTop() <= $height && $menu.hasClass("main-nav--fixed")) {
                $menu.removeClass("main-nav--fixed");
								jQuery(".main-nav__link").removeClass("main-nav__link--fixed");
                jQuery('.main-header').css('margin-bottom', '0');
            }
        });//scroll
    });

  jQuery("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 1000);
    // e.preventDefault();
  });

  jQuery(document).ready(function(){
      jQuery('.exampleModalbtn').on('click', function(event) {
        event.preventDefault();
        jQuery('#exampleModal').arcticmodal();
      });
      jQuery('.btn-review').on('click', function(event) {
        event.preventDefault();
        jQuery('#review-popup').arcticmodal();
      });
  });

  jQuery(document).ready(function() {
    jQuery('.order-form__phone').mask('+7(999)999-99-99');
  });

  $('.slider').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendDots: $('.slider__dots'),
    fade: true,
  });
