(function ($, undefined) {
  $(document).ready(function () {
    $('.main__menu-icon').on('click', function () {
      if ($('.main').hasClass('content-expanded')) {
        $('.main')
          .removeClass('content-expanded')
          .addClass('content-collapsed');
      } else {
        $('.main')
          .removeClass('content-collapsed')
          .addClass('content-expanded');
      }
    });

  })
  
})(jQuery);



