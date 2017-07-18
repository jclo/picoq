
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
