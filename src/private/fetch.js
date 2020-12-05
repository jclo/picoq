/** ************************************************************************
 *
 * Retrieves data from the server.
 *
 * fetch.js is just a literal object that contains a set of functions.
 * It can't be instantiated.
 *
 * Private Functions:
 *  . _getArgs                    returns the named fetch arguments,
 *  . _fetch                      fetches data on the server,
 *
 *
 * Public Static Methods:
 *  . fetch                       fetches data on the server,
 *  . get                         retrieves a text file from the server,
 *  . getJSON                     retrieves a JSON file from the server,
 *  . post                        sends a request to the server,
 *  . load                        retrieves data from the server,
 *  . loadXML                     retrieves an XMLString and add it into the DOM,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ********************************************************************** */
/* global */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


// -- Vendor Modules


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Private Functions ----------------------------------------------------

/**
 * Returns the named fetch arguments.
 *
 * @function (...args)
 * @private
 * @param {...}             the optional arguments [url, options, type, callback],
 * @returns {}              -,
 * @since 0.0.0
 */
function _getArgs(...args) {
  let url = ''
    , options = { method: 'GET' }
    , type = null
    , callback = null
    ;

  const [arg1, arg2, arg3, arg4] = args;
  if (args.length === 0) return [null, options, null, null];

  if (args.length === 1) {
    if (typeof arg1 === 'string') {
      return [arg1, options, null, null];
    }
    return [url, options, null, null];
  }

  if (args.length === 2) {
    if (typeof arg1 === 'string') {
      if (typeof arg2 === 'object' && arg2.method) {
        return [arg1, arg2, null, null];
      }
      if (typeof arg2 === 'string') {
        return [arg1, options, arg2, null];
      }
      if (typeof arg2 === 'function') {
        return [arg1, options, null, arg2];
      }
    }
    return [url, options, null, null];
  }

  if (args.length === 3) {
    if (typeof arg1 === 'string') {
      if (typeof arg2 === 'object' && arg2.method) {
        if (typeof arg3 === 'string') {
          return [arg1, arg2, arg3, null];
        }
        if (typeof arg3 === 'function') {
          return [arg1, arg2, null, arg3];
        }
        return [arg1, arg2, null, null];
      }

      if (typeof arg2 === 'string') {
        if (typeof arg3 === 'function') {
          return [arg1, options, arg2, arg3];
        }
        return [arg1, options, arg2, null];
      }
    }
    return [url, options, null, null];
  }

  if (args.length > 3) {
    if (typeof arg1 === 'string') url = arg1;
    if (typeof arg2 === 'object' && arg2.method) options = arg2;
    if (typeof arg3 === 'string') type = arg3;
    if (typeof arg4 === 'function') callback = arg4;
    return [url, options, type, callback];
  }

  return [url, options, null, null];
}

/**
 * Fetches data on the server.
 *
 * Nota:
 * By default, fetch returns text data. If you want to return json data, you
 * have to pass the argument 'json'. For instance, to get a json file from
 * the server:
 *  . Fetch('/', 'json', (json) => {
 *      //
 *   })
 *
 * @function (...args)
 * @public
 * @param {...}             the optional arguments [url, options, type, callback],
 * @returns {}              -,
 * @since 0.0.0
 */
function _fetch(url, options, type, callback) {
  fetch(url, options)
    .then((resp) => {
      if (resp.ok) {
        return type === 'json' ? resp.json() : resp.text();
      }
      return Promise.reject(resp);
    })
    .then((data) => {
      if (callback) {
        callback(null, data);
      } else {
        /* eslint-disable-next-line no-console */
        console.log('warning: fetch gets no callback!');
      }
    })
    .catch((err) => {
      if (callback) {
        callback(err);
      } else {
        /* eslint-disable-next-line no-console */
        console.log('warning: fetch gets no callback!');
      }
    });
}


// -- Public Static Methods ------------------------------------------------

const Fetch = {

  /**
   * Fetches data on the server.
   *
   * @method (arg1, [arg2], [arg3], [arg4])
   * @public
   * @param {String}        the server url,
   * @param {Object}        the fetch options,
   * @param {String}        the type of file (json or text),
   * @param {String}        the function to call at the completion,
   * @returns {Object}      returns a promise,
   * @since 0.0.0
   */
  fetch(...args) {
    const [url, options, type, callback] = _getArgs(...args);
    return new Promise((resolve, reject) => {
      _fetch(url, options, type, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
        if (callback) callback(err, data);
      });
    });
  },

  /**
   * Retrieves a text file from the server.
   *
   * @method (arg1, [arg2], [arg3], [arg4])
   * @public
   * @param {String}        the server url,
   * @param {Object}        the fetch options,
   * @param {String}        the type of file (json or text),
   * @param {String}        the function to call at the completion,
   * @returns {Object}      returns a promise,
   * @since 0.0.0
   */
  get(...args) {
    const [url,,, callback] = _getArgs(...args);
    return this.fetch(url, { method: 'GET' }, 'text', callback);
  },

  /**
   * Retrieves a JSON file from the server.
   *
   * @method (arg1, [arg2], [arg3], [arg4])
   * @public
   * @param {String}        the server url,
   * @param {Object}        the fetch options,
   * @param {String}        the type of file (json or text),
   * @param {String}        the function to call at the completion,
   * @returns {Object}      returns a promise,
   * @since 0.0.0
   */
  getJSON(...args) {
    const [url,,, callback] = _getArgs(...args);
    return this.fetch(url, { method: 'GET' }, 'json', callback);
  },

  /**
   * Sends a request to the server.
   *
   * @method (arg1, [arg2], [arg3], [arg4])
   * @public
   * @param {String}        the server url,
   * @param {Object}        the fetch options,
   * @param {String}        the type of answer (json or text),
   * @param {String}        the function to call at the completion,
   * @returns {Object}      returns a promise,
   * @since 0.0.0
   */
  post(...args) {
    return this.fetch(...args);
  },

  /**
   * Fetches data from the server.
   *
   * @method (arg1, [arg2], [arg3], [arg4])
   * @public
   * @param {String}        the server url,
   * @param {Object}        the fetch options,
   * @param {String}        the type of file (json or text),
   * @param {String}        the function to call at the completion,
   * @returns {Object}      returns a promise,
   * @since 0.0.0
   */
  load(...args) {
    const [url,, type, callback] = _getArgs(...args);
    return this.fetch(url, { method: 'GET' }, type, callback);
  },

  /**
   * Retrieves an XMLString from the server and inserts it into the DOM.
   * (specific to PicoQ)
   *
   * @method (arg1, arg2, [arg3], [arg4], [arg5])
   * @public
   * @param {Object}        the PicoQ object,
   * @param {String}        the server url,
   * @param {Object}        the fetch options,
   * @param {String}        the type of file (json or text),
   * @param {String}        the function to call at the completion,
   * @returns {Object}      returns a promise,
   * @since 0.0.0
   */
  loadXML(picoq, ...args) {
    const [url,,, callback] = _getArgs(...args);

    return new Promise((resolve, reject) => {
      _fetch(url, { method: 'GET' }, 'text', (err, data) => {
        if (err) {
          reject(err);
        } else {
          picoq.html(data);
          resolve(data);
        }
        if (callback) callback(err, data);
      });
    });
  },
};


// -- Export
export default Fetch;

/* eslint-enable one-var, semi-style, no-underscore-dangle */
