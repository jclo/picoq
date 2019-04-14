/* global describe, it */
/* eslint  one-var: 0, no-unused-expressions: 1, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(Ajax) {
  describe('Test Ajax functions:', () => {
    // it('Expects ...', (done) => {
    //   PicoQ.ajax(`${server}/test/ajax-f1.html`).done((data, status, xhr) => {
    //     expect(xhr).to.be.an('object');
    //     done();
    //   });
    // });

    describe('Test Ajax private functions:', () => {
      describe('Test Ajax.getDefaultSettings():', () => {
        it('Expects this function to return an object.', () => {
          expect(Ajax.getDefaultSettings()).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(Ajax.getDefaultSettings()).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property method with the value "GET".', () => {
          expect(Ajax.getDefaultSettings()).to.have.property('method').that.is.a('string').that.is.equal('GET');
        });
        it('Expects this object to own the property dataType with the value "text".', () => {
          expect(Ajax.getDefaultSettings()).to.have.property('dataType').that.is.a('string').that.is.equal('text');
        });
        it('Expects this object to own the property contentType with the value "application/x-www-form-urlencoded; charset=UTF-8".', () => {
          expect(Ajax.getDefaultSettings()).to.have.property('contentType').that.is.a('string').that.is.equal('application/x-www-form-urlencoded; charset=UTF-8');
        });
      });

      describe('Test Ajax.getArguments():', () => {
        let arg;

        // ajax()
        it('Expects this function without argument to return an object.', () => {
          (function(...args) { arg = args; }());
          expect(Ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        // ajax(url), then ajax(settings)
        it('Expects this function with the argument "aaa" to return an object.', () => {
          (function(...args) { arg = args; }('aaa'));
          expect(Ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, a string with "aaa".', () => {
          expect(Ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.equal('aaa');
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        it('Expects this function with the argument { url: "aaa"} to return an object.', () => {
          (function(...args) { arg = args; }({ url: 'aaa' }));
          expect(Ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, a string with "aaa".', () => {
          expect(Ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.equal('aaa');
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        it('Expects this function with the argument 1 to return an object.', () => {
          (function(...args) { arg = args; }(1));
          expect(Ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        it('Expects this function with the argument {} to return an object.', () => {
          (function(...args) { arg = args; }({}));
          expect(Ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        // ajax(url, settings)
        it('Expects this function with the arguments ""aaa", {}" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}));
          expect(Ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, a string with "aaa".', () => {
          expect(Ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.equal('aaa');
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });

        it('Expects this function with the arguments "1, 2" to return an object.', () => {
          (function(...args) { arg = args; }(1, 2));
          expect(Ajax.getArguments(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url, an empty string.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('url').that.is.a('string').that.is.empty;
        });
        it('Expects this object to own the property settings, an object.', () => {
          expect(Ajax.getArguments(arg)).to.have.property('settings').that.is.an('object');
        });
      });

      describe('Test Ajax.getSettings():', () => {
        let arg;

        it('Expects this function without argument to return an object.', () => {
          (function(...args) { arg = args; }());
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.a('null');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('null');
        });

        // fn(url)
        it('Expects this function with the argument "aaa" to return an object.', () => {
          (function(...args) { arg = args; }('aaa'));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this function with the argument 1 to return an object.', () => {
          (function(...args) { arg = args; }(1));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.a('null');
        });

        // fn(settings)
        it('Expects this function with the argument {url: "aaa"} to return an object.', () => {
          (function(...args) { arg = args; }({ url: 'aaa' }));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });

        // fn(others, others)
        it('Expects this function with the arguments "1, 2" to return an object.', () => {
          (function(...args) { arg = args; }(1, 2));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.a('null');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('null');
        });

        // fn(url, data)
        it('Expects this function with the arguments ""aaa", {}" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });

        // fn(url, success)
        it('Expects this function with the arguments ""aaa", function(){}" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', () => {}));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property success that is a function.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.an('function');
        });

        // fn(url, dataType)
        it('Expects this function with the arguments ""aaa", "GET"" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 'GET'));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property dataType that is equal to "GET".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('string').that.is.equal('GET');
        });

        // fn(url, others)
        it('Expects this function with the arguments ""aaa", 2 to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('null');
        });

        // fn(others, others, others)
        it('Expects this function with the arguments 1, 2, 3 to return an object.', () => {
          (function(...args) { arg = args; }(1, 2, 3));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.a('null');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('null');
        });

        // fn(url, data, success)
        it('Expects this function with the arguments "aaa", {}, function() {} to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}, () => {}));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });
        it('Expects this object to own the property success that is a Function.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('function');
        });


        // fn(url, data, dataType)
        it('Expects this function with the arguments "aaa", {}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}, 'GET'));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });
        it('Expects this object to own the property dataType that is equal to "GET".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.equal('GET');
        });

        // fn(url, data, others)
        it('Expects this function with the arguments "aaa", {}, 3 to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}, 3));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('null');
        });

        // fn(url, others, others)
        it('Expects this function with the arguments "aaa", 2, 3 to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2, 3));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('null');
        });

        // fn(url, success, dataType)
        it('Expects this function with the arguments "aaa", function(){}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', () => {}, 'GET'));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property success that is a Function.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('function');
        });
        it('Expects this object to own the property dataType that is equal to "GET".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.equal('GET');
        });

        // fn(url, data, success, dataType)
        it('Expects this function with the arguments "aaa", {}, function(){}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', {}, () => {}, 'GET'));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is equal to "aaa".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.equal('aaa');
        });
        it('Expects this object to own the property data that is an object.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.an('object');
        });
        it('Expects this object to own the property success that is a Function.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('function');
        });
        it('Expects this object to own the property dataType that is equal to "GET".', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.equal('GET');
        });

        // fn(others, ..., ..., ...)
        it('Expects this function with the arguments 1, {}, function(){}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }(1, {}, () => {}, 'GET'));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property url that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('url').that.is.a('null');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('null');
        });

        // fn(url, others, success, dataType)
        it('Expects this function with the arguments "aaa", 2, function(){}, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2, () => {}, 'GET'));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });

        // fn(url, others, others, dataType)
        it('Expects this function with the arguments "aaa", 2, 3, "GET" to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2, 3, 'GET'));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });

        // fn(url, others, others, others)
        it('Expects this function with the arguments "aaa", 2, 3, 4 to return an object.', () => {
          (function(...args) { arg = args; }('aaa', 2, 3, 4));
          expect(Ajax.getSettings(arg)).to.be.an('object');
        });
        it('Expects this object to own the property data that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('data').that.is.a('null');
        });
        it('Expects this object to own the property success that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('success').that.is.a('null');
        });
        it('Expects this object to own the property dataType that is null.', () => {
          expect(Ajax.getSettings(arg)).to.have.property('dataType').that.is.a('null');
        });
      });
    });

    describe('Test Ajax.encodeParams():', () => {
      const o = { param1: 'value1', param2: 'value2' };
      const s = 'param1=value1&param2=value2';
      it('Expects this function without argument to return null.', () => {
        expect(Ajax.encodeParams()).to.be.a('null');
      });
      it('Expects this function with the argument { param1: "value1", param2: "value2" } to return a string.', () => {
        expect(Ajax.encodeParams(o)).to.be.a('string');
      });
      it('Expects this string to be equal to "param1=value1&param2=value2".', () => {
        expect(Ajax.encodeParams(o)).to.be.a('string').that.is.equal(s);
      });
    });
  });
};
