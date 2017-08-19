/* global describe */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1 */

'use strict';

// -- Node modules
const JSDOM          = require('jsdom').JSDOM
    , XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
    ;

// -- Local modules
const PicoQ       = require('../index.js')
    , fnpicoq     = require('./picoq.js')
    , fnoverslash = require('./overslash.js')
    , fnutilities = require('./utilities.js')
    , fncore      = require('./core.js')
    , fndom       = require('./dom.js')
    , fncss       = require('./css.js')
    , fnclass     = require('./class.js')
    , fnattr      = require('./attr.js')
    , fnevents    = require('./events.js')
    , fnanimate   = require('./animate.js')
    , fnajax      = require('./ajax.js')
    , fnajax2     = require('./ajax2.js')
    ;


// -- Local constants
// Create a Virtual DOM:
const HTML = `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <div id="app1"></div>
      <div id="app2"><h1>Hi!</h1></div>
      <div id="app3"></div>
      <div id="app4"><h1>Hi!</h1></div>
      <div id="app5"><h1>Hi!</h1></div>
      <div id="app6"><h1>Hi!</h1></div>
      <div id="app7"><p>First Child></p><p class="two">Second Child</p><p>Third Child</p></div>
      <div id="app8"><h1>Hi!</h1></div>
      <div id="app9"><h1>Hi!</h1></div>
      <div id="app10"></div>
      <div id="app20"></div>
      <div id="app21" class="aaa"></div>
      <div id="app22"></div>
      <div id="app23" class="bbb"></div>
      <div id="app24"></div>
      <div id="app30"></div>
      <div id="app31"></div>
      <div id="app40"></div>
      <div style="position: relative">
        <div id="app50" style="position: absolute; top: 0"></div>
        <div id="app51" style="position: absolute; top: 0"></div>
        <div id="app52" style="position: absolute; top: 0"></div>
        <div id="app53" style="position: absolute; top: 10px"></div>
      </div>
      <div id="app60"></div>
    </body>
  </html>
`;
const dom = new JSDOM(HTML);

// -- Local variables


// -- Main

// Attach node XMLHttpRequest to JSDOM:
dom.window.XMLHttpRequest = XMLHttpRequest;
// Set Virtual DOM:
PicoQ.VDOM = dom;

describe('PicoQ', () => {
  fnpicoq();
  fnoverslash();
  fnutilities();
  fncore();
  fndom();
  fncss();
  fnclass();
  fnattr();
  fnevents();
  fnanimate();
  fnajax();
  fnajax2();
});
