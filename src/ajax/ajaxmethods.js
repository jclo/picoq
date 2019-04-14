/** **************************************************************************
 *-
 * Defines Ajax methods.
 *
 * ajaxmethods.js extends PicoQ.prototype.
 *
 * Private Functions:
 *  . none,
 *
 *
 * PicoQ.prototype Methods:
 *  . load                        Loads data from the server and inserts it in DOM,
 *
 *
 *
 * @namespace    PicoQ
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules
  var Ajax = PIQ.Ajax.Private
    ;


  // -- Local constants


  // -- Local variables


  // -- PicoQ.prototype Methods ----------------------------------------------

  _.extend(PicoQ.prototype, {

    /**
     * Loads data from the server and places the returned HTML into
     * the matched element.
     *
     * @method (url [, data ] [, complete ])
     * @public
     * @param {String}      the url string,
     * @param {Object}      the params to be sent to the server,
     * @param {Function}    the function to call at the completion,
     * @returns {Object}    returns this,
     * @since 0.0.3
     */
    load: function() {
      var that     = this
        , settings = Ajax.getSettings(arguments)
        , cb
        ;

      // Do not perform an Ajax request if the 'selector' doesn't match:
      if (!this[0]) {
        return this;
      }

      cb = settings.success;
      settings.success = undefined;
      settings.method = settings.data ? 'POST' : 'GET';

      PicoQ.ajax(settings)
        .done(function(xmlString) {
          that.html(xmlString);
          if (Object.prototype.toString.call(cb) === '[object Function]') {
            cb();
          }
        });
      return this;
    }
  });
}());
/* eslint-enable one-var, semi-style */
