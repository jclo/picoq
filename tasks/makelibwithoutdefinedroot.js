/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , header      = require('gulp-header')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    , through2    = require('through2')
    ;

// -- Local modules
const config = require('./config')
    ;

// -- Local constants
const dest        = config.libdir
    , { src }     = config
    , { version } = require('../package.json')
    , { dist }    = config
    , lib         = config.libname
    , name        = lib.replace(/\s+/g, '').toLowerCase()
    , { license } = config
    , destlib     = `./_${lib}-${version}`
    , list        = Object.keys(src)
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
gulp.task('delemlib', function() {
  return del.sync(destlib);
});

// Copy dist to destlib:
gulp.task('cpdist', function() {
  return gulp.src(`${dist}/**/*`)
    .pipe(gulp.dest(destlib));
});

// Remove js files:
gulp.task('rmjsfiles', function() {
  return del.sync(`${destlib}/*.js`);
});

// Creates multiple libraries:
gulp.task('doemlib', function(done) {
  let doneCounter = 0;

  function incDoneCounter() {
    doneCounter += 1;
    if (doneCounter >= list.length) {
      done();
    }
  }

  list.forEach(function(item) {
    gulp.src(`${dest}/${name}-${item}-noparent.js`)
      .pipe(concat(`${name}-${item}.js`))
      .pipe(header(license[item]))
      .pipe(replace('{{lib:name}}', `${lib}`))
      .pipe(replace('{{lib:version}}', version))
      .pipe(replace('\'use strict\';', '//  \'use strict\';'))
      .pipe(gulp.dest(destlib))
      .pipe(synchro(incDoneCounter));
  });
});

// -- Gulp Main Task
gulp.task('makenoparentlib', function(callback) {
  runSequence('delemlib', 'cpdist', 'rmjsfiles', 'doemlib', callback);
});
