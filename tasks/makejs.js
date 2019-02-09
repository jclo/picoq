/* eslint  one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { src, dest, series } = require('gulp')
    , del      = require('del')
    , concat   = require('gulp-concat')
    , footer   = require('gulp-footer')
    , replace  = require('gulp-replace')
    , through2 = require('through2')
    ;


// -- Local modules
const config = require('./config')
   ;


// -- Local constants
const destination  = config.libdir
    , source       = config.src
    , lib          = config.libname
    , name         = lib.replace(/\s+/g, '').toLowerCase()
    , { parent }   = config
    , { noparent } = config
    , list         = Object.keys(source)
    ;


// -- Local variables

// -- Private Functions --------------------------------------------------------

// Simple callback stream used to synchronize stuff
// Source: http://unobfuscated.blogspot.co.at/2014/01/executing-asynchronous-gulp-tasks-in.html
const synchro = function(done) {
  return through2.obj(
    (data, enc, cb) => {
      cb();
    },
    (cb) => {
      cb();
      done();
    },
  );
};


// -- Gulp Private Tasks

// Removes the previous version.
function clean(done) {
  del.sync(destination);
  done();
}

// Creates the indented content.
function docore(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach((item) => {
    const core = source[item].slice(1, -1);
    src(core)
      // remove the extra 'use strict':
      .pipe(replace(/\n'use strict';\n/, ''))
      // indent the first line with 2 spaces:
      .pipe(replace(/^/g, '  '))
      // indent each other lines with 2 spaces:
      .pipe(replace(/\n/g, '\n  '))
      // remove the indent added to the blanck lines:
      // (we need to add an extra line otherwise the indent isn't removed
      // from the last line!)
      .pipe(footer('\n'))
      .pipe(replace(/\s\s\n/g, '\n'))
      .pipe(concat(`core-${item}.js`))
      .pipe(dest(destination))
      .pipe(synchro(incDoneCounter))
    ;
  });
}

// Creates the library without 'this'.
function dolibnoparent(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach((item) => {
    const head = source[item][0]
        , foot = source[item][source[item].length - 1]
        ;

    src([head, `${destination}/core-${item}.js`, foot])
      .pipe(replace('{{lib:name}}', lib))
      .pipe(concat(`${name}-${item}${noparent}.js`))
      .pipe(dest(destination))
      .pipe(synchro(incDoneCounter))
    ;
  });
}

// Creates the library.
/* eslint-disable arrow-body-style */
function dolib(done) {
  list.forEach((item) => {
    return src(`${destination}/${name}-${item}${noparent}.js`)
      .pipe(replace('{{lib:parent}}', parent))
      .pipe(concat(`${name}-${item}.js`))
      .pipe(dest(destination))
    ;
  });
  done();
}
/* eslint-enable arrow-body-style */

// Removes the temp file(s).
function delcore(done) {
  del.sync(`${destination}/core-*.js`);
  done();
}


// -- Gulp Public Task(s)
module.exports = series(clean, docore, dolibnoparent, dolib, delcore);
