/* eslint  one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const del     = require('del')
    , gulp    = require('gulp')
    , concat  = require('gulp-concat')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    ;

// -- Local modules
const config  = require('./config')
    ;

// -- Local constants
const dest = config.libdir
    , src  = config.src
    , lib  = config.libname
    , parent = config.parent
    ;

// -- Local variables


// -- Gulp Tasks

// Remove the previous version:
gulp.task('dellib', function() {
  return del.sync(dest);
});

// Create the basic library:
gulp.task('dolib', function() {
  return gulp.src(src.standard)
    .pipe(replace('{{lib:name}}', lib))
    .pipe(replace('{{lib:parent}}', parent))
    .pipe(concat(`${lib.toLowerCase()}.js`))
    .pipe(gulp.dest(dest));
});

// Create the library with easing functions:
gulp.task('dolibwitheasing', function() {
  return gulp.src(src.easing)
    .pipe(replace('{{lib:name}}', lib))
    .pipe(replace('{{lib:parent}}', parent))
    .pipe(concat(`${lib.toLowerCase()}-easing.js`))
    .pipe(gulp.dest(dest));
});

// -- Gulp Main Task
gulp.task('makejs', function(callback) {
  runSequence('dellib', ['dolib', 'dolibwitheasing'], callback);
});
