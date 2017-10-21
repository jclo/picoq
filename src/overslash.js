
  // -- Private functions ------------------------------------------------------
  /* eslint-disable no-underscore-dangle */

  // This library of functions is attached to PicoQ because we want to be able
  // to reuse them outside the scope of this module in some circonstances (for
  // example when PicoQ is embedded inside another library).
  PicoQ._ = {

    // -- Core -----------------------------------------------------------------
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


    // -- Object ---------------------------------------------------------------
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
     * Is a given value a Math object?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.7
     */
    isMath: /* istanbul ignore next */ function(obj) {
      return Object.prototype.toString.call(obj) === '[object Math]';
    },

    /**
     * Is a given value a Date?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.7
     */
    isDate: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Date]';
    },

    /**
     * Is a given array, string or object empty?
     *
     * @function (arg1)
     * @public
     * @param {Object}      the object to test,
     * @returns {Boolean}   returns true or false,
     * @since 0.0.7
     */
    /* eslint-disable no-restricted-syntax, no-prototype-builtins */
    isEmpty: function(obj) {
      var key;
      if (obj === null) return true;
      if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
      // Check that the object has no enumerable own-properties.
      // If ECMAScript 5 support only: 'return Object.keys(obj).length === 0;'
      // Otherwise, parse all properties.
      for (key in obj) if (obj.hasOwnProperty(key)) return false;
      return true;
    },
    /* eslint-enable no-restricted-syntax, no-prototype-builtins */


    // --- Operations on Objects -----------------------------------------------
    /**
     * Clones a literal object or an array.
     *
     * @function(arg1)
     * @public
     * @param {Object}    the object to clone,
     * @returns {Object}  returns the cloned object,
     * @since 0.0.7
     */
    /* eslint-disable no-void, no-restricted-syntax */
    clone: /* istanbul ignore next */ function(obj) {
      var clone = this.isArray(obj) ? [] : {}
        , prop
        ;

      if (!this.isObject(obj)) return void 0;

      for (prop in obj) {
        if (this.isArray(obj[prop])) {
          clone[prop] = this.clone(obj[prop]);
        } else if (this.isObject(obj[prop])) {
          clone[prop] = this.extend(obj[prop]);
        } else {
          clone[prop] = obj[prop];
        }
      }
      return clone;
    },
    /* eslint-enable no-void, no-restricted-syntax */

    /**
     * Extends a given object with all the properties in passed-in object(s).
     * (copied from: http://underscorejs.org and added recursivity)
     *
     * @function (arg1)
     * @public
     * @param {Object}      the objects to merge,
     * @returns {Object}    the resulting object,
     * @since 0.0.7
     */
    /* eslint-disable no-restricted-syntax, no-param-reassign */
    extend: function(obj) {
      var source
        , prop
        , i
        ;

      if (!this.isObject(obj)) return obj;

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (prop in source) {
          // if (!this.isArray(arguments[i][prop]) && this.isObject(arguments[i][prop])) {
          if (this.isLiteralObject(arguments[i][prop])) {
            obj[prop] = obj[prop] !== undefined ? obj[prop] : {};
            this.extend(obj[prop], arguments[i][prop]);
          } else if (hasOwnProperty.call(source, prop)) {
            obj[prop] = this.isArray(source[prop])
              ? this.clone(source[prop])
              : source[prop];
          }
        }
      }
      return obj;
    },
    /* eslint-enable no-restricted-syntax, no-param-reassign */

    /**
     * Retrieves all the names of the object's own enumerable properties.
     * (ECMAScript 5 only).
     *
     * @function (arg1)
     * @public
     * @param {Object}      the input object,
     * @returns {Array}     returns the names of the keys,
     * @since 0.0.7
     */
    keys: function(obj) {
      return Object.keys(obj);
    },

    /**
     * Parses all the names of the object's own enumerable properties
     * (replace for...in statement).
     * (ECMAScript 5 only).
     *
     * @function (arg1 arg2)
     * @public
     * @param {Object}      the input object,
     * @returns {Array}     returns the names of the keys,
     * @since 0.0.7
     */
    forPropIn: /* istanbul ignore next */ function(obj, callback) {
      // var keys = overslash.keys(obj);
      this.keys(obj).forEach(function(key) {
        if ({}.hasOwnProperty.call(obj, key)) {
          callback(key);
        }
      });
    },

    /**
     * Extends source with target(s) while preserving the assessors.
     *
     * Nota:
     * Clones a literal object at the first level while preserving the
     * assessors (get and set). This should be the prefered method to Clones
     * a literal object or a prototype that includes get and set assessors.
     *
     * Example:
     * To clone a function prototype:
     * var a = _.assign({}, fn.prototype);  // clone the original prototype,
     * _.assign(fn2.prototype, a);          // assign it to fn2.prototype,
     *
     * @function (...arg1)
     * @public
     * @param {Object}      the objects to 'fusion',
     * @returns {Object}    returns the reassigned object,
     * @since 0.0.0
     */
    /* eslint-disable no-param-reassign, no-loop-func */
    assign: function() {
      var target = arguments[0]
        , source
        , descriptors
        , i
        ;

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];
        descriptors = Object.keys(source).reduce(function(props, key) {
          props[key] = Object.getOwnPropertyDescriptor(source, key);
          return props;
        }, {});
      }
      Object.defineProperties(target, descriptors);
      return target;
    }
    /* eslint-enable no-param-reassign, no-loop-func */
  };

  // Assign PicoQ.overslash to _:
  _ = PicoQ._;

  /* eslint-enable no-underscore-dangle */
