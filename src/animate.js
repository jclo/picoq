// -- Private functions for animate ------------------------------------------
/* eslint-disable strict, no-underscore-dangle */
Pic.anim = {

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
        if (Object.prototype.toString.call(op1) === '[object Number]' || op1 === 'fast' || op1 === 'slow') {
          duration = op1;
        } else if (Object.prototype.toString.call(op1) === '[object String]') {
          easing = op1;
        } /* istanbul ignore next */ else if (Object.prototype.toString.call(op1) === '[object Function]') {
          callback = op1;
        }
        break;

      case 2:
        if (Object.prototype.toString.call(op1) === '[object Number]' || op1 === 'fast' || op1 === 'slow') {
          duration = op1;
          if (Object.prototype.toString.call(op2) === '[object String]') {
            easing = op2;
          } /* istanbul ignore next */ else if (Object.prototype.toString.call(op2) === '[object Function]') {
            callback = op2;
          }
        } /* istanbul ignore next */ else if (Object.prototype.toString.call(op1) === '[object String]') {
          easing = op1;
          if (Object.prototype.toString.call(op2) === '[object Function]') {
            callback = op2;
          }
        }
        break;

      /* istanbul ignore next */
      case 3:
        if (Object.prototype.toString.call(op1) === '[object Number]' || op1 === 'fast' || op1 === 'slow') {
          duration = op1;
        }
        if (Object.prototype.toString.call(op2) === '[object String]') {
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
  getProps: /* istanbul ignore next */ function(el, properties) {
    var keys  = Object.keys(properties)
      , style = window.getComputedStyle(el)
      , props = {}
      , names = []
      , name
      , cssValue
      , cssParent
      , suffix
      , i
      ;

    // Parse the properties:
    for (i = 0; i < keys.length; i++) {
      // Normalize the name of the property:
      name = Pic.u.normalizeCssPropertyName(keys[i]);
      // Check it is a valid CSS property:
      cssValue = style.getPropertyValue(name);
      if (cssValue) {
        names.push(name);
        cssValue = parseFloat(cssValue, 10);
        suffix = properties[keys[i]].replace(/[0-9.]/g, '');
        // Absolute or relative?
        if (suffix === '%') {
          // Relative, convert pixel value returned by 'getComputedStyle' in %:
          cssParent = parseFloat(window.getComputedStyle(el.parentNode).getPropertyValue(name));
          cssValue = (cssValue / cssParent) * 100;
        }
        props[name] = {
          initial: cssValue,
          change: parseFloat(properties[keys[i]]) - cssValue,
          suffix: suffix
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
    var props = Pic.anim.getProps(el, properties)
      , elem = el
      , lapseOfTime = 0
      , timer
      , value
      , i
      ;

    timer = setInterval(function() {
      // easing:
      for (i = 0; i < props.name.length; i++) {
        value = easing(
          lapseOfTime,
          props[props.name[i]].initial,
          props[props.name[i]].change,
          duration
        );

        elem.style[props.name[i]] = value + props[props.name[i]].suffix;
      }
      lapseOfTime += delay;
      if (lapseOfTime > duration) {
        clearInterval(timer);
        if (callback) callback();
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
  /* eslint-disable no-underscore-dangle */
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
    args = Pic.anim.extractArgs(arg2, arg3, arg4);

    // Set the duration:
    duration = Object.prototype.toString.call(args.duration) === '[object Number]'
      ? args.duration
      : (function(arg) {
        if (arg === 'fast') return FAST;
        if (arg === 'slow') return SLOW;
        return DTIME;
      }(args.duration));

    // Set the easing (swing only for the time being):
    easing = (PicoQ._easing && PicoQ._easing[args.easing])
      ? PicoQ._easing[args.easing]
      : Pic.anim.swing;

    // Set the callback:
    callback = args.callback ? args.callback : null;

    // Run the animation:
    Pic.anim.run(el, properties, easing, duration, delay, callback);

    // Test Mode:
    /* istanbul ignore next */
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
/* eslint-enable strict, no-underscore-dangle */
