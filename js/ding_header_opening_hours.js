(function($){
  "use strict";

  Drupal.behaviors.ding_header_opening_hours = {
    attach: function(context, settings) {
      $('.pane-opened-libraries .pane-content').once('opened', function() {
        // Adding "plus" sign.
        $('<span class="oh-clock"></span>').insertAfter($('.pane-opened-libraries .pane-content'));

        $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).hide();

        $('.pane-opened-libraries').on('mouseenter', function() {
          $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).show();
        });

        $('.pane-opened-libraries').on('mouseleave', function() {
          $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).hide();
        });

        $('.oh-clock').on('click', function() {
          if(!$('body').hasClass('responsive-layout-mobile')) {
            return;
          }
          $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).toggle();
        });
      });
    }
  };
})(jQuery);
