// -- Private Ajax functions -------------------------------------------------
/* eslint-disable one-var, semi-style */

'use strict';

Pic.ajax = {

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
   * @param {Object}    the url params,
   * @returns {String}  returns the url encoded params,
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
   * @param {Object}     the xhr ajax object,
   * @param {Array}      an array of callback functions associated with done, fail, always,
   * @param {String}     the name of the deferred function (done, fail, always),
   * @returns {Function} returns the deferred function (done, fail or always),
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
};


// -- Public Ajax functions --------------------------------------------------
/**
 * Performs an asynchronous HTTP Ajax request.
 *
 * @function (arg1, arg2)
 * @public
 * @param {String|Object}  the url or the object settings,
 * @param {Object}         the object settings or undefined,
 * @returns {Object}       returns a superset of the xhr object,
 * @since 0.0.3
 */
/* eslint-disable no-underscore-dangle */
PicoQ.ajax = function() {
  var _a             = Pic.ajax
    , o              = _a.getArguments(arguments)
    , xhr            = new window.XMLHttpRequest()
    , callbacks      = []
    , url            = o.url
    , settings       = o.settings
    ;

  // Register the deferred functions:
  xhr.done = _a.register(xhr, callbacks, 'done');
  xhr.fail = _a.register(xhr, callbacks, 'fail');
  xhr.always = _a.register(xhr, callbacks, 'always');

  // Retrieve the data from the server:
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 0) {
        _a.fire(callbacks, xhr, 'success');
        if (settings.success) {
          // Fire the callback 'success':
          if (settings.dataType === 'json') {
            settings.success(JSON.parse(xhr.responseText), xhr.statusText, xhr);
          } else {
            settings.success(xhr.responseText, xhr.statusText, xhr);
          }
        }
      } else {
        _a.fire(callbacks, xhr, 'error');
      }
    }
  };

  // Send:
  if (settings.method === 'GET') {
    /* method is GET */
    if (settings.data) {
      url += '?' + _a.encodeParams(settings.data);
    }
    xhr.open('GET', url, true);
    xhr.send(null);
  } else {
    /* method is POST */
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(_a.encodeParams(settings.data));
  }
  return xhr;
};
/* eslint-enable no-underscore-dangle */

/**
 * Loads data from the server using a HTTP GET request.
 *
 * @function (arg1...)
 * @public
 * @param {String|Object}  url [, data ] [, success ] [, dataType ] or [ settings ]
 * @param ...              ...,
 * @returns {Object}       returns a superset of the xhr object,
 * @since 0.0.3
 */
PicoQ.get = function() {
  var settings = Pic.ajax.getSettings(arguments)
    ;

  settings.method = 'GET';
  return PicoQ.ajax(settings);
};

/**
 * Loads JSON-encoded data from the server using a HTTP GET request.
 *
 * @function (arg1...)
 * @public
 * @param {String|Object}  url [, data ] [, success ] or [ settings ]
 * @param ...              ...,
 * @returns {Object}       returns a superset of the xhr object,
 * @since 0.0.3
 */
PicoQ.getJSON = function() {
  var settings = Pic.ajax.getSettings(arguments)
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
 * @param {String|Object}  url [, data ] [, success ] [, dataType ] or [ settings ]
 * @param ...              ...,
 * @returns {Object}       returns a superset of the xhr object,
 * @since 0.0.3
 */
PicoQ.post = function() {
  var settings = Pic.ajax.getSettings(arguments)
    ;

  settings.method = 'POST';
  return PicoQ.ajax(settings);
};


// -- Public Ajax methods ----------------------------------------------------
PicoQ._.extend(PicoQ.prototype, {

  /**
   * Load data from the server and places the returned HTML into the matched element.
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
      , settings = Pic.ajax.getSettings(arguments)
      , cb
      ;

    // Do not perform an Ajax request if the 'selector' doesn't match:
    if (!this[0]) {
      return this;
    }

    cb = settings.success;
    settings.success = undefined;
    /* istanbul ignore next */
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
/* eslint-enable one-var, semi-style */
