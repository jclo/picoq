// -- Public Methods to manage the node attributes ---------------------------
/* eslint-disable strict */
PicoQ._.extend(PicoQ.prototype, {

  /**
   * Sets or Gets the specified attribute.
   *
   * @method (arg1, arg2)
   * @public
   * @param {String}    the attribute name,
   * @param {String}    the attribute value,
   * @returns {Object}  returns this or the attribute value,
   * @since 0.0.0
   */
  attr: function(attr, value) {
    if (value) {
      this[0].setAttribute(attr, value);
      return this;
    }
    return this[0].getAttribute(attr);
  },

  /**
   * Removes the specified attribute.
   *
   * @method (arg1)
   * @public
   * @param {String}    the attribute name,
   * @returns {Object}  returns this,
   * @since 0.0.0
   */
  removeAttr: function(attr) {
    this[0].removeAttribute(attr);
    return this;
  }
});
/* eslint-disable strict */
