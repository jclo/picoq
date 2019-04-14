// Based on UMD Lib template v0.8.4
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
/* eslint no-shadow: ["error", { "allow": ["root"] }] */
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
}({{lib:parent}}, function(root) {
  'use strict';

  // These are the global variables accessible everywhere inside this module.
  // 'PicoQ' is the variable that defines this library and it is the only variable
  // accessible outside this module.
  // 'PIQ' is an object that exports public methods from the IIFE module
  // in which they are defined.
  // And, '_' is an object that gives access to an embedded small utility library.
  /* eslint-disable one-var, semi-style */
  var PicoQ
    , PIQ
    , _
    ;

  /* eslint-enable one-var, semi-style */

  /** **************************************************************************
   *-
   * PIQ is an internal object that links all the internal modules.
   *
   * tree.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   *
   * @namespace JG
   * @exports   -
   * @author    -
   * @since     0.0.0
   * @version   -
   * ************************************************************************ */

  PIQ = {
    _: null,
    JEasing: null,
    Util: {
      Public: {}
    },
    Ajax: {
      Private: {}
    }
  };


  /** **************************************************************************
   *-
   * Defines PicoQ library.
   *
   * picoqjs is built upon a variation of the Pseudoclassical
   * Instantiation pattern. The object is instantiated by the new keyword
   * included in the constructor. The caller just needs to call the
   * constructor without the new keyword to get in return the object.
   *
   * Constructor:
   *  . PicoQ                       creates the PicoQ object,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this PicoQ object,
   *  . setTestMode                 gives an access to the private methods for
   *                                testing purpose.
   *
   *
   * Public Methods:
   *  . PicoQ.prototype is defined empty. It is filled by the methods defined
   *    in the files stored in the folders methods and ajax.
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants
    var previousPicoQ
      ;

    // -- Local variables


    // -- Public ---------------------------------------------------------------

    /**
     * Creates the PicoQ object.
     *
     * @constructor (arg1)
     * @public
     * @param {String}      CSS selector,
     * @returns {Object}    returns PicoQ object,
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

    // Attaches a release number to the library:
    PicoQ.VERSION = '{{lib:version}}';


    // -- Public Static Methods ------------------------------------------------

    /**
     * Returns a reference to this PicoQ object.
     *
     * Nota:
     * Runs PicoQ in noConflict mode by returning the PicoQ variable to its
     * previous owner and returning a reference to this PicoQ object.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns a reference to this object,
     * @since 0.0.0
     */
    PicoQ.noConflict = function() {
      root.PicoQ = previousPicoQ;
      return this;
    };

    /**
     * Gives an access to the private methods for testing purpose.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns a reference to this object,
     * @since 0.0.0
     */
    PicoQ.setTestMode = function() {
      PIQ._ = _;
      PicoQ.PIQ = PIQ;
    };


    // -- Public Methods -------------------------------------------------------

    // Prototype functions are attached to PicoQ.prototype by the function
    // PicoQ._extend()
    PicoQ.prototype = {
      //
    };
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /** **************************************************************************
   *-
   * Defines an utility library.
   *
   * _.js is just a literal object that contains a set of functions.
   * it can't be intantiated.
   *
   *
   * Public Static Methods:
   *  . extend                      extends a given object with passed-in object(s),
   *
   *
   *
   * @namespace    _
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  _ = {

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
     * @param {Object}      the objects to merge,
     * @returns {Object}    the resulting object,
     * @since 0.0.8
     */
    /* eslint-disable noo-param-reassign */
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
            /* eslint-disable-next-line no-param-reassign */
            obj[props[j]] = source[props[j]];
          }
        }
      }
      return obj;
    }
  };
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Defines an utility library.
   *
   * utilities.js is just a literal object that contains a set of functions.
   * it can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . normalizeCssPropertyName    normalizes the CSS properties,
   *
   *
   *
   * @namespace    PIQ.Util.Public
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path
    var Root = PIQ.Util.Public;


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public Static Methods ------------------------------------------------

    _.extend(Root, {

      /**
       * Normalizes the CSS properties.
       * (replace '-' between composite name by camelcase style).
       * Ex: font-size -> fontSize
       *
       * @function (arg1)
       * @private
       * @param {String}      the CSS property name,
       * @returns {String}    the normalized CSS property name,
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
    });
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Defines the select methods.
   *
   * select.js extends PicoQ.prototype.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . select                      selects a child element,
   *  . selectChild                 selects the specified child if it exists,
   *  . parent                      returns to the parent element,
   *  . firstParent                 returns to the root parent if defined,
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------


    // -- Public Static Methods ------------------------------------------------

    _.extend(PicoQ.prototype, {

      /**
       * Selects a child element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the selector,
       * @returns {Object}    returns this,
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
       * @param {Number}      the child index,
       * @returns {Object}    returns this,
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
       * @param {}            -,
       * @returns {Object}    returns this,
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
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.7
       */
      firstParent: function() {
        if (this.root) {
          this[0] = this.root;
        }
        return this;
      }
    });
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Defines the methods interacting with the DOM.
   *
   * dom.js extends PicoQ.prototype.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . html                        gets/sets the HTML contents from/to the DOM element,
   *  . empty                       removes all the childs from the current node,
   *  . append                      appends an HTML string after the last child,
   *  . prepend                     appends an HTML string before the first child,
   *  . after                       appends an HTML string after the current node,
   *  . before                      appends an HTML string before the current node,
   *  . replaceWith                 replaces the current node with the given DOMString,
   *  . text                        gets/sets the text contents from/to the DOM element,
   *  . clone                       clones the selected DOM element,
   *  . insertChildBefore           inserts a child element before another child element,
   *  . removeChild                 removes the passed-in child element,
   *  . replaceChild                replaces a child by another,
   *  . children                    returns the children,
   *  . childIndex                  returns the children position in the parent tree,
   *  . getRect                     returns the DOMRect object that bounds the contents
   *                                of the range.
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------


    // -- Public Static Methods ------------------------------------------------

    _.extend(PicoQ.prototype, {

      /**
       * Gets/Sets the HTML contents from/to the DOM element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the html contents to add,
       * @returns {Object}    returns this or the HTML contents,
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
       * Removes all the childs from the current node.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
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
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
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
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
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
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
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
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
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
       * @param {String}      an HTML string
       * @returns {Object}    returns this,
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
       * Gets/Sets the text contents from/to the DOM element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the text contents to add,
       * @returns {Object}    returns this or the text content,
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
       * Clones the selected DOM element.
       *
       * @method (arg1)
       * @public
       * @param {Boolean}     true clone with children, false without,
       * @returns {Object}    returns the cloned element,
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
       * @param {Object}      the new node element,
       * @param {Object}      the target node element,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      insertChildBefore: function(newChild, child) {
        if (newChild) {
          this[0].insertBefore(newChild, child);
        }
        return this;
      },

      /**
       * Removes the passed-in child element.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the child element to remove,
       * @returns {Object}    returns this,
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
       * @param {Object}      the new node element,
       * @param {Object}      the node element to replace,
       * @returns {Object}    returns this,
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
       * @param {}            -,
       * @returns {Object}    returns the children HTMLCollection,
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
       * @param {}            -,
       * @returns {Object}    returns the children position,
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
       * @param {}            -,
       * @returns {Object}    returns the DOMRect object,
       * @since 0.0.8
       */
      getRect: function() {
        return this[0] ? this[0].getBoundingClientRect() : null;
      }
    });
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Defines the methods that interact with the style of a DOM node.
   *
   * css.js extends PicoQ.prototype.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . css                         gets/sets the style attribute of the element,
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules
    var Util = PIQ.Util.Public
      ;


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------


    // -- Public Static Methods ------------------------------------------------

    _.extend(PicoQ.prototype, {

      /**
       * Gets/Sets the style attribute of the element,
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the style attribute,
       * @param {String}      the style attribute value,
       * @returns {String}    returns the style attribute value or this,
       * @since 0.0.0
       */
      css: function(styleAttr, value) {
        var attr = Util.normalizeCssPropertyName(styleAttr);

        if (!value) {
          // Get attribute:
          return this[0].style[attr];
        }

        // Set attribute:
        this[0].style[attr] = value;
        return this;
      }
    });
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Defines the methods that manipulate the classes of the node element.
   *
   * class.js extends PicoQ.prototype.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . getClassList                returns the DOMTokenList collection,
   *  . addClass                    adds a class name to the element,
   *  . addClasses                  adds a list of classes to the DOM element,
   *  . removeClass                 removes a class name from the DOM element,
   *  . removeClasses               removes a list of classes from the element,
   *  . toggleClass                 toggles a class name for the DOM element,
   *  . hasClass                    checks if the DOM element has the passed-in class,
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------


    // -- Public Static Methods ------------------------------------------------

    _.extend(PicoQ.prototype, {

      /**
       * Returns the DOMTokenList collection of the class attributes of the element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the DOMTokenList of the element,
       * @since 0.0.0
       */
      getClassList: function() {
        return this[0].classList;
      },

      /**
       * Adds a class name to the DOM element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name to add,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      addClass: function(className) {
        if (Object.prototype.toString.call(className) === '[object String]') {
          this[0].classList.add(className);
        }
        return this;
      },

      /**
       * Adds a list of classes to the DOM element.
       *
       * @method (arg1)
       * @public
       * @param {Array}       the list of classes to add,
       * @returns {Object}    returns this,
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
       * Removes a class name from the DOM element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name to remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      removeClass: function(className) {
        if (Object.prototype.toString.call(className) === '[object String]') {
          this[0].classList.remove(className);
        }
        return this;
      },

      /**
       * Removes a list of classes from the DOM element.
       *
       * @method (arg1)
       * @public
       * @param {Array}       the list of classes to remove,
       * @returns {Object}    returns this,
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
       * Toggles a class name for the DOM element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name to add/remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      toggleClass: function(className) {
        this[0].classList.toggle(className);
        return this;
      },

      /**
       * Checks if the DOM element has the passed-in class.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name,
       * @returns {Boolean}   returns true or false,
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
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Defines the methods that interact with the attributes of a node.
   *
   * attr.js extends PicoQ.prototype.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . attr                        sets or gets the specified attribute,
   *  . removeAttr                  removes the specified attribute,
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------


    // -- Public Static Methods ------------------------------------------------

    _.extend(PicoQ.prototype, {

      /**
       * Sets or Gets the specified attribute.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the attribute name,
       * @param {String}      the attribute value,
       * @returns {Object}    returns this or the attribute value,
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
       * @param {String}      the attribute name,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      removeAttr: function(attr) {
        this[0].removeAttribute(attr);
        return this;
      }
    });
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Defines the methods to deal with events.
   *
   * events.js extends PicoQ.prototype.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . on                          adds an event listener to the selected node,
   *  . off                         removes an event listener from the selected node,
   *  . trigger                     fires the event associated to the selected node,
   *  . fire                        fires an event (alias on trigger),
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------


    // -- Public Static Methods ------------------------------------------------

    _.extend(PicoQ.prototype, {

      /**
       * Adds an event listener to the selected node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event name,
       * @param {Function}    the function to call when the event is fired,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      on: function(event, callback) {
        this[0].addEventListener(event, callback);
        return this;
      },

      /**
       * Removes an event listener from the selected node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event name,
       * @param {Function}    the listener function to remove,
       * @returns {Object}    returns this,
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
       * @param {String}      the event name,
       * @returns {Boolean}   returns false if preventDefault was activated otherwise true,
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
       * @param {String}      the event name,
       * @returns {Boolean}   returns false if preventDefault was activated otherwise true,
       * @since 0.0.0
       */
      fire: function(event) {
        return this.trigger(event);
      }
    });
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Performs a custom animation on a set of CSS properties.
   *
   * animate.js extends PicoQ.prototype.
   *
   * Private Functions:
   *  . _extractArgs                extracts the optional argument of 'animate',
   *  . _getProps                   retrieves the CSS property values,
   *  . _run                        updates dynamically the CSS properties,
   *  . _swing                      defines the default easing method,
   *
   *
   * Public Static Methods:
   *  . animate Performs a custom animation on a set of CSS properties.
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules
    var Util = PIQ.Util.Public
      ;


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

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
    function _extractArgs(op1, op2, op3) {
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
          /* eslint-disable-next-line max-len */
          if (Object.prototype.toString.call(op1) === '[object Number]' || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          } else if (Object.prototype.toString.call(op1) === '[object String]') {
            easing = op1;
          } else if (Object.prototype.toString.call(op1) === '[object Function]') {
            callback = op1;
          }
          break;

        case 2:
          /* eslint-disable-next-line max-len */
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
          /* eslint-disable-next-line max-len */
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
    }

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
    function _getProps(el, properties) {
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
        name = Util.normalizeCssPropertyName(keys[i]);
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
    }

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
    function _run(el, properties, easing, duration, delay, callback) {
      var props = _getProps(el, properties)
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
    }

    /**
     * Defines the default easing method (if PicoQ.easing.e() aren't provided).
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
    function _swing(t, b, c, d) {
      return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
    } /* eslint-enable no-mixed-operators */


    // -- Public Static Methods ------------------------------------------------

    _.extend(PicoQ.prototype, {

      /**
       * Performs a custom animation on a set of CSS properties.
       *
       * @method (properties [, duration ] [, easing ] [, complete ])
       * @public
       * @param {Object}      An object of CSS properties,
       * @param {Number}      define how long the animation run,
       * @param {Easing}      the easing animation method,
       * @param {Function}    the function to call at completion,
       * @returns {Object}    returns this,
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
        args = _extractArgs(arg2, arg3, arg4);

        // Set the duration:
        duration = Object.prototype.toString.call(args.duration) === '[object Number]'
          ? args.duration
          : (function(arg) {
            if (arg === 'fast') return FAST;
            if (arg === 'slow') return SLOW;
            return DTIME;
          }(args.duration));

        // Set the easing (swing only for the time being):
        easing = (PIQ.JEasing && PIQ.JEasing[args.easing])
          ? PIQ.JEeasing[args.easing]
          : _swing;

        // Set the callback:
        callback = args.callback ? args.callback : null;

        // Run the animation:
        _run(el, properties, easing, duration, delay, callback);

        // Test Mode:
        if (PicoQ.VDOM) {
          this.probe = {
            duration: duration,
            easing: (PIQ.JEasing && PIQ.JEasing[args.easing]) ? args.easing : 'swing',
            callback: callback
          };
        }

        return this;
      }
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */


  /** **************************************************************************
   *-
   * Defines private static methods for Ajax functionnality.
   *
   * ajaxprivate.js is just a literal object that contains a set of functions.
   * it can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Private Static Methods:
   *  . getDefaultSettings          returns the default settings for an ajax call,
   *  . getArguments                returns the url and the settings for an ajax call,
   *  . getSettings                 returns the settings for the ajax shorthand functions,
   *  . encodeParams                returns the encoded url params,
   *  . register                    returns the deferred function done, fail or always,
   *  . fire                        fires the callback functions (done, fail or always),
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path
    var Root = PIQ.Ajax.Private;


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Ajax Private Static Methods ------------------------------------------

    _.extend(Root, {

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
       * @param {Object}      the url params,
       * @returns {String}    returns the url encoded params,
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
       * @param {Object}      the xhr ajax object,
       * @param {Array}       an array of callback functions associated with done, fail, always,
       * @param {String}      the name of the deferred function (done, fail, always),
       * @returns {Function}  returns the deferred function (done, fail or always),
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
              /* eslint-disable-next-line max-len */
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
    });
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Extends PicoQ with Ajax's static methods.
   *
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . ajax                        performs an asynchronous HTTP Ajax request,
   *  . get                         loads data using an HTTP GET request,
   *  . getJSON                     loads JSON-encoded data using an HTTP GET request,
   *  . post                        loads data using an HTTP POST request,
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules
    var Ajax = PIQ.Ajax.Private
      ;


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------


    // -- Public Static Methods ------------------------------------------------

    /**
     * Performs an asynchronous HTTP Ajax request.
     *
     * @function (arg1, arg2)
     * @public
     * @param {String|Object}   the url or the object settings,
     * @param {Object}          the object settings or undefined,
     * @returns {Object}        returns a superset of the xhr object,
     * @since 0.0.3
     */
    /* eslint-disable no-underscore-dangle */
    PicoQ.ajax = function() {
      var o          = Ajax.getArguments(arguments)
        , xhr        = new window.XMLHttpRequest()
        , callbacks = []
        , url       = o.url
        , settings  = o.settings
        ;

      // Register the deferred functions:
      xhr.done = Ajax.register(xhr, callbacks, 'done');
      xhr.fail = Ajax.register(xhr, callbacks, 'fail');
      xhr.always = Ajax.register(xhr, callbacks, 'always');

      // Retrieve the data from the server:
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 || xhr.status === 0) {
            Ajax.fire(callbacks, xhr, 'success');
            if (settings.success) {
              // Fire the callback 'success':
              if (settings.dataType === 'json') {
                settings.success(JSON.parse(xhr.responseText), xhr.statusText, xhr);
              } else {
                settings.success(xhr.responseText, xhr.statusText, xhr);
              }
            }
          } else {
            Ajax.fire(callbacks, xhr, 'error');
          }
        }
      };

      // Send:
      if (settings.method === 'GET') {
        /* method is GET */
        if (settings.data) {
          url += '?' + Ajax.encodeParams(settings.data);
        }
        xhr.open('GET', url, true);
        xhr.send(null);
      } else {
        /* method is POST */
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(Ajax.encodeParams(settings.data));
      }
      return xhr;
    };
    /* eslint-enable no-underscore-dangle */

    /**
     * Loads data from the server using a HTTP GET request.
     *
     * @function (arg1...)
     * @public
     * @param {String|Object}   url [, data ] [, success ] [, dataType ] or [ settings ]
     * @param ...               ...,
     * @returns {Object}        returns a superset of the xhr object,
     * @since 0.0.3
     */
    PicoQ.get = function() {
      var settings = Ajax.getSettings(arguments)
        ;

      settings.method = 'GET';
      return PicoQ.ajax(settings);
    };

    /**
     * Loads JSON-encoded data from the server using a HTTP GET request.
     *
     * @function (arg1...)
     * @public
     * @param {String|Object}   url [, data ] [, success ] or [ settings ]
     * @param ...               ...,
     * @returns {Object}        returns a superset of the xhr object,
     * @since 0.0.3
     */
    PicoQ.getJSON = function() {
      var settings = Ajax.getSettings(arguments)
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
     * @param {String|Object}   url [, data ] [, success ] [, dataType ] or [ settings ]
     * @param ...               ...,
     * @returns {Object}        returns a superset of the xhr object,
     * @since 0.0.3
     */
    PicoQ.post = function() {
      var settings = Ajax.getSettings(arguments)
        ;

      settings.method = 'POST';
      return PicoQ.ajax(settings);
    };
  }());
  /* eslint-enable one-var, semi-style */


  /** **************************************************************************
   *-
   * Defines Ajax methods.
   *
   * ajaxmethods.js extends PicoQ.prototype.
   *
   * Private Functions:
   *  . none,
   *
   *
   * PicoQ.prototype Methods:
   *  . load                        Loads data from the server and inserts it in DOM,
   *
   *
   *
   * @namespace    PicoQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules
    var Ajax = PIQ.Ajax.Private
      ;


    // -- Local constants


    // -- Local variables


    // -- PicoQ.prototype Methods ----------------------------------------------

    _.extend(PicoQ.prototype, {

      /**
       * Loads data from the server and places the returned HTML into
       * the matched element.
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
          , settings = Ajax.getSettings(arguments)
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
  }());
  /* eslint-enable one-var, semi-style */


  // Returns the library name:
  return PicoQ;
}));
