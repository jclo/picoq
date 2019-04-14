/** **************************************************************************
 *-
 * Extends PicoQ with Ajax's static methods.
 *
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . ajax                        performs an asynchronous HTTP Ajax request,
 *  . get                         loads data using an HTTP GET request,
 *  . getJSON                     loads JSON-encoded data using an HTTP GET request,
 *  . post                        loads data using an HTTP POST request,
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


  // -- Private Functions ----------------------------------------------------


  // -- Public Static Methods ------------------------------------------------

  /**
   * Performs an asynchronous HTTP Ajax request.
   *
   * @function (arg1, arg2)
   * @public
   * @param {String|Object}   the url or the object settings,
   * @param {Object}          the object settings or undefined,
   * @returns {Object}        returns a superset of the xhr object,
   * @since 0.0.3
   */
  /* eslint-disable no-underscore-dangle */
  PicoQ.ajax = function() {
    var o          = Ajax.getArguments(arguments)
      , xhr        = new window.XMLHttpRequest()
      , callbacks = []
      , url       = o.url
      , settings  = o.settings
      ;

    // Register the deferred functions:
    xhr.done = Ajax.register(xhr, callbacks, 'done');
    xhr.fail = Ajax.register(xhr, callbacks, 'fail');
    xhr.always = Ajax.register(xhr, callbacks, 'always');

    // Retrieve the data from the server:
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 0) {
          Ajax.fire(callbacks, xhr, 'success');
          if (settings.success) {
            // Fire the callback 'success':
            if (settings.dataType === 'json') {
              settings.success(JSON.parse(xhr.responseText), xhr.statusText, xhr);
            } else {
              settings.success(xhr.responseText, xhr.statusText, xhr);
            }
          }
        } else {
          Ajax.fire(callbacks, xhr, 'error');
        }
      }
    };

    // Send:
    if (settings.method === 'GET') {
      /* method is GET */
      if (settings.data) {
        url += '?' + Ajax.encodeParams(settings.data);
      }
      xhr.open('GET', url, true);
      xhr.send(null);
    } else {
      /* method is POST */
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(Ajax.encodeParams(settings.data));
    }
    return xhr;
  };
  /* eslint-enable no-underscore-dangle */

  /**
   * Loads data from the server using a HTTP GET request.
   *
   * @function (arg1...)
   * @public
   * @param {String|Object}   url [, data ] [, success ] [, dataType ] or [ settings ]
   * @param ...               ...,
   * @returns {Object}        returns a superset of the xhr object,
   * @since 0.0.3
   */
  PicoQ.get = function() {
    var settings = Ajax.getSettings(arguments)
      ;

    settings.method = 'GET';
    return PicoQ.ajax(settings);
  };

  /**
   * Loads JSON-encoded data from the server using a HTTP GET request.
   *
   * @function (arg1...)
   * @public
   * @param {String|Object}   url [, data ] [, success ] or [ settings ]
   * @param ...               ...,
   * @returns {Object}        returns a superset of the xhr object,
   * @since 0.0.3
   */
  PicoQ.getJSON = function() {
    var settings = Ajax.getSettings(arguments)
      ;

    settings.method = 'GET';
    settings.dataType = 'json';
    return PicoQ.ajax(settings);
  };

  /**
   * Loads data from the server using a HTTP POST request.
   *
   * @function (arg1...)
   * @public
   * @param {String|Object}   url [, data ] [, success ] [, dataType ] or [ settings ]
   * @param ...               ...,
   * @returns {Object}        returns a superset of the xhr object,
   * @since 0.0.3
   */
  PicoQ.post = function() {
    var settings = Ajax.getSettings(arguments)
      ;

    settings.method = 'POST';
    return PicoQ.ajax(settings);
  };
}());
/* eslint-enable one-var, semi-style */
