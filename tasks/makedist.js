/* eslint one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0 */

'use strict';

// -- Node modules
const del         = require('del')
    , gulp        = require('gulp')
    , concat      = require('gulp-concat')
    , header      = require('gulp-header')
    , replace     = require('gulp-replace')
    , runSequence = require('run-sequence')
    , uglify      = require('gulp-uglify')
    ;

// -- Local modules
const config  = require('./config')
    ;

// -- Release and copyright to include
const release   = require('../package.json').version
    ;

// -- Local constants
const dist      = config.dist
    , libdir    = config.libdir
    , libname   = config.libname
    , license   = config.license
    ;

// -- Local variables


// -- Gulp Tasks

// Remove previous dist:
gulp.task('deldist', function() {
  return del.sync(dist);
});

// Copy README and LICENSE:
gulp.task('skeleton', function() {
  return gulp.src(['README.md', 'LICENSE.md', 'example.html'])
    .pipe(gulp.dest(dist));
});

// Copy the development version:
gulp.task('copydev', function() {
  return gulp.src(`${libdir}/${libname}.js`)
    .pipe(header(license.standard))
    .pipe(replace('{{lib:name}}', libname))
    .pipe(replace('{{lib:version}}', release))
    .pipe(gulp.dest(dist));
});

// Copy the development version with easing:
gulp.task('copydeveasing', function() {
  return gulp.src(`${libdir}/${libname}-easing.js`)
    .pipe(header(license.easing))
    .pipe(replace('{{lib:name}}', `${libname}-easing`))
    .pipe(replace('{{lib:version}}', release))
    .pipe(gulp.dest(dist));
});

// Create the minified version:
gulp.task('makeminified', function() {
  return gulp.src(`${libdir}/${libname}.js`)
    .pipe(uglify())
    .pipe(header(license.standard))
    .pipe(replace('{{lib:name}}', libname))
    .pipe(replace('{{lib:version}}', release))
    .pipe(concat(`${libname}.min.js`))
    .pipe(gulp.dest(dist));
});

// Create the minified easing version:
gulp.task('makeminifiedeasing', function() {
  return gulp.src(`${libdir}/${libname}-easing.js`)
    .pipe(uglify())
    .pipe(header(license.easing))
    .pipe(replace('{{lib:name}}', `${libname}-easing`))
    .pipe(replace('{{lib:version}}', release))
    .pipe(concat(`${libname}-easing.min.js`))
    .pipe(gulp.dest(dist));
});

// -- Gulp Main Task:
gulp.task('makedist', function(callback) {
  runSequence('deldist',
    ['skeleton', 'copydev', 'copydeveasing', 'makeminified', 'makeminifiedeasing'],
    callback);
});