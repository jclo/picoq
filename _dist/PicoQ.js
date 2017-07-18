/**
 * PicoQ v0.0.0
 *
 * A tiny Javascript library to interact with the DOM
 * Copyright (c) 2017 Jclo <jclo@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 */
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"], one-var: 0, no-param-reassign: 0 */
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
     * Extends PicoQ prototype with the given object.
     *
     * Nota: mutates PicoQ
     *
     * @function (arg1)
     * @private
     * @param {Object}    the methods to add to PicoQ.prototype,
     * @returns {}        -,
     * @since 0.0.0
     */
    extend: function(obj) {
      var keys = Object.keys(obj)
        , i
        ;

      for (i = 0; i < keys.length; i++) {
        PicoQ.prototype[keys[i]] = obj[keys[i]];
      }
    },

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
      var arr = typeof name === 'string' ? name.split('-') : []
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

  // Assign PicoQ._ to _:
  _ = PicoQ._;


  // -- Public Methods to insert/remove nodes to/from the DOM ------------------
  PicoQ._.extend({
    /**
     * Gets/Sets the HTML contents of the element,
     *
     * @method (arg1)
     * @public
     * @param {String}    the html contents to add,
     * @returns {Object}  returns this or the HTML contents,
     * @since 0.0.0
     */
    html: function(htmlstring) {
      if (htmlstring) {
        this[0].innerHTML = htmlstring;
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
    append: function(htmlstring) {
      this[0].insertAdjacentHTML('beforeend', htmlstring);
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
  PicoQ._.extend({
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
      var attr = _.normalizeCssPropertyName(styleAttr);

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
  PicoQ._.extend({
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
  PicoQ._.extend({

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
  PicoQ._.extend({

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
          if (typeof op1 === 'number' || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          } else if (typeof op1 === 'string') {
            easing = op1;
          } else if (Object.prototype.toString.call(op1) === '[object Function]') {
            callback = op1;
          }
          break;

        case 2:
          if (typeof op1 === 'number' || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
            if (typeof op2 === 'string') {
              easing = op2;
            } else if (Object.prototype.toString.call(op2) === '[object Function]') {
              callback = op2;
            }
          } else if (typeof op1 === 'string') {
            easing = op1;
            if (Object.prototype.toString.call(op2) === '[object Function]') {
              callback = op2;
            }
          }
          break;

        case 3:
          if (typeof op1 === 'number' || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          }
          if (typeof op2 === 'string') {
            easing = op2;
          }
          if (Object.prototype.toString.call(op3) === '[object Function]') {
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
        name = _.normalizeCssPropertyName(keys[i]);
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
    * @returns {Number}   the value of the CSS property at the current lapse time,
     * @since 0.0.0
     */
    /* eslint-disable no-mixed-operators */
    swing: function(t, b, c, d) {
      return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
    }
    /* eslint-enable no-mixed-operators */
  };
  /* eslint-enable no-underscore-dangle */


  // -- Public Methods to animate the CSS properties -------------------------------
  PicoQ._.extend({
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
      if (Object.prototype.toString.call(properties) !== '[object Object]') {
        return this;
      }

      // Extract the optional arguments:
      args = PicoQ._anim.extractArgs(arg2, arg3, arg4);

      // Set the duration:
      duration = typeof args.duration === 'number'
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

// Current version of the library.
  PicoQ.VERSION = '0.0.0';

  // Returns the library name:
  return PicoQ;
}));
