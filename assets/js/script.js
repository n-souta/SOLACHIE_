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


$(function() {
  //swiper 768以下で起動
  var swiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 768) {
          if (swiper) {
              return;
          } else {
              swiper = new Swiper('.swiper-container', {
                  loop: true,
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                  },
              });
          }
      } else {
          if (swiper) {
              swiper.destroy();
              swiper = undefined;
          } 
      } 
  });
}); 