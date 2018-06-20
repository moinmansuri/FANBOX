jQuery(function($) {



  /**
   * Mobile navigation
   */
  (function($){

    $('.mobile-menu.toggle').on('click', function () {
      $('.navigation').toggleClass ('active');
    });

  })(jQuery);

  /**
   * Notifications
   */
  (function($){

    $('#notifications-toggle').webuiPopover({
      url: '#notifications-popover',
      style: 'webui-notifications-popover',
      offsetLeft: -10,
      container: '#topbar'
    });

  })(jQuery);

  /**
   * Tables
   */
  (function($){

    $('table tbody tr[href]').on('click', function(e){
      document.location = this.getAttribute('href');
    })

  })(jQuery);

  /**
   * Modal
   */
  (function($){

    $('a[data-toggle="permission"],button[data-toggle="permission"]').on('click', function(e) {
      var test = window.confirm('Are you sure you wish to complete this action?');

      if (!test) {
        e.preventDefault();
      }
    });

  })(jQuery);
});
