// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules
const { JSDOM } = require('jsdom')
    // , fetch     = require('node-fetch')
    ;


// -- Local Modules
const testlib = require('./int/lib')
    // , pack    = require('../package.json')
    , fnfetch   = require('./int/fetch')
    , fnselect  = require('./int/select')
    , fndom     = require('./int/dom')
    , fndiff    = require('./int/diff')
    , fntext    = require('./int/text')
    , fndom2    = require('./int/dom2')
    , fncss     = require('./int/css')
    , fnclass   = require('./int/class')
    , fnattr    = require('./int/attr')
    , fnanimate = require('./int/animate')
    , fnevents  = require('./int/events')
    ;


// -- Local Constants
// const libname = 'PicoQ';
const url = ' http://127.0.0.1:8080'
    ;


// -- Local Variables


// -- Main

// Create a Virtual DOM:
const HTML2 = `
<!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
    <div id="app100"></div>

    <div id="app200" class="Parent"><p class="FirstChild"></p><p class="SecondChild"></p></div>
    <div id="app201"><div><p class="aaa">1</p><p class="aaa">2</p><p class="aaa">3</p></div></div>

    <div id="app300"></div>
    <div id="app301"><h1>Hi!</h1></div>
    <div id="app302"></div>
    <div id="app310"><h1>Hi!</h1></div>
    <div id="app320"></div>
    <div id="app330"></div>
    <div id="app340"><p class="first">unique</p></div>
    <div id="app350"><p class="first">unique</p></div>
    <div id="app360"><p class="first">unique</p></div>
    <div id="app370"><p class="first">unique</p></div>
    <div id="app380"><p class="first">unique</p></div>
    <div id="app390"><div class="after"></div></div>
    <div id="app391"><div id="app391a"></div></div>
    <div id="app3A0"><div class="before"></div></div>
    <div id="app3A1"><div id="app3A1a"></div></div>
    <div id="app3B0"><p class="tobereplaced">unique</p></div>
    <div id="app3B1"><div id="app3B1a">unique</div></div>

    <div id="app400"></div>
    <div id="app401"><p>a</p><p>b</p><p>c</p></div>
    <div id="app402"></div>
    <div id="app403"><h2>My Todos</h2><ul><li>Swim</li><li>Climb</li><li>Jump</li><li>Play</li><li>Take a nap...</li></ul></div>
    <div id="app404"><h2>My Todos</h2><ul></ul></div>
    <div id="app405"><h2>My Todos</h2><ul></ul></div>

    <div id="app500"></div>

    <div id="app600"><div class="child"><div class="grandchild"></div></div></div>
    <div id="app610"><div class="child1"></div><div class="child2"></div></div>
    <div id="app620"><div class="child1"></div><div class="child2"></div></div>
    <div id="app630"><div class="child"></div></div>
    <div id="app640"><div class="child"></div></div>
    <div id="app650"><div class="child1"></div><div class="child2"></div></div>
    <div><div id="app660"></div></div>
    <div><div></div><div></div><div id="app661"></div></div>
    <div id="app670"></div>

    <div id="app700"></div>

    <div id="app800"></div>
    <div id="app801" class="aaa"></div>
    <div id="app810"></div>
    <div id="app820"></div>
    <div id="app830" class="bbb"></div>
    <div id="app840" class="abc def ghi"></div>
    <div id="app850"></div>
    <div id="app860" class="aaa bbb ccc"></div>

    <div id="app900"></div>
    <div id="app910"></div>

    <div style="position: relative">
      <div id="app1000" style="position: absolute; top: 0"></div>
      <div id="app1010" style="position: absolute; top: 0"></div>
      <div id="app1020" style="position: absolute; top: 0"></div>
      <div id="app1030" style="position: absolute; top: 10px"></div>
    </div>

    <div id="app1100"></div>
    </body>
  </html>
`;

const dom = new JSDOM(HTML2);
global.window = dom.window;
global.root = dom.window;
global.document = dom.window.document;
global.DOMParser = dom.window.DOMParser;
global.navigator = { userAgent: 'node.js' };
// global.fetch = fetch;
global.root = {};

// Nota:
// If you want that 'display-coverage' shows the coverage files by files,
// you should set 'PicoQ' and 'testlib' like this:
//  . const PicoQ = require('../src/<file>').default;
//  . testlib(PicoQ, '{{lib:name}}', '{{lib:version}}', 'without new');
//
// But, if you want that 'display-coverage' shows the coverage in one file,
// you should set 'PicoQ' and 'testlib' like this:
//  . const PicoQ = require('../index');
//  . testlib(PicoQ, libname, pack.version, 'without new');

const PicoQ = require('../src/picoq').default;
// const PicoQ = require('../index');

describe('Test PicoQ:', () => {
  testlib(PicoQ, '{{lib:name}}', '{{lib:version}}', 'without new');
  // testlib(PicoQ, libname, pack.version, 'without new');

  fnfetch(PicoQ, url);
  fnselect(PicoQ, 'app200');
  fndom(PicoQ, 'app300');
  fndiff(PicoQ, 'app400');
  fntext(PicoQ, 'app500');
  fndom2(PicoQ, 'app600');
  fncss(PicoQ, 'app700');
  fnclass(PicoQ, 'app800');
  fnattr(PicoQ, 'app900');
  fnanimate(PicoQ, 'app1000');
  fnevents(PicoQ, 'app1100');
});

// - oOo --
