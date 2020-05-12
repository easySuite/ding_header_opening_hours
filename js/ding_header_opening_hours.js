(function ($) {
  "use strict";

  Drupal.behaviors.ding_header_opening_hours = {
    attach: function (context, settings) {
      var $libraries_pane = $('.pane-opened-libraries', context);
      // Move pane in the top bar menu.
      if ($libraries_pane.length > 0) {
        $('li.topbar-link-opening-hours', context).find('a').replaceWith($libraries_pane);

        $('.pane-opened-libraries', context).once('opened', function () {
          // Adding "plus" sign.
          $('<span class="icon-clock"></span>').insertBefore($('#block-ding-header-opening-hours-ding-header-opened-today'));

          $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).hide();

          $libraries_pane.on('mouseenter', function () {
            $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).show();
          });

          $libraries_pane.on('mouseleave', function () {
            $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).hide();
          });

          $('.oh-plus').on('click', function () {
            if (!$('body').hasClass('responsive-layout-mobile')) return;
            $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).toggle();
          });
        });
      }
    }
  };
})(jQuery);
