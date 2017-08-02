// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"], one-var: 0, no-param-reassign: 0,
  no-underscore-dangle: 0 */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
  } else {
    // Browser globals.
    root.PicoQ = factory(root);
  }
}(this, function() {
  'use strict';

  var PicoQ
    , docu
    , _
    , _u
    ;


  // -- PicoQ Public Methods ---------------------------------------------------
  PicoQ = function(selector) {
    if (this instanceof PicoQ) {
      if (selector) {
        this[0] = docu.querySelector(selector);
        return this;
      }
      return null;
    }
    // Initialize docu to DOM or VDOM (for testing purpose):
    docu = PicoQ.VDOM ? PicoQ.VDOM.window.document : window.document;
    return new PicoQ(selector);
  };

  // Define prototype functions.
  // Prototype functions are attached to PicoQ.prototype by the function
  // PicoQ._extend()
  PicoQ.prototype = {
    //
  };


  // -- Private functions ------------------------------------------------------
  /* eslint-disable no-underscore-dangle */

  PicoQ._ = {

    /**
     * Is a given variable undefined?
     *
     * @function (arg1)
     * @private
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isUndefined: function(obj) {
      return obj === undefined;
    },

    /**
     * Is a given value null?
     *
     * @function (arg1)
     * @private
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isNull: function(obj) {
      return obj === null;
    },

    /**
     * Is a given value a boolean?
     *
     * @function (arg1)
     * @private
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isBoolean: function(obj) {
      return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
    },

    /**
     * Is a given value a string?
     *
     * @function (arg1)
     * @private
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isString: function(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    },

    /**
     * Is a given value a number?
     *
     * @function (arg1)
     * @private
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isNumber: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Number]';
    },

    /**
     * Is a given value NaN?
     * (NaN is the only number which does not equal itself)
     * (copied from: http://underscorejs.org)
     *
     * @function (arg1)
     * @private
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    isNaN: function(obj) {
      return PicoQ._.isNumber(obj) && obj !== +obj;
    },

    /**
     * Is a given value an odd number?
     *
     * @function (arg1)
     * @private
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true (odd), false (even) or undefined (not a number),
     * @since 0.0.0
     */
    /* eslint-disable no-void */
    isOdd: function(obj) {
      var n = obj % 2;
      return obj === parseFloat(obj) ? !!n : void 0;
    },
    /* eslint-enable no-void */

    /**
     * Is a given variable an object?
     *
     * @function (arg1)
     * @private
     * @param {Object}    the object to test,
     * @returns {Boolean} returns true or false,
     * @since 0.0.3
     */
    isObject: function(obj) {
      var type = typeof obj;
      return (type === 'function' || type === 'object') && !!obj;
    },

    /**
     * Is a given variable a literal object?
     *
     * @function (arg1)
     * @private
     * @param {Object}    the object to test,
     * @returns {Boolean} returns true or false,
     * @since 0.0.3
     */
    isLiteralObject: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    },

    /**
     * Is a given variable a function?
     *
     * @function (arg1)
     * @private
     * @param {Object}    the object to test,
     * @returns {Boolean} returns true or false,
     * @since 0.0.3
     */
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    },

    /**
     * Is a given value an array?
     *
     * @function (arg1)
     * @private
     * @param {Object}    the object to test,
     * @returns {Boolean} returns true or false,
     * @since 0.0.3
     */
    isArray: Array.isArray || /* istanbul ignore next */ function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },

    /**
     * Extends a given object with all the properties in passed-in object(s).
     *
     * Nota: mutates obj
     *       The passed-in objects must be literal objects. The method extends
     *       the first object with the properties/values of the n + 1 objects.
     *       If the property values are objects, the method passes their reference.
     *       This method doesn't perform a deep extend.
     *
     * @function (arg1)
     * @private
     * @param {Object}    the objects to merge,
     * @returns {Object}  the resulting object,
     * @since 0.0.0
     */
    /* eslint-disable no-restricted-syntax, no-param-reassign */
    extend: function(obj) {
      var source
        , prop
        , i
        ;

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (prop in source) {
          if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
          }
        }
      }
      return obj;
    }
    /* eslint-enable no-restricted-syntax, no-param-reassign */
  };

  // Assign PicoQ.overslash to _:
  _ = PicoQ._;


  // -- Private functions ------------------------------------------------------
  /* eslint-disable no-underscore-dangle */

  PicoQ.utilities = {

    /**
     * Normalizes the CSS properties.
     * (replace '-' between composite name by camelcase style).
     * Ex: font-size -> fontSize
     *
     * @function (arg1)
     * @private
     * @param {String}    the CSS property name,
     * @returns {String}  the normalized CSS property name,
     * @since 0.0.0
     */
    normalizeCssPropertyName: function(name) {
      var arr = _.isString(name) ? name.split('-') : []
        , normalized = ''
        , i
        ;

      // Convert name with '-' (ex.: 'font-size' to 'fontSize'):
      for (i = 0; i < arr.length; i++) {
        if (i === 0) {
          normalized += arr[i];
        } else {
          normalized += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
      }
      return normalized;
    }
  };

  // Assign PicoQ._u to _u:
  _u = PicoQ.utilities;


  // -- Public Methods to insert/remove nodes to/from the DOM ------------------
  PicoQ._.extend(PicoQ.prototype, {
    /**
     * Gets/Sets the HTML contents of the element,
     *
     * @method (arg1)
     * @public
     * @param {String}    the html contents to add,
     * @returns {Object}  returns this or the HTML contents,
     * @since 0.0.0
     */
    html: function(xmlString) {
      if (xmlString) {
        this[0].innerHTML = xmlString;
        return this;
      }
      if (this[0]) {
        return this[0].innerHTML;
      }
      return undefined;
    },

    /**
     * Removes all the childs of the current node.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    empty: function() {
      var node = this[0];
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
      return this;
    },

    /**
     * Appends an HTML string after the last child of the current node.
     *
     * @method (arg1)
     * @public
     * @param {String}    an HTML string,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    append: function(xmlString) {
      this[0].insertAdjacentHTML('beforeend', xmlString);
      return this;
    },

    /**
     * Appends an HTML string before the first child of the current node.
     *
     * @method (arg1)
     * @public
     * @param {String}    an HTML string,
     * @returns {Object}  returns this,
     * @since 0.0.1
     */
    prepend: function(xmlString) {
      this[0].insertAdjacentHTML('afterbegin', xmlString);
      return this;
    },

    /**
     * Appends an HTML string after the current node.
     *
     * @method (arg1)
     * @public
     * @param {String}    an HTML string,
     * @returns {Object}  returns this,
     * @since 0.0.1
     */
    after: function(xmlString) {
      this[0].insertAdjacentHTML('afterend', xmlString);
      return this;
    },

    /**
     * Appends an HTML string before the current node.
     *
     * @method (arg1)
     * @public
     * @param {String}    an HTML string,
     * @returns {Object}  returns this,
     * @since 0.0.1
     */
    before: function(xmlString) {
      this[0].insertAdjacentHTML('beforebegin', xmlString);
      return this;
    },

    /**
     * Replaces the current node with the given DOMString.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    an HTML string
     * @returns {Object}  returns this,
     * @since 0.0.2
     */
    replaceWith: function(xmlString) {
      var oldChild = this[0]
        , parent = this[0].parentNode
        , index =  Array.prototype.indexOf.call(parent.children, oldChild)
        // , parser = new DOMParser()
        // , newchild = parser.parseFromString(xmlString, 'text/xml').firstChild
        , wrapper = docu.createElement('div')
        , newChild
        ;

      // Replace the old child by new one:
      wrapper.innerHTML = xmlString;
      newChild = wrapper.firstChild;
      parent.replaceChild(newChild, oldChild);
      this[0] = parent.children[index];

      return this;
    },

    /**
     * Gets/Sets the text contents of the element,
     *
     * @method (arg1)
     * @public
     * @param {String}    the text contents to add,
     * @returns {Object}  returns this or the text content,
     * @since 0.0.0
     */
    text: function(text) {
      if (text) {
        this[0].textContent = text;
        return this;
      }
      return this[0].textContent;
    }
  });


  // -- Public Methods to manage the css properties --------------------------------
  PicoQ._.extend(PicoQ.prototype, {
    /**
     * Gets/Sets the style attribute of the element,
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    the style attribute,
     * @param {String}    the style attribute value,
     * @returns {String}  returns the style attribute value or this,
     * @since 0.0.0
     */
    css: function(styleAttr, value) {
      var attr = _u.normalizeCssPropertyName(styleAttr);

      if (!value) {
        // Get attribute:
        return this[0].style[attr];
      }

      // Set attribute:
      this[0].style[attr] = value;
      return this;
    }
  });


  // -- Public Methods to manage the classes ---------------------------------------
  PicoQ._.extend(PicoQ.prototype, {
    /**
     * Returns the DOMTokenList collection of the class attributes of the element.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Object}  returns the DOMTokenList of the element,
     * @since 0.0.0
     */
    getClassList: function() {
      return this[0].classList;
    },

    /**
     * Adds a class name to the element.
     *
     * @method (arg1)
     * @public
     * @param {String}    the class name to add,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    addClass: function(className) {
      this[0].classList.add(className);
      return this;
    },

    /**
     * Removes a class name to the element.
     *
     * @method (arg1)
     * @public
     * @param {String}    the class name to remove,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    removeClass: function(className) {
      this[0].classList.remove(className);
      return this;
    },

    /**
     * Toggles a class name for the element.
     *
     * @method (arg1)
     * @public
     * @param {String}    the class name to add/remove,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    toggleClass: function(className) {
      this[0].classList.toggle(className);
      return this;
    }
  });


  // -- Public Methods to manage the node attributes -------------------------------
  PicoQ._.extend(PicoQ.prototype, {

    /**
     * Sets or Gets the specified attribute.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    the attribute name,
     * @param {String}    the attribute value,
     * @returns {Object}  returns this or the attribute value,
     * @since 0.0.0
     */
    attr: function(attr, value) {
      if (value) {
        this[0].setAttribute(attr, value);
        return this;
      }
      return this[0].getAttribute(attr);
    },

    /**
     * Removes the specified attribute.
     *
     * @method (arg1)
     * @public
     * @param {String}    the attribute name,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    removeAttr: function(attr) {
      this[0].removeAttribute(attr);
      return this;
    }
  });


  // -- Public Methods to manage the events ----------------------------------------
  PicoQ._.extend(PicoQ.prototype, {

    /**
     * Adds an event listener to the selected node.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    the event name,
     * @param {Function}  the function to call when the event is fired,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    on: function(event, callback) {
      this[0].addEventListener(event, callback);
      return this;
    },

    /**
     * Remove an event listener to the selected node.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    the event name,
     * @param {Function}  the listener function to remove,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    off: function(event, callback) {
      this[0].removeEventListener(event, callback);
      return this;
    },

    /**
     * Fires the event associated to the selected node.
     *
     * Nota:
     * This is not supported by IE!
     *
     * @method (arg1)
     * @public
     * @param {String}    the event name,
     * @returns {Boolean} returns false if preventDefault was activated otherwise true,
     * @since 0.0.0
     */
    trigger: /* istanbul ignore next */ function(event) {
      // Create event object from event name:
      // (http://2ality.com/2013/06/triggering-events.html)
      var evt;

      if (Event) {
        // Modern Browsers:
        evt = new Event(event);
      } else {
        // Old browsers:
        evt = docu.createEvent('Event');
        evt.initEvent(event, true, true);
      }
      return this[0].dispatchEvent(evt);
    }
  });


  // -- Private functions for animate ------------------------------------------
  /* eslint-disable no-underscore-dangle */

  PicoQ._anim = {

    /**
     * Extracts the optional argument of 'animate'.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {?}         duration, easing or callback,
     * @param {?}         easing or callback,
     * @param {Object}    the function to call at completion,
     * @returns {Object}  returns an object with the properties duration, easing
     *                    and callback,
     * @since 0.0.0
     */
    extractArgs: function(op1, op2, op3) {
      var args
        , duration
        , easing
        , callback
        ;

      // How many optional arguments?
      if (!op1 && !op2 && !op3) {
        args = 0;
      } else if (op1 && !op2 && !op2) {
        args = 1;
      } else if (op1 && op2 && !op3) {
        args = 2;
      } else {
        args = 3;
      }

      switch (args) {
        case 0:
          break;

        case 1:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          } else if (_.isString(op1)) {
            easing = op1;
          } else if (_.isFunction(op1)) {
            callback = op1;
          }
          break;

        case 2:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
            if (_.isString(op2)) {
              easing = op2;
            } else if (_.isFunction(op2)) {
              callback = op2;
            }
          } else if (_.isString(op1)) {
            easing = op1;
            if (_.isFunction(op2)) {
              callback = op2;
            }
          }
          break;

        case 3:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          }
          if (_.isString(op2)) {
            easing = op2;
          }
          if (_.isFunction(op3)) {
            callback = op3;
          }
          break;

        /* istanbul ignore next */
        default:
          break;
      }
      return {
        duration: duration,
        easing: easing,
        callback: callback
      };
    },

    /**
     * Retrieves the CSS property values for the given node.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}    the given node,
     * @param {Object}    the CSS properties to animate,
     * @returns {Object}  returns an object with the properties initial, change, suffix
     *                    per animated property,
     * @since 0.0.0
     */
    getProps: function(el, properties) {
      var keys = Object.keys(properties)
        , props = {}
        , names = []
        , name
        , i
        ;

      // Parse the properties:
      for (i = 0; i < keys.length; i++) {
        // Normalize the name of the property:
        name = _u.normalizeCssPropertyName(keys[i]);
        // Check it is a valid CSS property:
        if (el.style[name]) {
          names.push(name);
          props[name] = {
            initial: parseFloat(el.style[name], 10),
            change: parseFloat(properties[keys[i]]) - parseFloat(el.style[name]),
            suffix: el.style[name].replace(/[0-9.]/g, '')
          };
        }
      }
      props.name = names;
      return props;
    },

    /**
     * Updates dynamically the CSS properties from their initial value to their final.
     *
     * @function (arg1, arg2, arg3, arg4, arg5, arg6)
     * @private
     * @param {Object}    the given node,
     * @param {Object}    the CSS properties to update,
     * @param {Function}  the easing method,
     * @param {Number}    the animation duration,
     * @param {Number}    the animation step,
     * @param {Function}  the function to call at the completion,
     * @returns {}        -,
     * @since 0.0.0
     */
    run: function(el, properties, easing, duration, delay, callback) {
      var props = PicoQ._anim.getProps(el, properties)
        , elem = el
        , lapseOfTime = 0
        , timer
        , i
        ;

      timer = setInterval(function() {
        lapseOfTime += delay;
        if (lapseOfTime > duration) {
          clearInterval(timer);
          if (callback) callback();
        }
        // easing:
        for (i = 0; i < props.name.length; i++) {
          elem.style[props.name[i]] = easing(
            lapseOfTime,
            props[props.name[i]].initial,
            props[props.name[i]].change,
            duration) + props[props.name[i]].suffix;
        }
      }, delay);
    },

    /**
     * The default easing method (if PicoQ.easing.e() aren't provided).
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Number}    the current lapse time,
     * @param {Number}    the initial CSS property value,
     * @param {Number}    the difference between the final and the initial value,
     * @param {Number}    the animation duration,
     * @returns {Number}  returns the value of the CSS property at the current lapse time,
     * @since 0.0.0
     */
    /* eslint-disable no-mixed-operators */
    swing: function(t, b, c, d) {
      return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
    } /* eslint-enable no-mixed-operators */
  };
  /* eslint-enable no-underscore-dangle */


  // -- Public Methods to animate the CSS properties ---------------------------
  PicoQ._.extend(PicoQ.prototype, {
    /**
     * Performs a custom animation of a set of CSS properties.
     *
     * @method (properties [, duration ] [, easing ] [, complete ])
     * @public
     * @param {Object}    An object of CSS properties,
     * @param {Number}    define how long the animation run,
     * @param {Easing}    the easing animation method,
     * @param {Function}  the function to call at completion,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    animate: function(properties, arg2, arg3, arg4) {
      var DTIME = 400
        , FAST  = 200
        , SLOW  = 600
        , INC   = 10
        , el = this[0]
        , delay = INC
        , args
        , duration
        , easing
        , callback
        ;

      // Is the argument properties an object?
      if (!_.isLiteralObject(properties)) {
        return this;
      }

      // Extract the optional arguments:
      args = PicoQ._anim.extractArgs(arg2, arg3, arg4);

      // Set the duration:
      duration = _.isNumber(args.duration)
        ? args.duration
        : (function(arg) {
          if (arg === 'fast') return FAST;
          if (arg === 'slow') return SLOW;
          return DTIME;
        }(args.duration));

      // Set the easing (linear only for the time being):
      easing = (PicoQ._easing && PicoQ._easing[args.easing])
        ? PicoQ._easing[args.easing]
        : PicoQ._anim.swing;

      // Set the callback:
      callback = args.callback ? args.callback : null;

      // Run the animation:
      PicoQ._anim.run(el, properties, easing, duration, delay, callback);

      // Test Mode:
      if (PicoQ.VDOM) {
        this.probe = {
          duration: duration,
          easing: (PicoQ._easing && PicoQ._easing[args.easing]) ? args.easing : 'swing',
          callback: callback
        };
      }

      return this;
    }
  });


  // -- Private Ajax functions -------------------------------------------------
  PicoQ._ajax = {

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
      var defaultSettings = PicoQ._ajax.getDefaultSettings()
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
          if (_.isString(args[0])) {
            url = args[0];
            settings = _.extend(defaultSettings);
          } else if (_.isLiteralObject(args[0])) {
            url = _.isString(args[0].url) ? args[0].url : '';
            settings = _.extend(defaultSettings, args[0]);
          } else {
            url = '';
            settings = _.extend(defaultSettings);
          }
          break;

        case 2:
        default:
          url = _.isString(args[0]) ? args[0] : '';
          settings = _.isLiteralObject(args[1])
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
      var settings = { url: null, data: null, success: null, dataType: null }
        ;

      switch (args.length) {

        case 0:
          break;

        // fn(url) or fn([settings])
        case 1:
          if (_.isString(args[0])) {
            settings.url = args[0];
            break;
          }
          if (_.isLiteralObject(args[0])) {
            settings = args[0];
          }
          break;

        // fn(url, data) or fn(url, success) or fn(url, dataType)
        case 2:
          if (!_.isString(args[0])) {
            break;
          }
          settings.url = args[0];

          if (_.isLiteralObject(args[1])) {
            settings.data = args[1];
            break;
          }
          if (_.isFunction(args[1])) {
            settings.success = args[1];
            break;
          }
          if (_.isString(args[1])) {
            settings.dataType = args[1];
          }
          break;

        // fn(url [, data ] [, success / dataType ]) or fn(url, success, dataType)
        case 3:
          if (!_.isString(args[0])) {
            break;
          }
          settings.url = args[0];

          if (_.isLiteralObject(args[1])) {
            settings.data = args[1];
            if (_.isFunction(args[2])) {
              settings.success = args[2];
              break;
            }
            if (_.isString(args[2])) {
              settings.dataType = args[2];
            }
            break;
          }

          if (_.isFunction(args[1])) {
            settings.success = args[1];
          }
          if (_.isString(args[2])) {
            settings.dataType = args[2];
          }
          break;

        // fn(url, data, success, dataType)
        case 4:
        default:
          if (!_.isString(args[0])) {
            break;
          }
          settings.url = args[0];
          if (_.isLiteralObject(args[1])) {
            settings.data = args[1];
          }
          if (_.isFunction(args[2])) {
            settings.success = args[2];
          }
          if (_.isString(args[3])) {
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

      if (!_.isLiteralObject(params)) {
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
            if (_.isFunction(fn) && (cname === 'done' || cname === 'always' || cname === 'success')) {
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
          throw new Error('PicoQ._ajax.fire: this case must never happen!');
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
  PicoQ.ajax = function() {
    var _a             = PicoQ._ajax
      , o              = _a.getArguments(arguments)
      , XMLHttpRequest = PicoQ.VDOM ? PicoQ.VDOM.window.XMLHttpRequest : window.XMLHttpRequest
      , xhr            = new XMLHttpRequest()
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
    var settings = PicoQ._ajax.getSettings(arguments)
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
    var settings = PicoQ._ajax.getSettings(arguments)
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
    var settings = PicoQ._ajax.getSettings(arguments)
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
        , settings = PicoQ._ajax.getSettings(arguments)
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
          if (_.isFunction(cb)) {
            cb();
          }
        });
      return this;
    }
  });

// Current version of the library.
  PicoQ.VERSION = '{{lib:version}}';

  // Returns the library name:
  return PicoQ;
}));
