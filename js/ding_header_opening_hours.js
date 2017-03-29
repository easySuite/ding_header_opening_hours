(function($){
  "use strict";

  Drupal.behaviors.ding_header_opening_hours = {
    attach: function(context, settings) {
      $('.pane-opened-libraries .pane-title').once('opened', function() {
        // Adding "plus" sign.
        $('<span class="oh-plus"></span>').insertAfter($('.pane-opened-libraries .pane-title'));

        $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).hide();

        $('.oh-plus').on('click', function() {
          $('#block-ding-header-opening-hours-ding-header-opened-today-all', context).toggle();
        });
      });
    }
  };
})(jQuery)
