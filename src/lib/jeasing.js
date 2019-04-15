/*! ****************************************************************************
 * JEasing v0.0.2
 *
 * A simple library that implements Robert Penner's easing equations.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2019 jclo <jclo@mobilabs.fr> (http://www.mobilabs.fr/).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 *
 * EASING EQUATIONS
 * Open source under the BSD License.
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * ************************************************************************** */
// Based on UMDLib template v0.8.4
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
/* eslint-disable one-var, semi-style */
(function(root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(root);
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable-next-line no-param-reassign */
    if (root.JEasing === null) root.JEasing = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.JEasing = factory(root);
  }
}(PIQ, function(root) {
  var JEasing
    , previousJEasing
    ;

  /** **************************************************************************
   *
   * Defines easing functions.
   *
   * core.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   * Public Functions:
   *   . linear
   *   . swing
   *   . easeInSine
   *   . easeOutSine
   *   . easeInOutSine
   *   . easeInQuad
   *   . easeOutQuad
   *   . easeInOutQuad
   *   . easeInCubic
   *   . easeOutCubic
   *   . easeInOutCubic
   *   . easeInQuart
   *   . easeOutQuart
   *   . easeInOutQuart
   *   . easeInQuint
   *   . easeOutQuint
   *   . easeInOutQuint
   *   . easeInExpo
   *   . easeOutExpo
   *   . easeInOutExpo
   *   . easeInCirc
   *   . easeOutCirc
   *   . easeInOutCirc
   *   . easeInBack
   *   . easeOutBack
   *   . easeInOutBack
   *   . easeInElastic
   *   . easeOutElastic
   *   . easeInOutElastic
   *   . easeInBounce
   *   . easeOutBounce
   *   . easeInOutBounce
   *
   *
   * @namespace    JEasing
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */

  /* eslint-disable no-param-reassign, no-cond-assign, no-plusplus, no-else-return,
    max-len, no-return-assign */
  /* istanbul ignore next */
  JEasing = {
    linear: function(t, b, c, d) {
      return c * t / d + b;
    },

    swing: function(t, b, c, d) {
      return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
    },

    easeInSine: function(t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },

    easeOutSine: function(t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },

    easeInOutSine: function(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },

    easeInQuad: function(t, b, c, d) {
      return c * (t /= d) * t + b;
    },

    easeOutQuad: function(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },

    easeInOutQuad: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },

    easeInCubic: function(t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },

    easeOutCubic: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },

    easeInOutCubic: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    },

    easeInQuart: function(t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },

    easeOutQuart: function(t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },

    easeInOutQuart: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },

    easeInQuint: function(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },

    easeOutQuint: function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },

    easeInOutQuint: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },

    easeInExpo: function(t, b, c, d) {
      return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },

    easeOutExpo: function(t, b, c, d) {
      return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },

    easeInOutExpo: function(t, b, c, d) {
      if (t === 0) return b;
      if (t === d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },

    easeInCirc: function(t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },

    easeOutCirc: function(t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },

    easeInOutCirc: function(t, b, c, d) {
      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },

    easeInBack: function(t, b, c, d, s) {
      if (s === undefined) { s = 1.70158; }
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },

    easeOutBack: function(t, b, c, d, s) {
      if (s === undefined) { s = 1.70158; }
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },

    easeInOutBack: function(t, b, c, d, s) {
      if (s === undefined) { s = 1.70158; }
      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
      return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },

    easeInElastic: function(t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t === 0) return b;
      if ((t /= d) === 1) return b + c;
      if (!p) { p = d * 0.3; }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },

    easeOutElastic: function(t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t === 0) return b;
      if ((t /= d) === 1) return b + c;
      if (!p) { p = d * 0.3; }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },

    easeInOutElastic: function(t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t === 0) return b;
      if ((t /= d / 2) === 2) return b + c;
      if (!p) { p = d * (0.3 * 1.5); }
      if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
      } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
      if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      }
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    },

    easeInBounce: function(t, b, c, d) {
      return c - this.easeOutBounce(d - t, 0, c, d) + b;
    },

    easeOutBounce: function(t, b, c, d) {
      if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
      } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
      } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
      } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
      }
    },

    easeInOutBounce: function(t, b, c, d) {
      if (t < d / 2) {
        return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
      }
      return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
  };
  /* eslint-enable no-param-reassign, no-cond-assign, no-plusplus, no-else-return,
    max-len, no-return-assign */

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousJEasing = root.JEasing;

  // Runs JEasing in noConflict mode, returning the JEasing variable to its
  // previous owner. Returns a reference to this JEasing object.
  /* istanbul ignore next */
  JEasing.noConflict = function() {
    /* eslint-disable-next-line no-param-reassign */
    root.JEasing = previousJEasing;
    return this;
  };

  // Current version of the library:
  JEasing.VERSION = '0.0.2';
  /* - */


  // Returns the library name:
  return JEasing;
}));
/* eslint-enable one-var, semi-style */
