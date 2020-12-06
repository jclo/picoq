/** ************************************************************************
 *
 * Updates a DOM node with the passed in 'virtual' node.
 *
 * It updates only the elements that have attributes or contents that
 * differ from the passed-in HTML node.
 *
 * diff is free interpretation of:
 *  - https://gomakethings.com/dom-diffing-with-vanilla-js/
 *
 * diffing.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 *
 * Private Functions:
 *  . _stringToHTML               converts an XML String to an HTML object,
 *  . _getNodeType                returns the tag name,
 *  . _getNodeContent             returns the element content,
 *  . _updateAttributes           updates the target attrs to match the source attrs,
 *  . _diff                       updates the outdated elements of the DOM node,
 *
 *
 * Public Static Methods:
 *  . stringToHTML                converts an XML String to an HTML object,
 *  . diff                        updates the outdated elements of the DOM node,
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
/* global */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


// -- Vendor Modules


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Private Functions ----------------------------------------------------

/**
 * Converts an XML String to an HTML object.
 *
 * @function (arg1)
 * @private
 * @param {XMLString}       the XML string to convert,
 * @returns {Object}        returns the HTML object,
 * @since 0.0.0
 */
function _stringToHTML(str) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body.firstChild;
}

/**
 * Returns the tag name.
 *
 * @function (arg1)
 * @private
 * @param {Object}          the node,
 * @returns {String}        returns the tag name,
 * @since 0.0.0
 */
function _getNodeType(node) {
  if (node.nodeType === 3) return 'text';
  if (node.nodeType === 8) return 'comment';
  return node.tagName.toLowerCase();
}

/**
 * Returns the element content.
 *
 * @function (arg1)
 * @private
 * @param {Object}          the node,
 * @returns {String}        returns the element content,
 * @since 0.0.0
 */
function _getNodeContent(node) {
  if (node.children && node.children.length > 0) return null;
  return node.textContent;
}

/**
 * Updates the target attributes to match the source attributes.
 *
 * @function (arg1, arg2)
 * @private
 * @param {Object}          the reference element,
 * @param {Object}          the DOM element,
 * @returns {}              -,
 * @since 0.0.0
 */
function _updateAttributes(node, elem) {
  const nodeAttrs = node.getAttributeNames();
  const elemAttrs = elem.getAttributeNames();

  // Parse all the source attributes and update the target attributes
  // accordingly.
  for (let i = 0; i < nodeAttrs.length; i++) {
    const nodeAttr = nodeAttrs[i];
    const elemAttr = elem.attributes.getNamedItem(nodeAttr);
    const nodeAttrValue = node.getAttribute(nodeAttr);
    const elemAttrValue = elem.getAttribute(nodeAttr);
    if (!elemAttr || (elemAttrValue !== nodeAttrValue)) {
      // Ok the DOM element hasn't the attribute or its value is
      // outdated, set it:
      // console.log(`set attribute: ${nodeAttr} with the value: ${nodeAttrValue}`);
      elem.setAttribute(nodeAttr, nodeAttrValue);
    }
  }

  // Remove the extra target attributes.
  for (let i = 0; i < elemAttrs.length; i++) {
    if (nodeAttrs.indexOf(elemAttrs[i]) === -1) {
      // console.log(`${elemAttrs[i]} is an extra attribute!`);
      elem.removeAttribute(elemAttrs[i]);
    }
  }
}

/**
 * Updates the outdated elements of the DOM node.
 *
 * @function (arg1, arg2)
 * @private
 * @param {Object}          the reference node,
 * @param {Object}          the DOM node,
 * @returns {}              -,
 * @since 0.0.0
 */
function _diff(source, target) {
  // Get arrays of children nodes
  const sourceNodes = Array.prototype.slice.call(source.children);
  const domNodes = Array.prototype.slice.call(target.children);

  // If there are extra elements in DOM, remove them
  let count = domNodes.length - sourceNodes.length;
  if (count > 0) {
    for (; count > 0; count--) {
      /* eslint-disable-next-line max-len */
      domNodes[domNodes.length - count].parentNode.removeChild(domNodes[domNodes.length - count]);
    }
  }

  // Diff each item in the templateNodes
  sourceNodes.forEach((node, index) => {
    // If the element doesn't exist in the DOM, create it:
    if (!domNodes[index]) {
      target.appendChild(node.cloneNode(true));
      return;
    }

    // If element is not the same type, replace it with the new element:
    if (_getNodeType(node) !== _getNodeType(domNodes[index])) {
      domNodes[index].parentNode.replaceChild(node.cloneNode(true), domNodes[index]);
      return;
    }

    // If the content is different, update it:
    const sourceContent = _getNodeContent(node);
    if (sourceContent && sourceContent !== _getNodeContent(domNodes[index])) {
      domNodes[index].textContent = sourceContent;
    }

    // If the attributes are different update them:
    if (node.hasAttributes() || domNodes[index].hasAttributes()) {
      _updateAttributes(node, domNodes[index]);
    }

    // If the target element should be empty, wipe it
    if (domNodes[index].children.length > 0 && node.children.length < 1) {
      domNodes[index].innerHTML = '';
      return;
    }

    // If element is empty and shouldn't be, build it up.
    // This uses a document fragment to minimize reflows
    if (domNodes[index].children.length < 1 && node.children.length > 0) {
      const fragment = document.createDocumentFragment();
      _diff(node, fragment);
      domNodes[index].appendChild(fragment);
    }

    // If there are existing child elements that need to be modified, diff them
    if (node.children.length > 0) {
      _diff(node, domNodes[index], true);
    }
  });
}


// -- Public Static Methods ------------------------------------------------

const Differ = {

  /**
   * Converts an XML String to an HTML object.
   *
   * @method (arg1)
   * @public
   * @param {XMLString}     the XML string to convert,
   * @returns {Object}      returns the HTML object,
   * @since 0.0.0
   */
  stringToHTML(str) {
    return _stringToHTML(str);
  },

  /**
   * Updates the outdated elements of the DOM node.
   *
   * @method (arg1, arg2)
   * @public
   * @param {Object}        the reference node,
   * @param {Object}        the DOM node,
   * @since 0.0.0
   */
  diff(source, target) {
    return _diff(source, target);
  },
};


// -- Export
export default Differ;

/* eslint-enable one-var, semi-style, no-underscore-dangle */
