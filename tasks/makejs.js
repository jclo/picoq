/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const del     = require('del')
    , gulp    = require('gulp')
    , concat  = require('gulp-concat')
    , runSequence = require('run-sequence')
    ;

// -- Local modules
const config  = require('./config')
    ;

// -- Local constants
const dest = config.libdir
    , src  = config.src
    , lib  = config.libname
    ;

// -- Local variables


// -- Gulp Tasks

// Remove the previous version:
gulp.task('dellib', function() {
  return del.sync(dest);
});

// Create the standard library:
gulp.task('dolib', function() {
  return gulp.src(src.standard)
    .pipe(concat(`${lib}.js`))
    .pipe(gulp.dest(dest));
});

// Create the library with easing functions:
gulp.task('dolibwitheasing', function() {
  return gulp.src(src.easing)
    .pipe(concat(`${lib}-easing.js`))
    .pipe(gulp.dest(dest));
});

// -- Gulp Main Task
gulp.task('makejs', function(callback) {
  runSequence('dellib', ['dolib', 'dolibwitheasing'], callback);
});
