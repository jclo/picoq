/* global describe, it */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1, no-unused-expressions: 0,
  no-underscore-dangle: 0 */

'use strict';

// -- Node modules
const expect    = require('chai').expect
    ;

// -- Local modules
const PicoQ = require('../index.js')
    ;

// -- Local constants


// -- Local variables


// -- Main
module.exports = function() {
  describe('Test Ajax functions:', () => {
    // it('Expects ...', (done) => {
    //   PicoQ.ajax(`${server}/test/ajax-f1.html`).done((data, status, xhr) => {
    //     expect(xhr).to.be.an('object');
    //     done();
    //   });
    // });

    describe('Test Ajax private functions:', () => {
      describe('Test PicoQ._ajax.getDefaultSettings():', () => {
        it('Expects this function to return an object.', () => {
          expect(PicoQ._ajax.getDefaultSettings()).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(PicoQ._ajax.getDefaultSettings()).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property method with the value "GET".', () => {
          expect(PicoQ._ajax.getDefaultSettings()).to.have.property('method').that.is.a('string').that.is.equal('GET');
        });
        it('Expects this object to own the property dataType with the value "text".', () => {
          expect(PicoQ._ajax.getDefaultSettings()).to.have.property('dataType').that.is.a('string').that.is.equal('text');
        });
        it('Expects this object to own the property contentType with the value "application/x-www-form-urlencoded; charset=UTF-8".', () => {
          expect(PicoQ._ajax.getDefaultSettings()).to.have.property('contentType').that.is.a('string').that.is.equal('application/x-www-form-urlencoded; charset=UTF-8');
        });
      });

      describe('Test PicoQ._ajax.getArguments():', () => {
        let arg;

        // ajax()
        it('Expects this function without argument to return an object.', () => {
          (function(...args) { arg = args; }());
          expect(PicoQ._ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        // ajax(url), then ajax(settings)
        it('Expects this function with the argument "aaa" to return an object.', () => {
          (function(...args) { arg = args; }('aaa'));
          expect(PicoQ._ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, a string with "aaa".', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.equal('aaa');
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        it('Expects this function with the argument { url: "aaa"} to return an object.', () => {
          (function(...args) { arg = args; }({ url: 'aaa' }));
          expect(PicoQ._ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, a string with "aaa".', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.equal('aaa');
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        it('Expects this function with the argument 1 to return an object.', () => {
          (function(...args) { arg = args; }(1));
          expect(PicoQ._ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        it('Expects this function with the argument {} to return an object.', () => {
          (function(...args) { arg = args; }({}));
          expect(PicoQ._ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        // ajax(url, settings)
        it('Expects this function with the arguments ""aaa", {}" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}));
          expect(PicoQ._ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, a string with "aaa".', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.equal('aaa');
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        it('Expects this function with the arguments "1, 2" to return an object.', () => {
          (function(...args) { arg = args; }(1, 2));
          expect(PicoQ._ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(PicoQ._ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });
      });

      describe('Test PicoQ._ajax.getSettings():', () => {
        let arg;

        it('Expects this function without argument to return an object.', () => {
          (function(...args) { arg = args; }());
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.null;
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.null;
        });

        // fn(url)
        it('Expects this function with the argument "aaa" to return an object.', () => {
          (function(...args) { arg = args; }('aaa'));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this function with the argument 1 to return an object.', () => {
          (function(...args) { arg = args; }(1));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.null;
        });

        // fn(settings)
        it('Expects this function with the argument {url: "aaa"} to return an object.', () => {
          (function(...args) { arg = args; }({ url: 'aaa' }));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });

        // fn(others, others)
        it('Expects this function with the arguments "1, 2" to return an object.', () => {
          (function(...args) { arg = args; }(1, 2));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.null;
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.null;
        });

        // fn(url, data)
        it('Expects this function with the arguments ""aaa", {}" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });

        // fn(url, success)
        it('Expects this function with the arguments ""aaa", function(){}" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', () => {}));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property success that is a function.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.an('function');
        });

        // fn(url, dataType)
        it('Expects this function with the arguments ""aaa", "GET"" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 'GET'));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property dataType that is equal to "GET".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.a('string').that.is.equal('GET');
        });

        // fn(url, others)
        it('Expects this function with the arguments ""aaa", 2 to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.null;
        });

        // fn(others, others, others)
        it('Expects this function with the arguments 1, 2, 3 to return an object.', () => {
          (function(...args) { arg = args; }(1, 2, 3));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.null;
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.null;
        });

        // fn(url, data, success)
        it('Expects this function with the arguments "aaa", {}, function() {} to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}, () => {}));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });
        it('Expects this object to own the property success that is a Function.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.a('function');
        });


        // fn(url, data, dataType)
        it('Expects this function with the arguments "aaa", {}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}, 'GET'));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });
        it('Expects this object to own the property dataType that is equal to "GET".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.equal('GET');
        });

        // fn(url, data, others)
        it('Expects this function with the arguments "aaa", {}, 3 to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}, 3));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.null;
        });

        // fn(url, others, others)
        it('Expects this function with the arguments "aaa", 2, 3 to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2, 3));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.null;
        });

        // fn(url, success, dataType)
        it('Expects this function with the arguments "aaa", function(){}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', () => {}, 'GET'));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property success that is a Function.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.a('function');
        });
        it('Expects this object to own the property dataType that is equal to "GET".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.equal('GET');
        });

        // fn(url, data, success, dataType)
        it('Expects this function with the arguments "aaa", {}, function(){}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}, () => {}, 'GET'));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });
        it('Expects this object to own the property success that is a Function.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.a('function');
        });
        it('Expects this object to own the property dataType that is equal to "GET".', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.equal('GET');
        });

        // fn(others, ..., ..., ...)
        it('Expects this function with the arguments 1, {}, function(){}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }(1, {}, () => {}, 'GET'));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('url').that.is.null;
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.null;
        });

        // fn(url, others, success, dataType)
        it('Expects this function with the arguments "aaa", 2, function(){}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2, () => {}, 'GET'));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });

        // fn(url, others, others, dataType)
        it('Expects this function with the arguments "aaa", 2, 3, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2, 3, 'GET'));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });

        // fn(url, others, others, others)
        it('Expects this function with the arguments "aaa", 2, 3, 4 to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2, 3, 4));
          expect(PicoQ._ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('data').that.is.null;
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('success').that.is.null;
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(PicoQ._ajax.getSettings(arg)).to.have.property('dataType').that.is.null;
        });
      });
    });

    describe('Test PicoQ._ajax.encodeParams():', () => {
      const o = { param1: 'value1', param2: 'value2' };
      const s = 'param1=value1&param2=value2';
      it('Expects this function without argument to return null.', () => {
        expect(PicoQ._ajax.encodeParams()).to.be.null;
      });
      it('Expects this function with the argument { param1: "value1", param2: "value2" } to return a string.', () => {
        expect(PicoQ._ajax.encodeParams(o)).to.be.a('string');
      });
      it('Expects this string to be equal to "param1=value1&param2=value2".', () => {
        expect(PicoQ._ajax.encodeParams(o)).to.be.a('string').that.is.equal(s);
      });
    });
  });
};
