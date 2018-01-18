
  // -- Private functions ------------------------------------------------------

  PicoQ._ = {

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
     * @since 0.0.8
     */
    /* eslint-disable no-param-reassign */
    extend: function(obj) {
      var source
        , props
        , i
        , j
        ;

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];
        props = Object.keys(source);
        for (j = 0; j < props.length; j++) {
          if (Object.prototype.hasOwnProperty.call(source, props[j])) {
            obj[props[j]] = source[props[j]];
          }
        }
      }
      return obj;
    }
    /* eslint-enable no-restricted-syntax, no-param-reassign */
  };

  // Assign PicoQ._ to _:
  _ = PicoQ._;
