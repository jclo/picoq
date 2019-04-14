/* eslint one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0
  no-param-reassign: 0 */

'use strict';

// -- Node modules
const { src, dest, series } = require('gulp')
    , del     = require('del')
    , replace = require('gulp-replace')
    , rename  = require('gulp-rename')
    ;

// -- Local modules
const config = require('./config')
    ;

// -- Local constants
const { noparent } = config
    , iport        = config.import
    ;

// -- Local variables


// -- Gulp Private Tasks

// Removes the previous version.
function clean(cb) {
  del.sync(iport.dest);
  cb();
}

// Imports libraries/
function importlibs() {
  const re = new RegExp(noparent, 'g');

  return src(iport.lib)
    .pipe(replace('{{lib:parent}}', iport.parent))
    .pipe(rename((path) => {
      path.basename = path.basename.replace(re, '');
    }))
    .pipe(dest(iport.dest));
}


// -- Gulp Public Task(s)
module.exports = series(clean, importlibs);
