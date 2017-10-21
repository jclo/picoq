
  // -- Public Methods to manage the css properties --------------------------------
  PicoQ._.extend(PicoQ.prototype, {
    /**
     * Gets/Sets the style attribute of the element,
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    the style attribute,
     * @param {String}    the style attribute value,
     * @returns {String}  returns the style attribute value or this,
     * @since 0.0.0
     */
    css: function(styleAttr, value) {
      var attr = Pic.u.normalizeCssPropertyName(styleAttr);

      if (!value) {
        // Get attribute:
        return this[0].style[attr];
      }

      // Set attribute:
      this[0].style[attr] = value;
      return this;
    }
  });
