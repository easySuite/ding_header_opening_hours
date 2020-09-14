(function ($) {
  "use strict";

  Drupal.behaviors.ding_header_opening_hours = {
    attach: function (context, settings) {
      // Move pane in the top bar menu.
      var $opened_libraries = $('.pane-opened-libraries');
      var $opening_hour_link = $('li.topbar-link-opening-hours', context);
      if ($opening_hour_link.find('a').length < 1) {
        return;
      }
      $opening_hour_link.find('a.topbar-link-opening-hours').replaceWith($opened_libraries);

      $('.pane-opened-libraries', context).once('opened', function () {
        var $opened_libraries_allday = $('#block-ding-header-opening-hours-ding-header-opened-today-all', context);
        // Adding "plus" sign.
        $('<span class="icon-clock"></span>').insertBefore($('#block-ding-header-opening-hours-ding-header-opened-today'));

        $opened_libraries_allday.hide();

        $opened_libraries.on('mouseenter', function () {
          $opened_libraries_allday.show();
        });

        $opened_libraries.on('mouseleave', function () {
          $opened_libraries_allday.hide();
        });

        $('.oh-plus').on('click', function () {
          if (!$('body').hasClass('responsive-layout-mobile')) {
            return;
          }
          $opened_libraries_allday.toggle();
        });
      });
    }
  };
})(jQuery);
