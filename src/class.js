
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
