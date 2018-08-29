/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , footer      = require('gulp-footer')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    , through2    = require('through2')
    ;

// -- Local modules
const config = require('./config')
    ;

// -- Local constants
const dest         = config.libdir
    , { src }      = config
    , lib          = config.libname
    , name         = lib.replace(/\s+/g, '').toLowerCase()
    , { parent }   = config
    , { noparent } = config
    , list         = Object.keys(src)
    ;

// -- Local variables


// -- Private Functions --------------------------------------------------------

// Simple callback stream used to synchronize stuff
// Source: http://unobfuscated.blogspot.co.at/2014/01/executing-asynchronous-gulp-tasks-in.html
const synchro = function(done) {
  return through2.obj(
    function(data, enc, cb) {
      cb();
    },
    function(cb) {
      cb();
      done();
    },
  );
};


// -- Gulp Tasks

// Remove the previous version:
gulp.task('dellib', function() {
  return del.sync(dest);
});

// Remove the temp file:
gulp.task('delcore', function() {
  return del(`${dest}/core-*.js`);
});

// Creates multiple indented library's contents:
gulp.task('docore', function(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach(function(item) {
    const core = src[item].slice(1, -1);
    gulp.src(core)
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
      .pipe(gulp.dest(dest))
      .pipe(synchro(incDoneCounter));
  });
});

// Creates multiple libraries without 'this':
gulp.task('dolibnoparent', function(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach(function(item) {
    const head = src[item][0]
        , foot = src[item][src[item].length - 1]
        ;

    gulp.src([head, `${dest}/core-${item}.js`, foot])
      .pipe(replace('{{lib:name}}', lib))
      .pipe(concat(`${name}-${item}${noparent}.js`))
      .pipe(gulp.dest(dest))
      .pipe(synchro(incDoneCounter));
  });
});

// Creates multiple libraries with 'this':
gulp.task('dolib', function() {
  list.forEach(function(item) {
    return gulp.src(`${dest}/${name}-${item}${noparent}.js`)
      .pipe(replace('{{lib:parent}}', parent))
      .pipe(concat(`${name}-${item}.js`))
      .pipe(gulp.dest(dest));
  });
});


// -- Gulp Main Task
gulp.task('makejs', function(callback) {
  runSequence('dellib', 'docore', 'dolibnoparent', 'dolib', 'delcore', callback);
});
