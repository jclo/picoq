// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { JSDOM }          = require('jsdom')
    , { XMLHttpRequest } = require('xmlhttprequest')
    ;


// -- Local modules
const PicoQ       = require('../index.js')
    , { _ }       = PicoQ
    , fnpicoq     = require('./lib/picoq.js')
    , fnextend    = require('./lib/extend.js')
    , fnutilities = require('./lib/utilities.js')
    , fncore      = require('./lib/core.js')
    , fndom       = require('./lib/dom.js')
    , fnselect    = require('./lib/select.js')
    , fncss       = require('./lib/css.js')
    , fnclass     = require('./lib/class.js')
    , fnattr      = require('./lib/attr.js')
    , fnevents    = require('./lib/events.js')
    , fnanimate   = require('./lib/animate.js')
    , fnajax      = require('./lib/ajax.js')
    , fnajax2     = require('./lib/ajax2.js')
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

      <div id="app0A"><div class="child"><div class="grandchild"></div></div></div>
      <div id="app0B1"><div class="firstchild"></div></div>
      <div id="app0B2"><div class="firstchild"></div></div>
      <div id="app0C1"><div></div></div>
      <div id="app0C2"><div></div></div>
      <div id="app0D1"><div class="child"></div></div>
      <div id="app0D2"><div class="child"></div></div>

      <div id="app0E1"></div>
      <div id="app0E2"><h1>Hi!</h1><h2>Hi!</h2><h3>Hi!</h3></div>

      <div><div id="app0F1"></div></div>
      <div><div></div><div></div><div id="app0F2"></div></div>

      <div id="app0G"></div>

      <div id="app10" class="Parent"><p class="FirstChild"></p><p class="SecondChild"></p></div>

      <div id="app20"></div>

      <div id="app30"></div>
      <div id="app31" class="aaa"></div>
      <div id="app32"></div>
      <div id="app33"></div>
      <div id="app34" class="bbb"></div>
      <div id="app35" class="abc def ghi"></div>
      <div id="app36"></div>
      <div id="app37" class="aaa bbb ccc"></div>

      <div id="app40"></div>
      <div id="app41"></div>

      <div id="app50"></div>

      <div style="position: relative">
        <div id="app60" style="position: absolute; top: 0"></div>
        <div id="app61" style="position: absolute; top: 0"></div>
        <div id="app62" style="position: absolute; top: 0"></div>
        <div id="app63" style="position: absolute; top: 10px"></div>
      </div>
      <div id="app70"></div>
    </body>
  </html>
`;
const vdom = new JSDOM(HTML);
global.window = vdom.window;
global.document = vdom.window.document;
global.navigator = { userAgent: 'node.js' };

// -- Local variables


// -- Main
// Attach node XMLHttpRequest to JSDOM:
vdom.window.XMLHttpRequest = XMLHttpRequest;
// Set Virtual DOM:
PicoQ.VDOM = true;

describe('PicoQ', () => {
  fnpicoq(PicoQ);
  fnextend(PicoQ, _);
  fnutilities(PicoQ);
  fncore(PicoQ);
  fndom(PicoQ);
  fnselect(PicoQ);
  fncss(PicoQ);
  fnclass(PicoQ);
  fnattr(PicoQ);
  fnevents(PicoQ, vdom);
  fnanimate(PicoQ);
  fnajax(PicoQ);
  fnajax2(PicoQ);
});
