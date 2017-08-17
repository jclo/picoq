# PicoQ

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->
[![NPM install][npm-install-image]][npm-install-url]


## A tiny Javascript library to interact with the DOM

`jQuery` has a nice API easy to remember compared to the Javascript API. `jQuery` offers plenty of possibilities to interact with the DOM but it may be overkill if you just need to use a few percent of this API.

`PicoQ` has been created with the objective to offer a library that implements the most used Javascript functions to interact with the DOM with an API similar to `jQuery`.

`PicoQ` has definitely not the ambition to compete with `jQuery`. It aims to be an option when you just need to use few percent of the `jQuery` API.

Besides, `PicoQ` is implemented in a module pattern exporting only the name `PicoQ` outside the module. It could easily be included in your own library without polluting your library space. You can then ship your library without any external dependencies.


## API

```
Method                          | Description
```
```
PicoQ(selector)                 | Returns the selected element or null,
PicoQ(sel).html()               | Returns the child nodes,
PicoQ(sel).html('xml')          | Inserts the DOMString as the child node and returns this,
PicoQ(sel).empty()              | Removes all the child nodes and returns this,
PicoQ(sel).append('xml')        | Inserts the DOMString after the last child and returns this,
PicoQ(sel).prepend('xml')       | Inserts the DOMString before the first child and returns this,
PicoQ(sel).after('xml')         | Inserts the DOMString after the current node and returns this,
PicoQ(sel).before('xml')        | Inserts the DOMString before the current node and returns this,
PicoQ(sel).replaceWith('xml')   | Replaces the current node by the DOMString and returns this,
PicoQ(sel).text()               | Returns the text contents of the element,
PicoQ(sel).text('text')         | Sets/Updates the text contents and returns this,
PicoQ(sel).css('attr')          | Returns the value of the CSS attribute,
PicoQ(sel).css('attr', value)   | Sets the value of the CSS attribute and returns this,
PicoQ(sel).getClassList()       | Returns the class list as DOMTokenList object,
PicoQ(sel).addClass('class')    | Adds that class name and returns this,
PicoQ(sel).removeClass('class') | Removes that class name and returns this,
PicoQ(sel).toggleClass('class') | Adds or removes that class name and returns this,
PicoQ(sel).attr('attr')         | Returns the value of the attribute,
PicoQ(sel).attr('attr', value)  | Sets the value of the attribute and returns this,
PicoQ(sel).removeAttr('attr')   | Removes the attribute and returns this,
PicoQ(sel).on(event, listener)  | Adds an event listener and returns this,
PicoQ(sel).off(event, listener) | Removes an event listener and returns this,
PicoQ(sel).trigger(event)       | Fires an event and returns true or false,
PicoQ(sel).animate({prop}, op)  | Changes dynamically the CSS attributes,
PicoQ.ajax()                    | Performs an asynchronous HTTP (Ajax) request,
PicoQ.ajax().done()             | Fires the function on success,
PicoQ.ajax().fail()             | Fires the function on error,
PicoQ.ajax().always()           | Fires the function at completion,
PicoQ.get()                     | Performs an asynchronous HTTP GET request,
PicoQ.getJSON()                 | Performs an asynchronous HTTP GET request on a JSON file,
PicoQ.post()                    | Performs an asynchronous HTTP POST request,
PicoQ(sel).load()               | Loads data and place the returned HTML into the matched element,
```

## Example

```html
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <link rel="">
    <script src="./picoQ.js"></script>
  </head>

  <body>
    <div id="app">
      <button type="button" class="button1">Click Me!</button>
    </div>
    <div id="app2"></div>

    <script>
      window.onload = function() {

        // Assign PicoQ to $:
        var $ = PicoQ;

        // Listen for a click event:
        $('#app').on('click', function() {
          $('#app2').append('<p>Hello!</p>');
        });
      };
    </script>
  </body>
</html>
```

## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/picoq.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/picoq.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/picoq.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/picoq.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/picoq/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/picoq/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/picoq/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/picoq.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/picoq
[npm-install-url]: https://nodei.co/npm/picoq
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/picoq
[travis-url]: https://travis-ci.org/jclo/picoq
[coveralls-url]: https://coveralls.io/github/jclo/picoq?branch=master
[dependencies-url]: https://david-dm.org/jclo/picoq#info=dependencies
[devdependencies-url]: https://david-dm.org/jclo/picoq#info=devDependencies
[license-url]: http://opensource.org/licenses/MIT
