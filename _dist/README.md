# PicoQ

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Github workflow][ci-image]][ci-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![License][license-image]](LICENSE.md)


## A tiny Javascript library to interact with the DOM

`jQuery` has a nice API easy to remember compared to the Javascript API. `jQuery` offers plenty of possibilities to interact with the DOM but it may be overkill if you just need to use a few percent of this API.

`PicoQ` has been created with the objective to offer a library that implements the most used Javascript functions to interact with the DOM with an API similar to `jQuery`.

`PicoQ` has definitely not the ambition to compete with `jQuery`. It aims to be an option when you just need to use few percent of the `jQuery` API.

Besides, `PicoQ` is implemented in a module pattern exporting only the name `PicoQ` outside the module. It could easily be included in your own library without polluting your library space. You can then ship your library without any external dependencies.


## API

```
Method                              | Description
```
```
PicoQ(selector)                     | Returns the selected element or null,
PicoQ(sel).select(sel2)             | Selects the node and returns this,
PicoQ(sel).selectChild(n)           | Selects the nth child,
PicoQ(sel).parent()                 | Selects the parent node,
PicoQ(sel).firstParent()            | Selects the root parent node if defined,

PicoQ(sel).find(sel2)               | Returns the the matching children,
PicoQ(sel).tag()                    | Returns the tag name of the selected element,

PicoQ(sel).html()                   | Returns the child nodes,
PicoQ(sel).html('xml')              | Inserts the DOMString as the child node and returns this,
PicoQ(sel).empty()                  | Removes all the child nodes and returns this,

PicoQ(sel).append(tagname)          | Inserts a new element with the specified tag name and returns this,
PicoQ(sel).appendTextChild(text)    | Inserts a new text node and returns this,
PicoQ(sel).appendBefore(tag, node)  | Inserts a new element before the passed-in node,
PicoQ(sel).appendAfter(tag, node)   | Inserts a new element after the passed-in node,
PicoQ(sel).replace(tagname)         | Replaces the selected node with a new element,

PicoQ(sel).appendHTML(xml)          | Inserts a new element with the specified XMLString and returns this,
PicoQ(sel).prepend('xml')           | Inserts the DOMString before the first child and returns this,
PicoQ(sel).after('xml')             | Inserts the DOMString after the current node and returns this,
PicoQ(sel).before('xml')            | Inserts the DOMString before the current node and returns this,
PicoQ(sel).replaceWith('xml')       | Replaces the current node by the DOMString and returns this,
PicoQ(sel).text()                   | Returns the text contents of the element,

PicoQ(sel).text('text')             | Sets/Updates the text contents and returns this,

PicoQ(sel).clone(deep)              | Clones the selected node if deep is false, clones node and childs if deep is true,
PicoQ(sel).firstChild()             | Returns the first child of the selected node,
PicoQ(s).insertChildBefore(n, c)    | Inserts the child 'n' before the child 'c'  and returns this,
PicoQ(sel).removeChild(child)       | Removes the child 'child'  and returns this,
PicoQ(sel.replaceChild(n, c)        | Replaces the child 'c' by the child 'n'  and returns this,
PicoQ(sel).children()               | Returns a DOM object with all the node children,
PicoQ(sel).childIndex()             | Returns the child index (0 for the first child),
PicoQ(sel).getRect()                | Returns the position and size of the node,

PicoQ(sel).css('attr')              | Returns the value of the CSS attribute,
PicoQ(sel).css('attr', value)       | Sets the value of the CSS attribute and returns this,

PicoQ(sel).getClassList()           | Returns the class list as DOMTokenList object,
PicoQ(sel).addClass('class')        | Adds that class name and returns this,
PicoQ(sel).addClasses([...])        | Adds an array of classes and returns this,
PicoQ(sel).removeClass('class')     | Removes that class name and returns this,
PicoQ(sel).removeClasses([...])     | Removes an array of classes and returns this,
PicoQ(sel).toggleClass('class')     | Adds or removes that class name and returns this,
PicoQ(sel).hasClass('class')        | Returns true if the node has the class 'class' or false if not,

PicoQ(sel).attr('attr')             | Returns the value of the attribute,
PicoQ(sel).attr('attr', value)      | Sets the value of the attribute and returns this,
PicoQ(sel).removeAttr('attr')       | Removes the attribute and returns this,

PicoQ(sel).animate({prop}, op)      | Changes dynamically the CSS attributes,

PicoQ(sel).on(event, listener)      | Adds an event listener and returns this,
PicoQ(sel).off(event, listener)     | Removes an event listener and returns this,
PicoQ(sel).trigger(event)           | Fires an event and returns true or false,
PicoQ(sel).fire(event)              | Aliases the 'trigger' method,

PicoQ.fetch()                       | Performs an asynchronous HTTP request,
PicoQ.get()                         | Performs an asynchronous HTTP GET request,
PicoQ.getJSON()                     | Performs an asynchronous HTTP GET request on a JSON file,
PicoQ.post()                        | Performs an asynchronous HTTP POST request,
PicoQ(sel).load()                   | Loads data and place the returned HTML into the matched element,
```

## Example

```html
<html lang="en-US">
  <body>
    <div id="app">
      <button type="button" class="button1">Click Me!</button>
    </div>
    <div id="app2"></div>

    <script type="module">
      import $ from './lib/picoq.mjs';

      // Listen for a click event:
      $('#app').on('click', () => {
        $('#app2').appendHTML('<p>Hello!</p>');
      });
    </script>
  </body>
</html>
```


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/picoq.svg?style=flat-square
[release-image]: https://img.shields.io/github/release/jclo/picoq.svg?include_prereleases&style=flat-square
[commit-image]: https://img.shields.io/github/last-commit/jclo/picoq.svg?style=flat-square
[ci-image]: https://github.com/jclo/picoq/actions/workflows/ci.yml/badge.svg
[coveralls-image]: https://img.shields.io/coveralls/jclo/picoq/master.svg?style=flat-square
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/picoq.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/picoq.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/picoq
[release-url]: https://github.com/jclo/picoq/tags
[commit-url]: https://github.com/jclo/picoq/commits/master
[ci-url]: https://github.com/jclo/picoq/actions/workflows/ci.yml
[coveralls-url]: https://coveralls.io/github/jclo/picoq?branch=master
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/picoq
[license-url]: http://opensource.org/licenses/MIT
