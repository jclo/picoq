/* eslint one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , header      = require('gulp-header')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    , uglify      = require('gulp-uglify')
    , through2    = require('through2')
    ;

// -- Local modules
const config = require('./config')
    ;

// -- Release version:
const release = require('../package.json').version
    ;

// -- Local constants
const { dist }     = config
    , { src }      = config
    , { libdir }   = config
    , { libname }  = config
    , { noparent } = config
    , name         = libname.replace(/\s+/g, '').toLowerCase()
    , { license }  = config
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

// Remove previous dist:
gulp.task('deldist', function() {
  return del.sync(dist);
});

// Copy README and LICENSE:
gulp.task('skeleton', function() {
  return gulp.src(['README.md', 'LICENSE.md'])
    .pipe(gulp.dest(dist));
});

// Copies multiple dev. libraries:
gulp.task('copydev', function(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach(function(item) {
    gulp.src(`${libdir}/${name}-${item}.js`)
      .pipe(header(license[item]))
      .pipe(replace('{{lib:name}}', `${libname}`))
      .pipe(replace('{{lib:version}}', release))
      .pipe(gulp.dest(dist))
      .pipe(synchro(incDoneCounter));
  });
});

// Copies multiple dev. libraries without parent:
gulp.task('makenoparentlib', function(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach(function(item) {
    gulp.src(`${libdir}/${name}-${item}${noparent}.js`)
      .pipe(header(license[item]))
      .pipe(replace('{{lib:name}}', `${libname}`))
      .pipe(replace('{{lib:version}}', release))
      .pipe(replace(/ {2}'use strict';\n\n/g, ''))
      .pipe(gulp.dest(dist))
      .pipe(synchro(incDoneCounter));
  });
});

// Minifies multiple dev. libraries:
gulp.task('minifydev', function(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach(function(item) {
    gulp.src(`${libdir}/${name}-${item}.js`)
      .pipe(uglify())
      .pipe(header(license[item]))
      .pipe(replace('{{lib:name}}', `${libname}`))
      .pipe(replace('{{lib:version}}', release))
      .pipe(concat(`${name}-${item}.min.js`))
      .pipe(gulp.dest(dist))
      .pipe(synchro(incDoneCounter));
  });
});


// -- Gulp Main Task:
gulp.task('makedist', function(callback) {
  runSequence(
    'deldist',
    ['skeleton', 'copydev', 'makenoparentlib', 'minifydev'],
    callback,
  );
});
