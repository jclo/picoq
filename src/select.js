
  // -- Public Methods to select nodes -----------------------------------------
  PicoQ._.extend(PicoQ.prototype, {
    /**
     * Select a child element.
     *
     * @method (arg1)
     * @public
     * @param {String}    the selector,
     * @returns {Object}  returns this,
     * @since 0.0.7
     */
    select: /* istanbul ignore next */ function(selector) {
      var child;

      if (_.isString(selector)) {
        child = this[0].querySelector(selector);
        if (child) {
          this[0] = child;
        }
      }
      return this;
    },

    /**
     * Returns to the parent element.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Object}  returns this,
     * @since 0.0.7
     */
    parent: /* istanbul ignore next */ function() {
      if (this.root) {
        // As a root parent is defined, we stop at it.
        if (this[0] !== this.root) {
          this[0] = this[0].parentNode;
        }
      } else {
        this[0] = this[0].parentNode;
      }
      return this;
    },

    /**
     * Returns to the root parent if defined.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Object}  returns this,
     * @since 0.0.7
     */
    firstParent: /* istanbul ignore next */ function() {
      if (this.root) {
        this[0] = this.root;
      }
      return this;
    }
  });
