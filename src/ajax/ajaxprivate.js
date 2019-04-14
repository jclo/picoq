/** **************************************************************************
 *-
 * Defines private static methods for Ajax functionnality.
 *
 * ajaxprivate.js is just a literal object that contains a set of functions.
 * it can't be intantiated.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Private Static Methods:
 *  . getDefaultSettings          returns the default settings for an ajax call,
 *  . getArguments                returns the url and the settings for an ajax call,
 *  . getSettings                 returns the settings for the ajax shorthand functions,
 *  . encodeParams                returns the encoded url params,
 *  . register                    returns the deferred function done, fail or always,
 *  . fire                        fires the callback functions (done, fail or always),
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
  var Root = PIQ.Ajax.Private;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Ajax Private Static Methods ------------------------------------------

  _.extend(Root, {

    /**
     * Returns the default settings for an ajax call.
     *
     * @function ()
     * @private
     * @param {}          -,
     * @returns {Object}  returns the default settings,
     * @since 0.0.3
     */
    getDefaultSettings: function() {
      return {
        url: '',
        method: 'GET',
        dataType: 'text',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      };
    },

    /**
     * Returns the url and the settings for an ajax call merged with the default
     * settings.
     *
     * @function (arg1, arg2)
     * @private
     * @param {String|Object} the url or the ajax settings,
     * @param {Object}        the ajax settings,
     * @returns {Object}      returns the url and the extended settings,
     * @since 0.0.3
     */
    getArguments: function(args) {
      var defaultSettings = this.getDefaultSettings()
        , url
        , settings
        ;

      // Extract url and settings from arguments:
      switch (args.length) {
        case 0:
          url = '';
          settings = _.extend(defaultSettings);
          break;

        case 1:
          if (Object.prototype.toString.call(args[0]) === '[object String]') {
            url = args[0];
            settings = _.extend(defaultSettings);
          } else if (Object.prototype.toString.call(args[0]) === '[object Object]') {
            url = Object.prototype.toString.call(args[0].url) === '[object String]' ? args[0].url : '';
            settings = _.extend(defaultSettings, args[0]);
          } else {
            url = '';
            settings = _.extend(defaultSettings);
          }
          break;

        case 2:
        default:
          url = Object.prototype.toString.call(args[0]) === '[object String]' ? args[0] : '';
          settings = Object.prototype.toString.call(args[1]) === '[object Object]'
            ? _.extend(defaultSettings, args[1])
            : _.extend(defaultSettings);
          break;
      }
      return { url: url, settings: settings };
    },

    /**
     * Returns the settings for the ajax shorthand functions (get, post, load, getJSON).
     *
     * @function (arg1, [arg2], [arg3], [arg4])
     * @private
     * @param {String|Object} the url or the settings,
     * @param ...             ...,
     * @returns {Object}      returns the formatted setting,
     * @since 0.0.3
     */
    getSettings: function(args) {
      var settings = {
        url: null,
        data: null,
        success: null,
        dataType: null
      };

      switch (args.length) {
        case 0:
          break;

        // fn(url) or fn([settings])
        case 1:
          if (Object.prototype.toString.call(args[0]) === '[object String]') {
            settings.url = args[0];
            break;
          }
          if (Object.prototype.toString.call(args[0]) === '[object Object]') {
            settings = args[0];
          }
          break;

        // fn(url, data) or fn(url, success) or fn(url, dataType)
        case 2:
          if (Object.prototype.toString.call(args[0]) !== '[object String]') {
            break;
          }
          settings.url = args[0];

          if (Object.prototype.toString.call(args[1]) === '[object Object]') {
            settings.data = args[1];
            break;
          }
          if (Object.prototype.toString.call(args[1]) === '[object Function]') {
            settings.success = args[1];
            break;
          }
          if (Object.prototype.toString.call(args[1]) === '[object String]') {
            settings.dataType = args[1];
          }
          break;

        // fn(url [, data ] [, success / dataType ]) or fn(url, success, dataType)
        case 3:
          if (Object.prototype.toString.call(args[0]) !== '[object String]') {
            break;
          }
          settings.url = args[0];

          if (Object.prototype.toString.call(args[1]) === '[object Object]') {
            settings.data = args[1];
            if (Object.prototype.toString.call(args[2]) === '[object Function]') {
              settings.success = args[2];
              break;
            }
            if (Object.prototype.toString.call(args[2]) === '[object String]') {
              settings.dataType = args[2];
            }
            break;
          }

          if (Object.prototype.toString.call(args[1]) === '[object Function]') {
            settings.success = args[1];
          }
          if (Object.prototype.toString.call(args[2]) === '[object String]') {
            settings.dataType = args[2];
          }
          break;

        // fn(url, data, success, dataType)
        case 4:
        default:
          if (Object.prototype.toString.call(args[0]) !== '[object String]') {
            break;
          }
          settings.url = args[0];
          if (Object.prototype.toString.call(args[1]) === '[object Object]') {
            settings.data = args[1];
          }
          if (Object.prototype.toString.call(args[2]) === '[object Function]') {
            settings.success = args[2];
          }
          if (Object.prototype.toString.call(args[3]) === '[object String]') {
            settings.dataType = args[3];
          }
          break;
      }
      return settings;
    },

    /**
     * Returns the encoded url params ('param1=value1&param2=vlaue2').
     *
     * @function (arg1)
     * @private
     * @param {Object}      the url params,
     * @returns {String}    returns the url encoded params,
     * @since 0.0.3
     */
    encodeParams: function(params) {
      var s = ''
        , keys
        , i
        ;

      if (Object.prototype.toString.call(params) !== '[object Object]') {
        return null;
      }

      keys = Object.keys(params);
      for (i = 0; i < keys.length; i++) {
        if (i === 0) {
          s += keys[i] + '=' + encodeURIComponent(params[keys[i]]);
        } else {
          s += '&' + keys[i] + '=' + encodeURIComponent(params[keys[i]]);
        }
      }
      return s;
    },

    /**
     * Returns the deferred function done, fail or always.
     *
     * Nota: Mutates the array callbacks.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}      the xhr ajax object,
     * @param {Array}       an array of callback functions associated with done, fail, always,
     * @param {String}      the name of the deferred function (done, fail, always),
     * @returns {Function}  returns the deferred function (done, fail or always),
     * @since 0.0.3
     */
    register: function(xhr, callbacks, cbname) {
      return function(cb) {
        var obj = {};
        if (cb) {
          obj[cbname] = cb;
          callbacks.push(obj);
        } else {
          obj[cbname] = null;
          callbacks.push(obj);
        }
        return xhr;
      };
    },

    /**
     * Fires the callback functions associated with done, fail or always.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Array}      the array of callbacks,
     * @param {Object}     the xhr ajax object,
     * @returns {}         -,
     * @since 0.0.3
     */
    fire: function(callbacks, xhr, result) {
      var cname
        , fn
        , i
        ;

      switch (result) {
        case 'success':
          for (i = 0; i < callbacks.length; i++) {
            cname = Object.keys(callbacks[i])[0];
            fn = callbacks[i][cname];
            /* eslint-disable-next-line max-len */
            if (Object.prototype.toString.call(fn) === '[object Function]' && (cname === 'done' || cname === 'always' || cname === 'success')) {
              fn(xhr.responseText, xhr.statusText, xhr);
            }
          }
          break;

        case 'error':
          for (i = 0; i < callbacks.length; i++) {
            cname = Object.keys(callbacks[i])[0];
            fn = callbacks[i][cname];
            if (typeof fn === 'function' && (cname === 'fail' || cname === 'always')) {
              fn(xhr, xhr.statusText);
            }
          }
          break;

        /* istanbul ignore next */
        default:
          throw new Error('Pic.ajax.fire: this case must never happen!');
      }
    }
  });
}());
/* eslint-enable one-var, semi-style */
