/* eslint one-var: 0, prefer-arrow-callback: 0, import/no-extraneous-dependencies: 0,
  semi-style: 0 */

'use strict';

// -- Node modules
const fs   = require('fs')
    , gulp = require('gulp')
    ;

// -- Local modules
const config  = require('./config')
    ;

// -- Release version:

// -- Local constants
const { dist } = config
    ;

// -- Local variables


// -- Gulp Tasks
gulp.task('makeprivatepackage', function() {
  fs.readFile('./package.json', 'utf8', function(error, data) {
    if (error) { throw error; }
    const obj = JSON.parse(data);
    obj.main = {};
    obj.scripts = {};
    obj.dependencies = {};
    obj.devDependencies = {};
    obj.private = true;

    // Write the updated package.json:
    fs.writeFile(`${dist}/package.json`, JSON.stringify(obj, null, 2), 'utf8', (err) => {
      if (err) {
        throw err;
      }
    });
  });
});
