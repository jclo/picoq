/*! ****************************************************************************
 * PicoQ v0.1.1alpha4
 *
 * A tiny Javascript library to interact with the DOM.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2019 jclo <jclo@mobilabs.fr> (http://www.mobilabs.fr/).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 *
 * PicoQ-easing includes portions of code for easing equations.
 * Open source under the BSD License.
 * Copyright (c) 2001 Robert Penner
 * ************************************************************************** */
// Based on UMD Lib template v0.8.1
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
/* eslint-disable one-var, semi-style */
(function(root, factory) {
  'use strict';

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
    if (root.PicoQ === null) root.PicoQ = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.PicoQ = factory(root);
  }
}(this, function(root) {
  'use strict';

  // Defines the global variables in the scope of this module (only PicoQ is
  // attached to the root object):
  var PicoQ
    , previousPicoQ
    , Pic
    , _
    ;

  // -- PicoQ Public -----------------------------------------------------------
  /* */

  /**
   * PicoQ constructor.
   *
   * @constructor (arg1)
   * @public
   * @param {String}    CSS selector,
   * @returns {Object}  returns PicoQ object,
   * @since 0.0.0
   */
  /* eslint-disable no-param-reassign */
  PicoQ = function(selector) {
    if (this instanceof PicoQ) {
      if (selector) {
        this[0] = document.querySelector(selector);
        return this;
      }
      return null;
    }

    // PicoQ instantiate itself. So, there is no need of using new:
    return new PicoQ(selector);
  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousPicoQ = root.PicoQ;

  // Runs PicoQ in noConflict mode, returning the PicoQ variable to its
  // previous owner. Returns a reference to this PicoQ object.
  /* istanbul ignore next */
  PicoQ.noConflict = function() {
    root.PicoQ = previousPicoQ;
    return this;
  };

  // Attaches a release number to the library:
  PicoQ.VERSION = '0.1.1alpha4';

  // Attaches all the private methods to this private Pix object:
  Pic = {
    /* eslint-disable no-multi-spaces */
    u: null,                 // miscellaneous functions,
    anim: null,              // private functions for animate method,
    ajax: null               // private ajax functions,
    /* eslint-enable no-multi-spaces */
  };

  // Gives an access to the private methods for testing purpose:
  PicoQ.setTestMode = function() {
    PicoQ.Pic = Pic;
  };

  /* eslint-disable no-param-reassign */


  // -- PicoQ Public Methods ---------------------------------------------------
  // Prototype functions are attached to PicoQ.prototype by the function
  // PicoQ._extend()
  PicoQ.prototype = {
    //
  };
  /* */


  // -- Private functions ------------------------------------------------------
  /* eslint-disable one-var,semi-style */

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
          /* istanbul ignore next */
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
  /* eslint-enable one-var,semi-style */


  // -- Private functions ------------------------------------------------------
  /* eslint-disable one-var, semi-style */

  Pic.u = {

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
      var arr = Object.prototype.toString.call(name) === '[object String]' ? name.split('-') : []
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
  /* eslint-enable one-var, semi-style */


  // -- Public Methods to select nodes -----------------------------------------
  /* */

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
    select: function(selector) {
      var child;

      if (Object.prototype.toString.call(selector) === '[object String]') {
        child = this[0].querySelector(selector);
        if (child) {
          this[0] = child;
        }
      }
      return this;
    },

    /**
     * Selects the specified child if it exists.
     *
     * @method (arg1)
     * @public
     * @param {Number}    the child index,
     * @returns {Object}  returns this,
     * @since 0.0.8
     */
    selectChild: function(n) {
      if (Object.prototype.toString.call(n) === '[object Number]') {
        this[0] = this[0].children[n] ? this[0].children[n] : this[0];
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
    parent: function() {
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
    firstParent: function() {
      if (this.root) {
        this[0] = this.root;
      }
      return this;
    }
  });
  /* */


  // -- Public Methods to insert/remove nodes to/from the DOM ------------------
  /* eslint-disable one-var, semi-style */

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
  /* eslint-enable one-var, semi-style */


  // -- Public Methods to manage the css properties ----------------------------
  /* */

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
  /* */


  // -- Public Methods to manage the classes -----------------------------------
  /* */

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
      if (Object.prototype.toString.call(className) === '[object String]') {
        this[0].classList.add(className);
      }
      return this;
    },

    /**
     * Adds a list of classes to the element.
     *
     * @method (arg1)
     * @public
     * @param {Array}     the list of classes to add,
     * @returns {Object}  returns this,
     * @since 0.0.8
     */
    addClasses: function(classes) {
      var i;
      if (Array.isArray(classes)) {
        for (i = 0; i < classes.length; i++) {
          this[0].classList.add(classes[i]);
        }
      }
      return this;
    },

    /**
     * Removes a class name from the element.
     *
     * @method (arg1)
     * @public
     * @param {String}    the class name to remove,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    removeClass: function(className) {
      if (Object.prototype.toString.call(className) === '[object String]') {
        this[0].classList.remove(className);
      }
      return this;
    },

    /**
     * Removes a list of classes from the element.
     *
     * @method (arg1)
     * @public
     * @param {Array}     the list of classes to remove,
     * @returns {Object}  returns this,
     * @since 0.0.8
     */
    removeClasses: function(classes) {
      var i;
      if (Array.isArray(classes)) {
        for (i = 0; i < classes.length; i++) {
          this[0].classList.remove(classes[i]);
        }
      }
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
    },

    /**
     * Checks if the element has the passed-in class.
     *
     * @method (arg1)
     * @public
     * @param {String}    the class name,
     * @returns {Boolean} returns true or false,
     * @since 0.0.8
     */
    hasClass: function(className) {
      var list = this[0].classList.value.split(' ');

      if (Object.prototype.toString.call(className) === '[object String]' && list.indexOf(className) !== -1) {
        return true;
      }
      return false;
    }
  });
  /* */


  // -- Public Methods to manage the node attributes ---------------------------
  /* */

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
  /* */


  // -- Public Methods to manage the events ------------------------------------
  /* */

  PicoQ._.extend(PicoQ.prototype, {

    /**
     * Adds an event listener to the selected node.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    the event name,
     * @param {Function}  the function to call when the event is fired,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    on: function(event, callback) {
      this[0].addEventListener(event, callback);
      return this;
    },

    /**
     * Remove an event listener to the selected node.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    the event name,
     * @param {Function}  the listener function to remove,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    off: function(event, callback) {
      this[0].removeEventListener(event, callback);
      return this;
    },

    /**
     * Fires the event associated to the selected node.
     *
     * Nota:
     * This is not supported by IE!
     *
     * @method (arg1)
     * @public
     * @param {String}    the event name,
     * @returns {Boolean} returns false if preventDefault was activated otherwise true,
     * @since 0.0.0
     */
    trigger: function(event) {
      // Create event object from event name:
      // (http://2ality.com/2013/06/triggering-events.html)
      var evt;

      if (Event) {
        // Modern Browsers:
        evt = new Event(event);
      } else {
        // Old browsers:
        evt = document.createEvent('Event');
        evt.initEvent(event, true, true);
      }
      return this[0].dispatchEvent(evt);
    },

    /**
     * Fires the event associated to the selected node (alias on trigger).
     *
     * @method (arg1)
     * @public
     * @param {String}    the event name,
     * @returns {Boolean} returns false if preventDefault was activated otherwise true,
     * @since 0.0.0
     */
    fire: function(event) {
      return this.trigger(event);
    }
  });
  /* */


  // -- Easing functions -------------------------------------------------------
  /* istanbul ignore next */
  /* eslint-disable no-mixed-operators, no-return-assign, no-param-reassign,
    no-cond-assign, no-plusplus, max-len, no-else-return, no-underscore-dangle */

  PicoQ._easing = {
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
  PicoQ._easing.VERSION = '0.0.1';
  /* eslint-enable no-mixed-operators, no-return-assign, no-param-reassign,
    no-cond-assign, no-plusplus, max-len, no-else-return, no-underscore-dangle */


  // -- Private functions for animate ------------------------------------------
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  Pic.anim = {

    /**
     * Extracts the optional argument of 'animate'.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {?}         duration, easing or callback,
     * @param {?}         easing or callback,
     * @param {Object}    the function to call at completion,
     * @returns {Object}  returns an object with the properties duration, easing
     *                    and callback,
     * @since 0.0.0
     */
    extractArgs: function(op1, op2, op3) {
      var args
        , duration
        , easing
        , callback
        ;

      // How many optional arguments?
      if (!op1 && !op2 && !op3) {
        args = 0;
      } else if (op1 && !op2 && !op2) {
        args = 1;
      } else if (op1 && op2 && !op3) {
        args = 2;
      } else {
        args = 3;
      }

      switch (args) {
        case 0:
          break;

        case 1:
          if (Object.prototype.toString.call(op1) === '[object Number]' || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          } else if (Object.prototype.toString.call(op1) === '[object String]') {
            easing = op1;
          } else if (Object.prototype.toString.call(op1) === '[object Function]') {
            callback = op1;
          }
          break;

        case 2:
          if (Object.prototype.toString.call(op1) === '[object Number]' || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
            if (Object.prototype.toString.call(op2) === '[object String]') {
              easing = op2;
            } else if (Object.prototype.toString.call(op2) === '[object Function]') {
              callback = op2;
            }
          } else if (Object.prototype.toString.call(op1) === '[object String]') {
            easing = op1;
            if (Object.prototype.toString.call(op2) === '[object Function]') {
              callback = op2;
            }
          }
          break;

        case 3:
          if (Object.prototype.toString.call(op1) === '[object Number]' || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          }
          if (Object.prototype.toString.call(op2) === '[object String]') {
            easing = op2;
          }
          if (Object.prototype.toString.call(op3) === '[object Function]') {
            callback = op3;
          }
          break;

        default:
          break;
      }
      return {
        duration: duration,
        easing: easing,
        callback: callback
      };
    },

    /**
     * Retrieves the CSS property values for the given node.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}    the given node,
     * @param {Object}    the CSS properties to animate,
     * @returns {Object}  returns an object with the properties initial, change, suffix
     *                    per animated property,
     * @since 0.0.0
     */
    getProps: function(el, properties) {
      var keys  = Object.keys(properties)
        , style = window.getComputedStyle(el)
        , props = {}
        , names = []
        , name
        , cssValue
        , cssParent
        , suffix
        , i
        ;

      // Parse the properties:
      for (i = 0; i < keys.length; i++) {
        // Normalize the name of the property:
        name = Pic.u.normalizeCssPropertyName(keys[i]);
        // Check it is a valid CSS property:
        cssValue = style.getPropertyValue(name);
        if (cssValue) {
          names.push(name);
          cssValue = parseFloat(cssValue, 10);
          suffix = properties[keys[i]].replace(/[0-9.]/g, '');
          // Absolute or relative?
          if (suffix === '%') {
            // Relative, convert pixel value returned by 'getComputedStyle' in %:
            cssParent = parseFloat(window.getComputedStyle(el.parentNode).getPropertyValue(name));
            cssValue = (cssValue / cssParent) * 100;
          }
          props[name] = {
            initial: cssValue,
            change: parseFloat(properties[keys[i]]) - cssValue,
            suffix: suffix
          };
        }
      }
      props.name = names;
      return props;
    },

    /**
     * Updates dynamically the CSS properties from their initial value to their final.
     *
     * @function (arg1, arg2, arg3, arg4, arg5, arg6)
     * @private
     * @param {Object}    the given node,
     * @param {Object}    the CSS properties to update,
     * @param {Function}  the easing method,
     * @param {Number}    the animation duration,
     * @param {Number}    the animation step,
     * @param {Function}  the function to call at the completion,
     * @returns {}        -,
     * @since 0.0.0
     */
    run: function(el, properties, easing, duration, delay, callback) {
      var props = Pic.anim.getProps(el, properties)
        , elem = el
        , lapseOfTime = 0
        , timer
        , value
        , i
        ;

      timer = setInterval(function() {
        // easing:
        for (i = 0; i < props.name.length; i++) {
          value = easing(
            lapseOfTime,
            props[props.name[i]].initial,
            props[props.name[i]].change,
            duration
          );

          elem.style[props.name[i]] = value + props[props.name[i]].suffix;
        }
        lapseOfTime += delay;
        if (lapseOfTime > duration) {
          clearInterval(timer);
          if (callback) callback();
        }
      }, delay);
    },

    /**
     * The default easing method (if PicoQ.easing.e() aren't provided).
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Number}    the current lapse time,
     * @param {Number}    the initial CSS property value,
     * @param {Number}    the difference between the final and the initial value,
     * @param {Number}    the animation duration,
     * @returns {Number}  returns the value of the CSS property at the current lapse time,
     * @since 0.0.0
     */
    /* eslint-disable no-mixed-operators */
    swing: function(t, b, c, d) {
      return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
    } /* eslint-enable no-mixed-operators */
  };
  /* eslint-enable no-underscore-dangle */


  // -- Public Methods to animate the CSS properties ---------------------------
  PicoQ._.extend(PicoQ.prototype, {
    /**
     * Performs a custom animation of a set of CSS properties.
     *
     * @method (properties [, duration ] [, easing ] [, complete ])
     * @public
     * @param {Object}    An object of CSS properties,
     * @param {Number}    define how long the animation run,
     * @param {Easing}    the easing animation method,
     * @param {Function}  the function to call at completion,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    /* eslint-disable no-underscore-dangle */
    animate: function(properties, arg2, arg3, arg4) {
      var DTIME = 400
        , FAST  = 200
        , SLOW  = 600
        , INC   = 10
        , el = this[0]
        , delay = INC
        , args
        , duration
        , easing
        , callback
        ;

      // Is the argument properties an object?
      if (Object.prototype.toString.call(properties) !== '[object Object]') {
        return this;
      }

      // Extract the optional arguments:
      args = Pic.anim.extractArgs(arg2, arg3, arg4);

      // Set the duration:
      duration = Object.prototype.toString.call(args.duration) === '[object Number]'
        ? args.duration
        : (function(arg) {
          if (arg === 'fast') return FAST;
          if (arg === 'slow') return SLOW;
          return DTIME;
        }(args.duration));

      // Set the easing (swing only for the time being):
      easing = (PicoQ._easing && PicoQ._easing[args.easing])
        ? PicoQ._easing[args.easing]
        : Pic.anim.swing;

      // Set the callback:
      callback = args.callback ? args.callback : null;

      // Run the animation:
      Pic.anim.run(el, properties, easing, duration, delay, callback);

      // Test Mode:
      if (PicoQ.VDOM) {
        this.probe = {
          duration: duration,
          easing: (PicoQ._easing && PicoQ._easing[args.easing]) ? args.easing : 'swing',
          callback: callback
        };
      }

      return this;
    }
  });
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  // -- Private Ajax functions -------------------------------------------------
  /* eslint-disable one-var, semi-style */

  Pic.ajax = {

    /**
     * Returns the default settings for an ajax call.
     *
     * @function ()
     * @private
     * @param {}          -,
     * @returns {Object}  returns the default settings,
     * @since 0.0.3
     */
    getDefaultSettings: function() {
      return {
        url: '',
        method: 'GET',
        dataType: 'text',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      };
    },

    /**
     * Returns the url and the settings for an ajax call merged with the default
     * settings.
     *
     * @function (arg1, arg2)
     * @private
     * @param {String|Object} the url or the ajax settings,
     * @param {Object}        the ajax settings,
     * @returns {Object}      returns the url and the extended settings,
     * @since 0.0.3
     */
    getArguments: function(args) {
      var defaultSettings = this.getDefaultSettings()
        , url
        , settings
        ;

      // Extract url and settings from arguments:
      switch (args.length) {
        case 0:
          url = '';
          settings = _.extend(defaultSettings);
          break;

        case 1:
          if (Object.prototype.toString.call(args[0]) === '[object String]') {
            url = args[0];
            settings = _.extend(defaultSettings);
          } else if (Object.prototype.toString.call(args[0]) === '[object Object]') {
            url = Object.prototype.toString.call(args[0].url) === '[object String]' ? args[0].url : '';
            settings = _.extend(defaultSettings, args[0]);
          } else {
            url = '';
            settings = _.extend(defaultSettings);
          }
          break;

        case 2:
        default:
          url = Object.prototype.toString.call(args[0]) === '[object String]' ? args[0] : '';
          settings = Object.prototype.toString.call(args[1]) === '[object Object]'
            ? _.extend(defaultSettings, args[1])
            : _.extend(defaultSettings);
          break;
      }
      return { url: url, settings: settings };
    },

    /**
     * Returns the settings for the ajax shorthand functions (get, post, load, getJSON).
     *
     * @function (arg1, [arg2], [arg3], [arg4])
     * @private
     * @param {String|Object} the url or the settings,
     * @param ...             ...,
     * @returns {Object}      returns the formatted setting,
     * @since 0.0.3
     */
    getSettings: function(args) {
      var settings = {
        url: null,
        data: null,
        success: null,
        dataType: null
      };

      switch (args.length) {
        case 0:
          break;

        // fn(url) or fn([settings])
        case 1:
          if (Object.prototype.toString.call(args[0]) === '[object String]') {
            settings.url = args[0];
            break;
          }
          if (Object.prototype.toString.call(args[0]) === '[object Object]') {
            settings = args[0];
          }
          break;

        // fn(url, data) or fn(url, success) or fn(url, dataType)
        case 2:
          if (Object.prototype.toString.call(args[0]) !== '[object String]') {
            break;
          }
          settings.url = args[0];

          if (Object.prototype.toString.call(args[1]) === '[object Object]') {
            settings.data = args[1];
            break;
          }
          if (Object.prototype.toString.call(args[1]) === '[object Function]') {
            settings.success = args[1];
            break;
          }
          if (Object.prototype.toString.call(args[1]) === '[object String]') {
            settings.dataType = args[1];
          }
          break;

        // fn(url [, data ] [, success / dataType ]) or fn(url, success, dataType)
        case 3:
          if (Object.prototype.toString.call(args[0]) !== '[object String]') {
            break;
          }
          settings.url = args[0];

          if (Object.prototype.toString.call(args[1]) === '[object Object]') {
            settings.data = args[1];
            if (Object.prototype.toString.call(args[2]) === '[object Function]') {
              settings.success = args[2];
              break;
            }
            if (Object.prototype.toString.call(args[2]) === '[object String]') {
              settings.dataType = args[2];
            }
            break;
          }

          if (Object.prototype.toString.call(args[1]) === '[object Function]') {
            settings.success = args[1];
          }
          if (Object.prototype.toString.call(args[2]) === '[object String]') {
            settings.dataType = args[2];
          }
          break;

        // fn(url, data, success, dataType)
        case 4:
        default:
          if (Object.prototype.toString.call(args[0]) !== '[object String]') {
            break;
          }
          settings.url = args[0];
          if (Object.prototype.toString.call(args[1]) === '[object Object]') {
            settings.data = args[1];
          }
          if (Object.prototype.toString.call(args[2]) === '[object Function]') {
            settings.success = args[2];
          }
          if (Object.prototype.toString.call(args[3]) === '[object String]') {
            settings.dataType = args[3];
          }
          break;
      }
      return settings;
    },

    /**
     * Returns the encoded url params ('param1=value1&param2=vlaue2').
     *
     * @function (arg1)
     * @private
     * @param {Object}    the url params,
     * @returns {String}  returns the url encoded params,
     * @since 0.0.3
     */
    encodeParams: function(params) {
      var s = ''
        , keys
        , i
        ;

      if (Object.prototype.toString.call(params) !== '[object Object]') {
        return null;
      }

      keys = Object.keys(params);
      for (i = 0; i < keys.length; i++) {
        if (i === 0) {
          s += keys[i] + '=' + encodeURIComponent(params[keys[i]]);
        } else {
          s += '&' + keys[i] + '=' + encodeURIComponent(params[keys[i]]);
        }
      }
      return s;
    },

    /**
     * Returns the deferred function done, fail or always.
     *
     * Nota: Mutates the array callbacks.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}     the xhr ajax object,
     * @param {Array}      an array of callback functions associated with done, fail, always,
     * @param {String}     the name of the deferred function (done, fail, always),
     * @returns {Function} returns the deferred function (done, fail or always),
     * @since 0.0.3
     */
    register: function(xhr, callbacks, cbname) {
      return function(cb) {
        var obj = {};
        if (cb) {
          obj[cbname] = cb;
          callbacks.push(obj);
        } else {
          obj[cbname] = null;
          callbacks.push(obj);
        }
        return xhr;
      };
    },

    /**
     * Fires the callback functions associated with done, fail or always.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Array}      the array of callbacks,
     * @param {Object}     the xhr ajax object,
     * @returns {}         -,
     * @since 0.0.3
     */
    fire: function(callbacks, xhr, result) {
      var cname
        , fn
        , i
        ;

      switch (result) {
        case 'success':
          for (i = 0; i < callbacks.length; i++) {
            cname = Object.keys(callbacks[i])[0];
            fn = callbacks[i][cname];
            if (Object.prototype.toString.call(fn) === '[object Function]' && (cname === 'done' || cname === 'always' || cname === 'success')) {
              fn(xhr.responseText, xhr.statusText, xhr);
            }
          }
          break;

        case 'error':
          for (i = 0; i < callbacks.length; i++) {
            cname = Object.keys(callbacks[i])[0];
            fn = callbacks[i][cname];
            if (typeof fn === 'function' && (cname === 'fail' || cname === 'always')) {
              fn(xhr, xhr.statusText);
            }
          }
          break;

        /* istanbul ignore next */
        default:
          throw new Error('Pic.ajax.fire: this case must never happen!');
      }
    }
  };


  // -- Public Ajax functions --------------------------------------------------
  /**
   * Performs an asynchronous HTTP Ajax request.
   *
   * @function (arg1, arg2)
   * @public
   * @param {String|Object}  the url or the object settings,
   * @param {Object}         the object settings or undefined,
   * @returns {Object}       returns a superset of the xhr object,
   * @since 0.0.3
   */
  /* eslint-disable no-underscore-dangle */
  PicoQ.ajax = function() {
    var _a             = Pic.ajax
      , o              = _a.getArguments(arguments)
      , xhr            = new window.XMLHttpRequest()
      , callbacks      = []
      , url            = o.url
      , settings       = o.settings
      ;

    // Register the deferred functions:
    xhr.done = _a.register(xhr, callbacks, 'done');
    xhr.fail = _a.register(xhr, callbacks, 'fail');
    xhr.always = _a.register(xhr, callbacks, 'always');

    // Retrieve the data from the server:
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 0) {
          _a.fire(callbacks, xhr, 'success');
          if (settings.success) {
            // Fire the callback 'success':
            if (settings.dataType === 'json') {
              settings.success(JSON.parse(xhr.responseText), xhr.statusText, xhr);
            } else {
              settings.success(xhr.responseText, xhr.statusText, xhr);
            }
          }
        } else {
          _a.fire(callbacks, xhr, 'error');
        }
      }
    };

    // Send:
    if (settings.method === 'GET') {
      /* method is GET */
      if (settings.data) {
        url += '?' + _a.encodeParams(settings.data);
      }
      xhr.open('GET', url, true);
      xhr.send(null);
    } else {
      /* method is POST */
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(_a.encodeParams(settings.data));
    }
    return xhr;
  };
  /* eslint-enable no-underscore-dangle */

  /**
   * Loads data from the server using a HTTP GET request.
   *
   * @function (arg1...)
   * @public
   * @param {String|Object}  url [, data ] [, success ] [, dataType ] or [ settings ]
   * @param ...              ...,
   * @returns {Object}       returns a superset of the xhr object,
   * @since 0.0.3
   */
  PicoQ.get = function() {
    var settings = Pic.ajax.getSettings(arguments)
      ;

    settings.method = 'GET';
    return PicoQ.ajax(settings);
  };

  /**
   * Loads JSON-encoded data from the server using a HTTP GET request.
   *
   * @function (arg1...)
   * @public
   * @param {String|Object}  url [, data ] [, success ] or [ settings ]
   * @param ...              ...,
   * @returns {Object}       returns a superset of the xhr object,
   * @since 0.0.3
   */
  PicoQ.getJSON = function() {
    var settings = Pic.ajax.getSettings(arguments)
      ;

    settings.method = 'GET';
    settings.dataType = 'json';
    return PicoQ.ajax(settings);
  };

  /**
   * Loads data from the server using a HTTP POST request.
   *
   * @function (arg1...)
   * @public
   * @param {String|Object}  url [, data ] [, success ] [, dataType ] or [ settings ]
   * @param ...              ...,
   * @returns {Object}       returns a superset of the xhr object,
   * @since 0.0.3
   */
  PicoQ.post = function() {
    var settings = Pic.ajax.getSettings(arguments)
      ;

    settings.method = 'POST';
    return PicoQ.ajax(settings);
  };


  // -- Public Ajax methods ----------------------------------------------------
  PicoQ._.extend(PicoQ.prototype, {

    /**
     * Load data from the server and places the returned HTML into the matched element.
     *
     * @method (url [, data ] [, complete ])
     * @public
     * @param {String}      the url string,
     * @param {Object}      the params to be sent to the server,
     * @param {Function}    the function to call at the completion,
     * @returns {Object}    returns this,
     * @since 0.0.3
     */
    load: function() {
      var that     = this
        , settings = Pic.ajax.getSettings(arguments)
        , cb
        ;

      // Do not perform an Ajax request if the 'selector' doesn't match:
      if (!this[0]) {
        return this;
      }

      cb = settings.success;
      settings.success = undefined;
      settings.method = settings.data ? 'POST' : 'GET';

      PicoQ.ajax(settings)
        .done(function(xmlString) {
          that.html(xmlString);
          if (Object.prototype.toString.call(cb) === '[object Function]') {
            cb();
          }
        });
      return this;
    }
  });
  /* eslint-enable one-var, semi-style */


  // Returns the library name:
  return PicoQ;
}));
/* eslint-enable one-var, semi-style */
