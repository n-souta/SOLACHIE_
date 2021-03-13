// header hidden
$(function() {
  var $win = $(window),
      $header = $('.header'),
      headerHeight = $header.outerHeight(),
      startPos = 0;

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      $header.css('top', '-' + headerHeight + 'px');
    } else {
      $header.css('top', '0');
    }
    startPos = value;
  });
});

var mySwiper = new Swiper('.swiper-container', {
	slidesPerView:1.4,
	spaceBetween: 30
});