/** ************************************************************************
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
 *  . fetch                       fetches data on the server,
 *  . get                         retrieves a text file from the server,
 *  . getJSON                     retrieves a JSON file from the server,
 *  . post                        sends a request to the server,
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
 *  . load                        retrieves an XMLString and add it into the DOM,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ********************************************************************** */
/* global root */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


// -- Vendor Modules


// -- Local Modules
import Anim from './private/animate';
import F from './private/fetch';


// -- Local Constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousPicoQ = root.PicoQ
    ;


// -- Local Variables
let methods;


// -- Public ---------------------------------------------------------------

/**
 * Returns the PicoQ object.
 * (Prototypal Instantiation Pattern)
 *
 * @constructor (arg1)
 * @public
 * @param {String}          the DOM selector,
 * @returns {Object}        returns the PicoQ object,
 * @since 0.0.0
 */
const PicoQ = function(selector) {
  // If the parent has a defined 'id'. We starts exploring the DOM
  // from this 'id'. And, the node with this 'id' becomes the root parent.
  const cid = this && this.id ? `#${this.id}` : 'body';

  const obj = Object.create(methods);
  obj._library = {
    name: '{{lib:name}}',
    version: '{{lib:version}}',
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
PicoQ.NAME = '{{lib:name}}';
PicoQ.VERSION = '{{lib:version}}';


// -- Private Static Methods -----------------------------------------------

/**
 * Returns the internal objects for testing purpose.
 * (must not be deleted)
 *
 * @method ()
 * @private
 * @param {}                -,
 * @returns {Object}        returns a list of internal objects,
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
 * @param {}                -,
 * @returns {Object}        returns the PicoQ object,
 * @since 0.0.0
 */
PicoQ.noConflict = function() {
  /* eslint-disable-next-line no-param-reassign */
  root.PicoQ = previousPicoQ;
  return this;
};

/**
 * Fetches data on the server.
 *
 * @method (arg1, [arg2], [arg3], [arg4])
 * @public
 * @param {String}        the server url,
 * @param {Object}        the fetch options,
 * @param {String}        the type of file (json or text),
 * @param {String}        the function to call at the completion,
 * @returns {Object}      returns a promise,
 * @since 0.0.0
 */
PicoQ.fetch = function(...args) {
  return F.fetch(...args);
};

/**
 * Retrieves a text file from the server.
 *
 * @method (arg1, [arg2], [arg3], [arg4])
 * @public
 * @param {String}        the server url,
 * @param {Object}        the fetch options,
 * @param {String}        the type of file (json or text),
 * @param {String}        the function to call at the completion,
 * @returns {Object}      returns a promise,
 * @since 0.0.0
 */
PicoQ.get = function(...args) {
  return F.get(...args);
};

/**
 * Retrieves a JSON file from the server.
 *
 * @method (arg1, [arg2], [arg3], [arg4])
 * @public
 * @param {String}          the server url,
 * @param {Object}          the fetch options,
 * @param {String}          the type of file (json or text),
 * @param {String}          the function to call at the completion,
 * @returns {Object}        returns a promise,
 * @since 0.0.0
 */
PicoQ.getJSON = function(...args) {
  return F.getJSON(...args);
};

/**
 * Sends a request to the server.
 *
 * @method (arg1, [arg2], [arg3], [arg4])
 * @public
 * @param {String}          the server url,
 * @param {Object}          the fetch options,
 * @param {String}          the type of answer (json or text),
 * @param {String}          the function to call at the completion,
 * @returns {Object}        returns a promise,
 * @since 0.0.0
 */
PicoQ.post = function(...args) {
  return F.post(...args);
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
   * @param {String}        the selector,
   * @returns {Object}      returns this,
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
   * @param {Number}        the child index,
   * @returns {Object}      returns this,
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
   * @param {}              -,
   * @returns {Object}      returns this,
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
   * @param {}              -,
   * @returns {Object}      returns this,
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
   * @param {String}        the selector,
   * @returns {Array}       returns the NodeList,
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
   * @param {}              -,
   * @returns {String}      returns the tag name,
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
   * @param {String}        the html contents to add,
   * @returns {String}      returns the node DOMString or this,
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
   * @param {}              -,
   * @returns {Object}      returns this,
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
   * @param {String}        HTML tage name,
   * @returns {Object}      returns this,
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
   * @param {String}        the text to apply,
   * @returns {Object}      returns this,
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
   * @param {String}        HTML tag name,
   * @param {String}        the selector,
   * @returns {Object}      returns this,
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
   * @param {String}        HTML tag name,
   * @param {String}        the selector,
   * @returns {Object}      returns this,
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
   * @param {String}        HTML tage name,
   * @returns {Object}      returns this,
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
   * @param {String}        an HTML string,
   * @returns {Object}      returns this,
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
   * @param {String}        an HTML string,
   * @returns {Object}      returns this,
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
   * @param {String}        an HTML string,
   * @returns {Object}      returns this,
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
   * @param {String}        an HTML string,
   * @returns {Object}      returns this,
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
   * @param {String}        an HTML string,
   * @returns {Object}      returns this,
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
   * @param {String}        the text contents to add,
   * @returns {String}      returns the text contents or this;,
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
   * @param {Boolean}       true clone with children, false without,
   * @returns {Object}      returns the cloned element,
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
   * @param {}              -,
   * @returns {Object}      returns the firstChild,
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
   * @param {Object}        the new node element,
   * @param {Object}        the target node element,
   * @returns {Object}      returns this,
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
   * @param {Object}        the child element to remove,
   * @returns {Object}      returns this,
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
   * @param {Object}        the new node element,
   * @param {Object}        the node element to replace,
   * @returns {Object}      returns this,
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
   * @param {}              -,
   * @returns {Object}      returns the children HTMLCollection,
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
   * @param {}              -,
   * @returns {Object}      returns the children position,
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
   * @param {}              -,
   * @returns {Object}      returns the DOMRect object,
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
   * @param {String}        the style attribute,
   * @param {String}        the style attribute value,
   * @returns {String}      returns the style attribute value or this,
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
   * @param {}              -,
   * @returns {Object}      returns the DOMTokenList of the element,
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
   * @param {String}        the class name to add,
   * @returns {Object}      returns this,
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
   * @param {Array}         the list of classes to add,
   * @returns {Object}      returns this,
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
   * @param {String}        the class name to remove,
   * @returns {Object}      returns this,
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
   * @param {Array}         the list of classes to remove,
   * @returns {Object}      returns this,
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
   * @param {String}        the class name to add/remove,
   * @returns {Object}      returns this,
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
   * @param {String}        the class name,
   * @returns {Boolean}     returns true or false,
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
   * @param {String}        the attribute name,
   * @param {String}        the attribute value,
   * @returns {String}      returns the attribute value or this,
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
   * @param {String}        the attribute name,
   * @returns {Object}      returns this,
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
   * @param {Object}        An object of CSS properties,
   * @param {Number}        define how long the animation run,
   * @param {Easing}        the easing animation method,
   * @param {Function}      the function to call at completion,
   * @returns {Object}      returns this,
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
   * @param {String}        the DOM event string,
   * @param {Function}      the listner function,
   * @returns {Object}      returns this,
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
   * @param {String}        the DOM event string,
   * @param {Function}      the listner function,
   * @returns {Object}      returns this,
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
   * @param {String}        the event name,
   * @returns {Boolean}     returns false if preventDefault was activated
   * @since 0.0.0           otherwise true,
   */
  trigger(event) {
    return this[0].dispatchEvent(new Event(event));
  },

  /**
   * Fires the event associated to the selected node.
   *
   * @method (arg1)
   * @public
   * @param {String}        the event name,
   * @returns {Boolean}     returns false if preventDefault was activated
   * @since 0.0.0           otherwise true,
   */
  fire(event) {
    return this.trigger(event);
  },

  /**
   * Retrieves an XMLString from the server and inserts it into the DOM.
   *
   * @method (arg1, arg2, [arg3], [arg4], [arg5])
   * @public
   * @param {Object}        the PicoQ object,
   * @param {String}        the server url,
   * @param {Object}        the fetch options,
   * @param {String}        the type of file (json or text),
   * @param {String}        the function to call at the completion,
   * @returns {Object}      returns a promise,
   * @since 0.0.0
   */
  load(...args) {
    if (!this[0]) return this;
    return F.loadXML(this, ...args);
  },
};


// -- Export
export default PicoQ;

/* eslint-enable one-var, semi-style, no-underscore-dangle */
