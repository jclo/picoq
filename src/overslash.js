
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
