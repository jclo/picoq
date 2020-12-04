/*! ****************************************************************************
 * PicoQ v1.0.0-alpha.0
 *
 * A tiny Javascript library to interact with the DOM.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2020 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from ES6lib v1.0.6.
 * ************************************************************************** */
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
const $__ES6GLOB = {};
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
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.PicoQ = factory(root);
  }
}($__ES6GLOB, (root) => {
  'use strict';

  /** **************************************************************************
   * _head provides the list of the constants that are defined at the global
   * level of this module and are accessible to all. So, they are considered
   * as reserved words for this library.
   * ************************************************************************ */
  /* eslint-disable one-var, no-unused-vars, semi-style */

  let PicoQ
    , extend
    ;

  // Tree is an internal object that links all the internal modules.
  const PIQ = {
    Anim: {
      Public: {},
    },
  };

  /* eslint-enable one-var, no-unused-vars, semi-style */

  /** **************************************************************************
   *
   * Implements the methods to manipulate the DOM.
   *
   * picoq.js is built upon the Prototypal Instantiation pattern. It
   * returns an object by calling its constructor. It doesn't use the new
   * keyword.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Constructor:
   *  . PicoQ                       creates and returns the PicoQ object,
   *
   *
   * Private Static Methods:
   *  . _setTestMode                returns internal objects for testing purpose,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this PicoQ object,
   *
   *
   * Public Variables:
   *  . [0]                         the selected DOM element,
   *  . _library                    the name and version of the library,
   *  . _root                       the first parent DOM element,
   *  . id                          the id of selected element,
   *
   *
   * Public Methods:
   *  . whoami                      returns the library name and version,
   *
   *  . select                      selects a child element,
   *  . selectChild                 selects the nth child,
   *  . parent                      returns to the parent element,
   *  . firstParent                 returns to the root parent if defined,
   *
   *  . find                        returns the NodeList of the matching children,
   *  . tag                         returns the tag name of the selected element,
   *
   *  . html                        gets/sets the HTML contents of the element,
   *  . empty                       removes all the childs from the current node,
   *
   *  . append                      appends and selects a node, defined by an HTML tag,
   *  . appendTextChild             appends a text node child to the selected node,
   *  . appendBefore                appends and selects a node before the selected node,
   *  . appendAfter                 appends and selects a node after the selected node,
   *  . replace                     replaces the current node by a new node,
   *
   *  . appendHTML                  appends an HTML string after the last child,
   *  . prepend                     appends an HTML string before the first child,
   *  . after                       appends an HTML string after the current node,
   *  . before                      appends an HTML string before the current node,
   *  . replaceWith                 replaces the current node with the given DOMString,
   *
   *  . text                        gets/sets the text contents of the element,
   *
   *  . clone                       clones the selected element,
   *  . firstChild                  returns the firstChild element,
   *  . insertChildBefore           inserts a child element before another child element,
   *  . removeChild                 removes the passed-in child element,
   *  . replaceChild                replaces a child by another,
   *  . children                    returns the children,
   *  . childIndex                  returns the children position in the parent tree,
   *  . getRect                     returns the DOMRect object that bounds,
   *
   *  . css                         gets/sets the style attribute of the element,
   *
   *  . getClassList                returns the DOMTokenList collection,
   *  . addClass                    adds a class name to the element,
   *  . addClasses                  adds a list of classes to the element,
   *  . removeClass                 removes a class name from the element,
   *  . removeClasses               removes a list of classes from the element,
   *  . toggleClass                 toggles a class name for the element,
   *  . hasClass                    checks if the element has the passed-in class,
   *
   *  . attr                        sets or gets the specified attribute,
   *  . removeAttr                  removes the specified attribute,
   *
   *  . animate                     performs an animation,
   *
   *  . on                          attachs an event listener to the current node,
   *  . off                         removes an event listener from the current node,
   *  . trigger                     fires the event associated to the selected node,
   *  . fire                        aliases the 'trigger' method,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules
    const Anim = PIQ.Anim.Public;


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousPicoQ = root.PicoQ
        ;


    // -- Local Variables
    let methods
      ;


    // -- Public ---------------------------------------------------------------

    /**
     * Returns the PicoQ object.
     * (Pseudoclassical Instantation Pattern with auto instantatiation
     *  - no need for new)
     *
     * @constructor ()
     * @public
     * @param {}              -,
     * @returns {Object}      returns the PicoQ object,
     * @since 0.0.0
     */
    /* eslint-disable-next-line no-global-assign */
    PicoQ = function(selector) {
      // If the parent has a defined 'id'. We starts exploring the DOM
      // from this 'id'. And, the node with this 'id' becomes the root parent.
      const cid = this && this.id ? `#${this.id}` : 'body';

      const obj = Object.create(methods);
      obj._library = {
        name: 'PicoQ',
        version: '1.0.0-alpha.0',
      };

      obj._root = cid !== 'body' ? document.querySelector(cid) : undefined;

      // Selects the first element that matches the selector(s)
      // or selects the entire 'web component':
      obj[0] = selector
        ? document.querySelector(cid).querySelector(selector)
        : document.querySelector(cid);

      obj.id = obj[0] ? obj[0].id : null;

      return obj;
    };


    // Attaches constants to PicoQ that provide name and version of the lib.
    PicoQ.NAME = 'PicoQ';
    PicoQ.VERSION = '1.0.0-alpha.0';


    // -- Private Static Methods -----------------------------------------------

    /**
     * Returns the internal objects for testing purpose.
     * (must not be deleted)
     *
     * @method ()
     * @private
     * @param {}              -,
     * @returns {Object}      returns a list of internal objects,
     * @since 0.0.0
     */
    PicoQ._setTestMode = function() {
      return [];
    };


    // -- Public Static Methods ------------------------------------------------

    /**
     * Returns a reference to this PicoQ object.
     * (must not be deleted)
     *
     * Nota:
     * Running PicoQ in noConflict mode, returns the PicoQ variable to
     * its previous owner.
     *
     * @method ()
     * @public
     * @param {}              -,
     * @returns {Object}      returns the PicoQ object,
     * @since 0.0.0
     */
    PicoQ.noConflict = function() {
      /* eslint-disable-next-line no-param-reassign */
      root.PicoQ = previousPicoQ;
      return this;
    };


    // -- Public Methods -------------------------------------------------------

    methods = {

      /**
       * Returns the library name and version.
       * (must not be deleted)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the library name and version,
       * @since 0.0.0
       */
      whoami() {
        return this._library;
      },

      /**
       * Select a child element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the selector,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      select(sel) {
        if (typeof sel === 'string' && this[0]) {
          const child = this[0].querySelector(sel);
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
       * @since 0.0.0
       */
      selectChild(n) {
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
       * @since 0.0.0
       */
      parent() {
        if (this._root) {
          // As a root parent is defined, we stop at it.
          if (this[0] !== this._root) {
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
       * @since 0.0.0
       */
      firstParent() {
        if (this._root) {
          this[0] = this._root;
        }
        return this;
      },

      /**
       * Returns the NodeList of the matching children.
       *
       * @method (arg1)
       * @public
       * @param {String}      the selector,
       * @returns {Array}     returns the NodeList,
       * @since 0.0.0
       */
      find(sel) {
        return this[0].querySelectorAll(sel);
      },

      /**
       * Returns the tag name of the selected element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {String}    returns the tag name,
       * @since 0.0.0
       */
      tag() {
        if (this[0]) {
          return this[0].tagName;
        }
        return null;
      },

      /**
       * Gets/Sets the HTML contents of the element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the html contents to add,
       * @returns {String}    returns the node DOMString or this,
       * @since 0.0.0
       */
      html(xmlString) {
        if (xmlString) {
          this[0].innerHTML = xmlString;
          return this;
        }
        return this[0] ? this[0].innerHTML : '';
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
      empty() {
        while (this[0].firstChild) {
          this[0].removeChild(this[0].firstChild);
        }
        return this;
      },

      /**
       * Appends and selects a node, defined by an HTML tag.
       *
       * @method (arg1)
       * @public
       * @param {String}      HTML tage name,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      append(tagName) {
        const element = document.createElement(tagName);
        this[0] = this[0].appendChild(element);
        return this;
      },

      /**
       * Appends a text node child to the selected node.
       *
       * @method (arg1)
       * @public
       * @param {String}      the text to apply,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      appendTextChild(text) {
        this[0].appendChild(document.createTextNode(text));
        return this;
      },

      /**
       * Appends and selects a node, defined by an HTML tag, before the selected node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      HTML tag name,
       * @param {String}      the selector,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      appendBefore(tagName, node) {
        const newChild = document.createElement(tagName)
            , child = this[0].querySelector(node)
            ;

        this[0].insertBefore(newChild, child);
        this[0] = newChild;
        return this;
      },

      /**
       * Appends and selects a node, defined by an HTML tag, after the selected node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      HTML tag name,
       * @param {String}      the selector,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      appendAfter(tagName, node) {
        const newChild = document.createElement(tagName)
            , child = this[0].querySelector(node).nextElementSibling
            ;

        this[0].insertBefore(newChild, child);
        this[0] = newChild;
        return this;
      },

      /**
       * Replaces the current node by a new node defined by an HTML tag.
       *
       * @method (arg1)
       * @public
       * @param {String}      HTML tage name,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      replace(tagName) {
        const element = document.createElement(tagName);
        this[0].parentNode.replaceChild(element, this[0]);
        this[0] = element;
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
      appendHTML(xmlString) {
        if (typeof xmlString === 'string') {
          this[0].insertAdjacentHTML('beforeend', xmlString);
        }
        return this;
      },

      /**
       * Appends an HTML string before the first child of the current node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      prepend(xmlString) {
        if (typeof xmlString === 'string') {
          this[0].insertAdjacentHTML('afterbegin', xmlString);
        }
        return this;
      },

      /**
       * Appends an HTML string after the current node.
       *
       * Nota: this method adds a node after the current node only if it is
       * a child node of this component. 'after' is forbidden on the root node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      after(xmlString) {
        if (typeof xmlString === 'string'
          && (!this._root || this[0].id !== this._root.id)) {
          this[0].insertAdjacentHTML('afterend', xmlString);
        }
        return this;
      },

      /**
       * Appends an HTML string before the current node.
       *
       * Nota: this method adds a node before the current node only if it is
       * a child node of this component. 'before' is forbidden on the root node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      before(xmlString) {
        if (typeof xmlString === 'string'
          && (!this._root || this[0].id !== this._root.id)) {
          this[0].insertAdjacentHTML('beforebegin', xmlString);
        }
        return this;
      },

      /**
       * Replaces the current node with the given DOMString.
       *
       * Nota: this method replaces the current node only if it is
       * a child node of this component. 'replaceWith' is forbidden on the root node.
       *
       * @method (arg1)
       * @public
       * @param {String}      an HTML string,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      replaceWith(xmlString) {
        const oldChild = this[0]
            , parento   = oldChild.parentNode
            // , index    =  Array.prototype.indexOf.call(parent.children, oldChild)
            , wrapper  = document.createElement('div')
            ;

        if (typeof xmlString === 'string'
          && (!this._root || this[0].id !== this._root.id)) {
          // Replace the old child by new one:
          wrapper.innerHTML = xmlString;
          const newChild = wrapper.firstChild;
          parento.replaceChild(newChild, oldChild);
          this[0] = newChild;
        }
        return this;
      },

      /**
       * Gets/Sets the text contents of the element,
       *
       * @method (arg1)
       * @public
       * @param {String}      the text contents to add,
       * @returns {String}    returns the text contents or this;,
       * @since 0.0.0
       */
      text(texte) {
        if (texte !== undefined) {
          this[0].textContent = texte;
          return this;
        }
        return this[0].textContent;
      },

      /**
       * Clones the selected element.
       *
       * @method (arg1)
       * @public
       * @param {Boolean}     true clone with children, false without,
       * @returns {Object}    returns the cloned element,
       * @since 0.0.0
       */
      clone(deep) {
        if (deep === true || deep === false) {
          return this[0].cloneNode(deep);
        }
        return this[0].cloneNode(true);
      },

      /**
       * Returns the firstChild.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the firstChild,
       * @since 0.0.0
       */
      firstChild() {
        return this[0].firstElementChild;
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
      insertChildBefore(newChild, child) {
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
      removeChild(child) {
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
      replaceChild(newChild, child) {
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
      children() {
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
      childIndex() {
        let child = this[0]
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
      getRect() {
        return this[0] ? this[0].getBoundingClientRect() : null;
      },

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
      css(styleAttr, value) {
        const arr = typeof styleAttr === 'string' ? styleAttr.split('-') : [];
        let attr = '';

        // Convert style attribute name with '-' (ex.: 'font-size' to 'fontSize'):
        for (let i = 0; i < arr.length; i++) {
          if (i === 0) {
            attr += arr[i];
          } else {
            attr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
          }
        }

        if (!value) {
          // Get attribute:
          return this[0].style[attr];
        }

        // Set attribute:
        this[0].style[attr] = value;
        return this;
      },

      /**
       * Returns the DOMTokenList collection of the class attributes of the element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the DOMTokenList of the element,
       * @since 0.0.0
       */
      getClassList() {
        return this[0].classList;
      },

      /**
       * Adds a class name to the element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name to add,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      addClass(className) {
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
       * @param {Array}       the list of classes to add,
       * @returns {Object}    returns this,
       * @since 0.0.8
       */
      addClasses(classes) {
        if (Array.isArray(classes)) {
          for (let i = 0; i < classes.length; i++) {
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
       * @param {String}      the class name to remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      removeClass(className) {
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
       * @param {Array}       the list of classes to remove,
       * @returns {Object}    returns this,
       * @since 0.0.8
       */
      removeClasses(classes) {
        if (Array.isArray(classes)) {
          for (let i = 0; i < classes.length; i++) {
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
       * @param {String}      the class name to add/remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      toggleClass(className) {
        this[0].classList.toggle(className);
        return this;
      },

      /**
       * Checks if the element has the passed-in class.
       *
       * @method (arg1)
       * @public
       * @param {String}      the class name,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.8
       */
      hasClass(className) {
        const list = this[0].classList.value.split(' ');

        if (Object.prototype.toString.call(className) === '[object String]' && list.indexOf(className) !== -1) {
          return true;
        }
        return false;
      },

      /**
       * Sets or Gets the specified attribute.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the attribute name,
       * @param {String}      the attribute value,
       * @returns {String}    returns the attribute value or this,
       * @since 0.0.0
       */
      attr(attribute, value) {
        if (value) {
          this[0].setAttribute(attribute, value);
          return this;
        }
        return this[0].getAttribute(attribute);
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
      removeAttr(attribute) {
        if (attribute) {
          this[0].removeAttribute(attribute);
        }
        return this;
      },

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
      animate(...args) {
        Anim.animate(this, ...args);
        return this;
      },

      /**
       * Attachs an event listener to the current node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the DOM event string,
       * @param {Function}    the listner function,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      on(event, listener) {
        this[0].addEventListener(event, listener);
        return this;
      },

      /**
       * Removes an event listener from the current node.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the DOM event string,
       * @param {Function}    the listner function,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      off(event, listener) {
        this[0].removeEventListener(event, listener);
        return this;
      },

      /**
       * Fires the event associated to the selected node.
       *
       * @method (arg1)
       * @public
       * @param {String}      the event name,
       * @returns {Boolean}   returns false if preventDefault was activated
       * @since 0.0.0         otherwise true,
       */
      trigger(event) {
        return this[0].dispatchEvent(new Event(event));
      },

      /**
       * Fires the event associated to the selected node.
       *
       * @method (arg1)
       * @public
       * @param {String}      the event name,
       * @returns {Boolean}   returns false if preventDefault was activated
       * @since 0.0.0         otherwise true,
       */
      fire(event) {
        return this.trigger(event);
      },
    };


    // END OF IIFE
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

  /** **************************************************************************
   *
   * Provides the function 'extend' that is used to fill the object tree with
   * the public static or object methods when the Javascript VM browses the
   * library from the top to the bottom.
   *
   * extend.js is just a literal object that contains a set of functions.
   * It can't be instantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . extend                      extends the passed-in object with new methods,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* - */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Public function ------------------------------------------------------

    /**
     * Extends the passed-in object with new methods.
     *
     * Nota: this function mutates object.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the object to extend,
     * @param {Object}        an object containing a set of methods,
     * @returns {}            -,
     * @since 0.0.0
     */
    extend = function(object, methods) {
      const keys = Object.keys(methods);

      for (let i = 0; i < keys.length; i++) {
        /* eslint-disable-next-line no-param-reassign */
        object[keys[i]] = methods[keys[i]];
      }
    };

    // END OF IIFE
  }());
  /* - */

  /** **************************************************************************
   *
   * A ...
   *
   * xxx.js is just a literal object that contains a set of functions.
   * It can't be instantiated.
   *
   * Private Functions:
   *  . _getString                  returns a string,
   *  . _getArray                   returns an array,
   *
   *
   * Public Static Methods:
   *  . getString                   returns a string,
   *  . getArray                    returns an array,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path
    const Root = PIQ.Anim.Public;


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Defines a few utilities to test the variable types.
     */
    const _ = {
      isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
      },

      isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
      },

      isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
      },

      isLiteralObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
      },
    };

    /**
     * Defines the default easing method.
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Number}        the current lapse time,
     * @param {Number}        the initial CSS property value,
     * @param {Number}        the difference between the final and the initial value,
     * @param {Number}        the animation duration,
     * @returns {Number}      returns the value of the CSS property at the current
     * @since 0.0.0           lapse time,
     */
    /* eslint-disable no-mixed-operators */
    function _swing(t, b, c, d) {
      return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;
    } /* eslint-enable no-mixed-operators */

    /**
     * Extracts the optional arguments of 'animate'.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {?}             duration, easing or callback,
     * @param {?}             easing or callback,
     * @param {Object}        the function to call at completion,
     * @returns {Object}      returns an object with the properties duration,
     *                        easing, and callback,
     * @since 0.0.0
     */
    function _extractArgs(...args) {
      const op1 = args[0]
          , op2 = args[1]
          , op3 = args[2]
          ;

      let nargs
        , duration
        , easing
        , callback
        ;

      // How many optional arguments?
      if (!op1 && !op2 && !op3) {
        nargs = 0;
      } else if (op1 && !op2 && !op2) {
        nargs = 1;
      } else if (op1 && op2 && !op3) {
        nargs = 2;
      } else {
        nargs = 3;
      }

      switch (nargs) {
        case 0:
          break;

        case 1:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          } else if (_.isString(op1)) {
            easing = op1;
          } else if (_.isFunction(op1)) {
            callback = op1;
          }
          break;

        case 2:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
            if (_.isString(op2)) {
              easing = op2;
            } else if (_.isFunction(op2)) {
              callback = op2;
            }
          } else if (_.isString(op1)) {
            easing = op1;
            if (_.isFunction(op2)) {
              callback = op2;
            }
          }
          break;

        case 3:
          if (_.isNumber(op1) || op1 === 'fast' || op1 === 'slow') {
            duration = op1;
          }
          if (_.isString(op2)) {
            easing = op2;
          }
          if (_.isFunction(op3)) {
            callback = op3;
          }
          break;

        default:
          break;
      }

      return {
        duration,
        easing,
        callback,
      };
    }

    /**
     * Normalizes the CSS properties.
     * (replace '-' between composite name by camelcase style).
     * Ex: font-size -> fontSize
     *
     * @function (arg1)
     * @private
     * @param {String}        the CSS property name,
     * @returns {String}      the normalized CSS property name,
     * @since 0.0.0
     */
    function _normalizeCssPropertyName(name) {
      const arr = _.isString(name) ? name.split('-') : []
          ;

      // Convert name with '-' (ex.: 'font-size' to 'fontSize'):
      let normalized = '';
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          normalized += arr[i];
        } else {
          normalized += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
      }
      return normalized;
    }

    /**
     * Retrieves the CSS property values for the given node.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the given node,
     * @param {Object}        the CSS properties to animate,
     * @returns {Object}      returns an object with the properties initial,
     * @since 0.0.0           change, suffix, per animated property,
     */
    function _getProps(el, properties) {
      const keys  = Object.keys(properties)
          , style = window.getComputedStyle(el)
          , props = {}
          , names = []
          ;

      let name
        , cssValue
        , cssParent
        , suffix
        ;

      // Parse the properties:
      for (let i = 0; i < keys.length; i++) {
        // Normalize the name of the property:
        name = _normalizeCssPropertyName(keys[i]);
        // Check it is a valid CSS property:
        cssValue = style.getPropertyValue(name);
        if (cssValue) {
          names.push(name);
          cssValue = parseFloat(cssValue, 10);
          suffix = properties[keys[i]].replace(/[0-9.]/g, '');
          // Absolute or relative?
          if (suffix === '%') {
            // Relative, convert pixel value returned by 'getComputedStyle' in %:
            cssParent = parseFloat(
              window.getComputedStyle(el.parentNode).getPropertyValue(name),
            );
            cssValue = (cssValue / cssParent) * 100;
          }
          props[name] = {
            initial: cssValue,
            change: parseFloat(properties[keys[i]]) - cssValue,
            suffix,
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
     * @param {Object}        the given node,
     * @param {Object}        the CSS properties to update,
     * @param {Function}      the easing method,
     * @param {Number}        the animation duration,
     * @param {Number}        the animation step,
     * @param {Function}      the function to call at the completion,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _run(el, properties, easing, duration, delay, callback) {
      const props = _getProps(el, properties)
          , elem = el
          ;

      let lapseOfTime = 0
        , value
        ;

      const timer = setInterval(() => {
        // easing:
        for (let i = 0; i < props.name.length; i++) {
          value = easing(
            lapseOfTime,
            props[props.name[i]].initial,
            props[props.name[i]].change,
            duration,
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


    // -- Public Static Methods ------------------------------------------------

    extend(Root, {

      /**
       * Performs a custom animation on a set of CSS properties.
       *
       * @method (properties [, duration ] [, easing ] [, complete ])
       * @public
       * @param {Object}      An object of CSS properties,
       * @param {Number}      define how long the animation run,
       * @param {Easing}      the easing animation method,
       * @param {Function}    the function to call at completion,
       * @returns {Object}    return this,
       * @since 0.0.0
       */
      animate(node, properties, ...args) {
        const DTIME = 400
            , FAST  = 200
            , SLOW  = 600
            , INC   = 10
            , delay = INC
            ;


        // Is the argument properties an object?
        if (!_.isLiteralObject(properties)) {
          return this;
        }

        // Extract the optional arguments:
        const argu = _extractArgs(...args);

        // Set the duration:
        const duration = _.isNumber(argu.duration) && argu.duration > 0
          ? argu.duration
          : (function(arg) {
            if (arg === 'fast') return FAST;
            if (arg === 'slow') return SLOW;
            return DTIME;
          }(argu.duration));

        // Set the easing (swing only for the time being):
        const easing = (window.Easing && window.Easing[argu.easing])
          ? window.Easing[argu.easing]
          : _swing;

        // Set the callback:
        const callback = argu.callback ? argu.callback : null;

        // Run the animation:
        _run(node[0], properties, easing, duration, delay, callback);

        // Test Mode:
        if (PicoQ.VDOM) {
          node.probe = {
            duration,
            easing: (window.Easing && window.Easing[args.easing]) ? args.easing : 'swing',
            callback,
          };
        }

        return this;
      },
    });


    // END OF IIFE
  }());
  /* eslint-enable no-underscore-dangle */

  // Returns the library name:
  return PicoQ;
}));

// -- Export
export default $__ES6GLOB.PicoQ;
