// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules
const { JSDOM } = require('jsdom')
    , fetch     = require('node-fetch')
    ;


// -- Local Modules
const PicoQ     = require('../src/picoq').default
    // PicoQ    = require('../index')
    , pack      = require('../package.json')
    , testlib   = require('./int/lib')

    , fndom     = require('./int/dom.js')
    , fndiff    = require('./int/diff.js')
    , fnselect  = require('./int/select.js')
    , fncss     = require('./int/css.js')
    , fnclass   = require('./int/class.js')
    , fnattr    = require('./int/attr.js')
    , fnevents  = require('./int/events.js')
    , fnanimate = require('./int/animate.js')
    , fnfetch   = require('./int/fetch.js')
    ;


// -- Local Constants
const libname = 'PicoQ';


// -- Local Variables


// -- Main

// Create a Virtual DOM:
const HTML = `
<!DOCTYPE html>
  <html>
    <head>
    </head>
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

    <div id="app0DD1"></div>
    <div id="app0DD2"><p>a</p><p>b</p><p>c</p></div>
    <div id="app0DD3"></div>
    <div id="app0DD4"><h2>My Todos</h2><ul><li>Swim</li><li>Climb</li><li>Jump</li><li>Play</li><li>Take a nap...</li></ul></div>
    <div id="app0DD5"><h2>My Todos</h2><ul></ul></div>

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
    <div id="app80"></div>
    </body>
  </html>
`;

const dom = new JSDOM(HTML);
global.window = dom.window;
global.document = dom.window.document;
global.DOMParser = dom.window.DOMParser;
global.navigator = { userAgent: 'node.js' };
global.fetch = fetch;


describe('Test PicoQ:', () => {
  // Nota:
  // If you choose 'PicoQ = require('../index')', 'display-coverage' will
  // show the coverage of all the library in one file.
  //
  // If you want to display the coverage file by file, you must choose
  // 'PicoQ = require('../src/picoQ').default'. But, in this case,
  // the build isn't done, so you should pass '{{lib:name}}' as libname and
  // '{{lib:version}}' as the library version.
  testlib(PicoQ, '{{lib:name}}', '{{lib:version}}', 'without new');
  // testlib(PicoQ, libname, pack.version, 'without new');

  fndom(PicoQ);
  fndiff(PicoQ);
  fnselect(PicoQ);
  fncss(PicoQ);
  fnclass(PicoQ);
  fnattr(PicoQ);
  fnevents(PicoQ);
  fnanimate(PicoQ);

  fnfetch(PicoQ);
});
