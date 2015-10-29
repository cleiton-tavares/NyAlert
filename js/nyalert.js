/**
 * NyAlert
 * https://github.com/cleiton-tavares
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2015, Cleiton Tavares
 * https://github.com/cleiton-tavares/NyAlert
 */
;( function( window, $ ) {

  'use strict';
  var show      = 'animated slideInDown';
  var hide      = 'animated slideOutUp';
  var $body     = $('body');

  function template(type, message) {

    var classes  = {
      warn    : 'blue-icon-alert-circled',
      success : 'blue-icon-android-circle',
      error   : 'blue-icon-close-round'
    };


    return  '<div class="ny-alert icon ' + type + '">' +
              '<div class="ny-ico">' +
                '<i class="' + classes[type] + '"></i>' +
                '<div class="ny-contanier">' +
                  message +
                '</div>' +
              '</div>' +
              '<div class="ny-close '+ type +  '"><i class="fa fa-times"></i></div>' +
            '</div>';
  };

  function trigger(){
    var $close = $('.ny-close').on('click', function () {
      nyAlert.close(this);
    });
  };

  var nyAlert = {
    open : function(data){
      if($body.find('.ny-alert'))
        $body.find('.ny-alert').remove();
      $body.prepend(template(data.type, data.message));
      $('.ny-alert').addClass(show).show();
      trigger();
    },
    close : function (self) {
      var $alert = $('.ny-alert').addClass(hide);
                   setTimeout(function () {
                    $alert.hide().removeClass('error success warn animated slideOutUp slideInDown');
                   }, 1000);
    }
  };

  /**
   * add to global namespace
   */
  window.nyAlert = nyAlert;

} )( window, $ );
