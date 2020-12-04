/** **************************************************************************
 *
 * A ...
 *
 * xxx.js is just a literal object that contains a set of functions.
 * It can't be instantiated.
 *
 * Private Functions:
 *  . _getString                  returns a string,
 *  . _getArray                   returns an array,
 *
 *
 * Public Static Methods:
 *  . getString                   returns a string,
 *  . getArray                    returns an array,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* global PIQ, PicoQ, extend */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // START OF IIFE


  // -- Module Path
  const Root = PIQ.Anim.Public;


  // -- Local Modules


  // -- Local Constants


  // -- Local Variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Defines a few utilities to test the variable types.
   */
  const _ = {
    isString(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    },

    isNumber(obj) {
      return Object.prototype.toString.call(obj) === '[object Number]';
    },

    isFunction(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    },

    isLiteralObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    },
  };

  /**
   * Defines the default easing method.
   *
   * @function (arg1, arg2, arg3, arg4)
   * @private
   * @param {Number}        the current lapse time,
   * @param {Number}        the initial CSS property value,
   * @param {Number}        the difference between the final and the initial value,
   * @param {Number}        the animation duration,
   * @returns {Number}      returns the value of the CSS property at the current
   * @since 0.0.0           lapse time,
   */
  /* eslint-disable no-mixed-operators */
  function _swing(t, b, c, d) {
    return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
  } /* eslint-enable no-mixed-operators */

  /**
   * Extracts the optional arguments of 'animate'.
   *
   * @function (arg1, arg2, arg3)
   * @private
   * @param {?}             duration, easing or callback,
   * @param {?}             easing or callback,
   * @param {Object}        the function to call at completion,
   * @returns {Object}      returns an object with the properties duration,
   *                        easing, and callback,
   * @since 0.0.0
   */
  function _extractArgs(...args) {
    const op1 = args[0]
        , op2 = args[1]
        , op3 = args[2]
        ;

    let nargs
      , duration
      , easing
      , callback
      ;

    // How many optional arguments?
    if (!op1 && !op2 && !op3) {
      nargs = 0;
    } else if (op1 && !op2 && !op2) {
      nargs = 1;
    } else if (op1 && op2 && !op3) {
      nargs = 2;
    } else {
      nargs = 3;
    }

    switch (nargs) {
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

      default:
        break;
    }

    return {
      duration,
      easing,
      callback,
    };
  }

  /**
   * Normalizes the CSS properties.
   * (replace '-' between composite name by camelcase style).
   * Ex: font-size -> fontSize
   *
   * @function (arg1)
   * @private
   * @param {String}        the CSS property name,
   * @returns {String}      the normalized CSS property name,
   * @since 0.0.0
   */
  function _normalizeCssPropertyName(name) {
    const arr = _.isString(name) ? name.split('-') : []
        ;

    // Convert name with '-' (ex.: 'font-size' to 'fontSize'):
    let normalized = '';
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        normalized += arr[i];
      } else {
        normalized += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
    }
    return normalized;
  }

  /**
   * Retrieves the CSS property values for the given node.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the given node,
   * @param {Object}        the CSS properties to animate,
   * @returns {Object}      returns an object with the properties initial,
   * @since 0.0.0           change, suffix, per animated property,
   */
  function _getProps(el, properties) {
    const keys  = Object.keys(properties)
        , style = window.getComputedStyle(el)
        , props = {}
        , names = []
        ;

    let name
      , cssValue
      , cssParent
      , suffix
      ;

    // Parse the properties:
    for (let i = 0; i < keys.length; i++) {
      // Normalize the name of the property:
      name = _normalizeCssPropertyName(keys[i]);
      // Check it is a valid CSS property:
      cssValue = style.getPropertyValue(name);
      if (cssValue) {
        names.push(name);
        cssValue = parseFloat(cssValue, 10);
        suffix = properties[keys[i]].replace(/[0-9.]/g, '');
        // Absolute or relative?
        if (suffix === '%') {
          // Relative, convert pixel value returned by 'getComputedStyle' in %:
          cssParent = parseFloat(
            window.getComputedStyle(el.parentNode).getPropertyValue(name),
          );
          cssValue = (cssValue / cssParent) * 100;
        }
        props[name] = {
          initial: cssValue,
          change: parseFloat(properties[keys[i]]) - cssValue,
          suffix,
        };
      }
    }
    props.name = names;
    return props;
  }

  /**
   * Updates dynamically the CSS properties from their initial value to their final.
   *
   * @function (arg1, arg2, arg3, arg4, arg5, arg6)
   * @private
   * @param {Object}        the given node,
   * @param {Object}        the CSS properties to update,
   * @param {Function}      the easing method,
   * @param {Number}        the animation duration,
   * @param {Number}        the animation step,
   * @param {Function}      the function to call at the completion,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _run(el, properties, easing, duration, delay, callback) {
    const props = _getProps(el, properties)
        , elem = el
        ;

    let lapseOfTime = 0
      , value
      ;

    const timer = setInterval(() => {
      // easing:
      for (let i = 0; i < props.name.length; i++) {
        value = easing(
          lapseOfTime,
          props[props.name[i]].initial,
          props[props.name[i]].change,
          duration,
        );
        elem.style[props.name[i]] = value + props[props.name[i]].suffix;
      }
      lapseOfTime += delay;
      if (lapseOfTime > duration) {
        clearInterval(timer);
        if (callback) callback();
      }
    }, delay);
  }


  // -- Public Static Methods ------------------------------------------------

  extend(Root, {

    /**
     * Performs a custom animation on a set of CSS properties.
     *
     * @method (properties [, duration ] [, easing ] [, complete ])
     * @public
     * @param {Object}      An object of CSS properties,
     * @param {Number}      define how long the animation run,
     * @param {Easing}      the easing animation method,
     * @param {Function}    the function to call at completion,
     * @returns {Object}    return this,
     * @since 0.0.0
     */
    animate(node, properties, ...args) {
      const DTIME = 400
          , FAST  = 200
          , SLOW  = 600
          , INC   = 10
          , delay = INC
          ;


      // Is the argument properties an object?
      if (!_.isLiteralObject(properties)) {
        return this;
      }

      // Extract the optional arguments:
      const argu = _extractArgs(...args);

      // Set the duration:
      const duration = _.isNumber(argu.duration) && argu.duration > 0
        ? argu.duration
        : (function(arg) {
          if (arg === 'fast') return FAST;
          if (arg === 'slow') return SLOW;
          return DTIME;
        }(argu.duration));

      // Set the easing (swing only for the time being):
      const easing = (window.Easing && window.Easing[argu.easing])
        ? window.Easing[argu.easing]
        : _swing;

      // Set the callback:
      const callback = argu.callback ? argu.callback : null;

      // Run the animation:
      _run(node[0], properties, easing, duration, delay, callback);

      // Test Mode:
      if (PicoQ.VDOM) {
        node.probe = {
          duration,
          easing: (window.Easing && window.Easing[args.easing]) ? args.easing : 'swing',
          callback,
        };
      }

      return this;
    },
  });


  // END OF IIFE
}());
/* eslint-enable no-underscore-dangle */
