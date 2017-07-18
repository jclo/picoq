
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
