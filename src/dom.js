
  // -- Public Methods to insert/remove nodes to/from the DOM ------------------
  PicoQ._.extend(PicoQ.prototype, {
    /**
     * Gets/Sets the HTML contents of the element.
     *
     * @method (arg1)
     * @public
     * @param {String}    the html contents to add,
     * @returns {Object}  returns this or the HTML contents,
     * @since 0.0.0
     */
    html: function(xmlString) {
      if (xmlString) {
        this[0].innerHTML = xmlString;
        return this;
      }
      if (this[0]) {
        return this[0].innerHTML;
      }
      return undefined;
    },

    /**
     * Removes all the childs of the current node.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    empty: function() {
      var node = this[0];
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
      return this;
    },

    /**
     * Appends an HTML string after the last child of the current node.
     *
     * @method (arg1)
     * @public
     * @param {String}    an HTML string,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    append: function(xmlString) {
      this[0].insertAdjacentHTML('beforeend', xmlString);
      return this;
    },

    /**
     * Appends an HTML string before the first child of the current node.
     *
     * @method (arg1)
     * @public
     * @param {String}    an HTML string,
     * @returns {Object}  returns this,
     * @since 0.0.1
     */
    prepend: function(xmlString) {
      this[0].insertAdjacentHTML('afterbegin', xmlString);
      return this;
    },

    /**
     * Appends an HTML string after the current node.
     *
     * @method (arg1)
     * @public
     * @param {String}    an HTML string,
     * @returns {Object}  returns this,
     * @since 0.0.1
     */
    after: function(xmlString) {
      this[0].insertAdjacentHTML('afterend', xmlString);
      return this;
    },

    /**
     * Appends an HTML string before the current node.
     *
     * @method (arg1)
     * @public
     * @param {String}    an HTML string,
     * @returns {Object}  returns this,
     * @since 0.0.1
     */
    before: function(xmlString) {
      this[0].insertAdjacentHTML('beforebegin', xmlString);
      return this;
    },

    /**
     * Replaces the current node with the given DOMString.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    an HTML string
     * @returns {Object}  returns this,
     * @since 0.0.2
     */
    replaceWith: function(xmlString) {
      var oldChild = this[0]
        , parent = this[0].parentNode
        , index =  Array.prototype.indexOf.call(parent.children, oldChild)
        // , parser = new DOMParser()
        // , newchild = parser.parseFromString(xmlString, 'text/xml').firstChild
        , wrapper = document.createElement('div')
        , newChild
        ;

      // Replace the old child by new one:
      wrapper.innerHTML = xmlString;
      newChild = wrapper.firstChild;
      parent.replaceChild(newChild, oldChild);
      this[0] = parent.children[index];

      return this;
    },

    /**
     * Gets/Sets the text contents of the element.
     *
     * @method (arg1)
     * @public
     * @param {String}    the text contents to add,
     * @returns {Object}  returns this or the text content,
     * @since 0.0.0
     */
    text: function(text) {
      if (text) {
        this[0].textContent = text;
        return this;
      }
      return this[0].textContent;
    },

    /**
     * Clones the selected element.
     *
     * @method (arg1)
     * @public
     * @param {Boolean}   true clone with children, false without,
     * @returns {Object}  returns the cloned element,
     * @since 0.0.0
     */
    clone: function(deep) {
      if (deep === true || deep === false) {
        return this[0].cloneNode(deep);
      }
      return this[0].cloneNode(true);
    },

    /**
     * Inserts a child element before another child element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}    the new node element,
     * @param {Object}    the target node element,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    insertChildBefore: function(newChild, child) {
      if (newChild) {
        this[0].insertBefore(newChild, child);
      }
      return this;
    },

    /**
     * Removed the passed-in child element.
     *
     * @method (arg1)
     * @public
     * @param {Object}    the child element to remove,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    removeChild: function(child) {
      if (child) {
        this[0].removeChild(child);
      }
      return this;
    },

    /**
     * Replaces a child by another.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}    the new node element,
     * @param {Object}    the node element to replace,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    replaceChild: function(newChild, child) {
      if (newChild) {
        this[0].replaceChild(newChild, child);
      }
      return this;
    },

    /**
     * Returns the children.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Object}  returns the children HTMLCollection,
     * @since 0.0.8
     */
    children: function() {
      return this[0].children;
    },

    /**
     * Returns the children position in the parent tree.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Object}  returns the children position,
     * @since 0.0.8
     */
    childIndex: function() {
      var child = this[0]
        , index = 0
        ;
      while (child !== null) {
        child = child.previousElementSibling;
        index += 1;
      }
      return index - 1;
    },

    /**
     * Returns the DOMRect object that bounds the contents of the range.
     *
     * @method ()
     * @public
     * @param {}          -,
     * @returns {Object}  returns the DOMRect object,
     * @since 0.0.8
     */
    getRect: function() {
      return this[0] ? this[0].getBoundingClientRect() : null;
    }
  });
