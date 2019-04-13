/* global describe, it */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1, no-unused-expressions: 0,
  no-underscore-dangle: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants
const server = 'http://localhost:8888/'
    ;


// -- Local variables


// -- Main
module.exports = function(PicoQ) {
  describe('Test Ajax functions (next):', () => {
    describe('Test Ajax public functions & methods:', () => {
      describe('Text PicoQ.ajax():', () => {
        //
        it('Expects PicoQ.ajax(".../ajax-f1.txt").done(...).fail(...).always(...) to fire done and always.', (done) => {
          let fndone = false
            , fnalways = false
            , fnfail = false
            ;

          PicoQ.ajax(`${server}/test/ajax-f1.txt`)
            .done(() => { fndone = true; })
            .fail(() => { fnfail = true; })
            .always(() => {
              fnalways = true;
              expect(fndone).to.be.true;
              expect(fnfail).to.be.false;
              expect(fnalways).to.be.true;
              done();
            });
        });

        it('Expects PicoQ.ajax(".../ajax-f111.txt").done(...).fail(...).always(...) to fire fail and always.', (done) => {
          let fndone = false
            , fnalways = false
            , fnfail = false
            ;

          PicoQ.ajax(`${server}/test/ajax-f111.txt`)
            .done(() => { fndone = true; })
            .fail(() => { fnfail = true; })
            .always(() => {
              fnalways = true;
              expect(fndone).to.be.false;
              expect(fnfail).to.be.true;
              expect(fnalways).to.be.true;
              done();
            });
        });

        it('Expects PicoQ.ajax(".../ajax-f1.txt").always(...) to return 200.', (done) => {
          PicoQ.ajax(`${server}/test/ajax-f1.txt`)
            .always((data, status, xhr) => {
              expect(xhr.status).to.be.a('number').that.is.equal(200);
              done();
            });
        });

        it('Expects PicoQ.ajax(".../ajax-f111.txt").always(...) to return 404.', (done) => {
          PicoQ.ajax(`${server}/test/ajax-f111.txt`)
            .always((xhr) => {
              expect(xhr.status).to.be.a('number').that.is.equal(404);
              done();
            });
        });

        it('Expects PicoQ.ajax(".../ajax-f1.txt").done(...) to return data equal to "Hi!".', (done) => {
          PicoQ.ajax(`${server}/test/ajax-f1.txt`)
            .done()
            .always((data) => {
              expect(data.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
              done();
            });
        });
      });

      describe('Test PicoQ.get():', () => {
        it('Expects PicoQ.get(".../ajax-f1.txt", function(data) {}) to return data equal to "Hi!".', (done) => {
          PicoQ.get(`${server}/test/ajax-f1.txt`, (data) => {
            expect(data.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
            done();
          });
        });
      });

      describe('Test PicoQ.getJSON():', () => {
        let params
          , params2
          ;

        it('Expects PicoQ.getJSON(".../ajax-f1.txt?param1=value1&param2=value2") to return an object.', (done) => {
          PicoQ.getJSON(`${server}/test/ajax-f1.txt?param1=value1&param2=value2`, (data) => {
            params = data;
            expect(data).to.be.an('object');
            done();
          });
        });
        it('Expects this object to own the property param1 that is equal to value1.', () => {
          expect(params).to.have.property('param1').that.is.equal('value1');
        });
        it('Expects this object to own the property param2 that is equal to value2.', () => {
          expect(params).to.have.property('param2').that.is.equal('value2');
        });

        it('Expects PicoQ.getJSON(".../ajax-f1.txt", {param1: valueA, param2: valueB}) to return an object.', (done) => {
          PicoQ.getJSON(`${server}/test/ajax-f1.txt`, { param1: 'valueA', param2: 'valueB' }, (data) => {
            params2 = data;
            expect(data).to.be.an('object');
            done();
          });
        });
        it('Expects this object to own the property param1 that is equal to valueA.', () => {
          expect(params2).to.have.property('param1').that.is.equal('valueA');
        });
        it('Expects this object to own the property param2 that is equal to valueB.', () => {
          expect(params2).to.have.property('param2').that.is.equal('valueB');
        });
      });

      // Nota:
      // node-XMLHttpRequest doesn't embed in the 'body' the parameters. Son the
      // server (server.js) cannot return these params as for the GET method. The test
      // is just limited to a POST action.
      describe('Test PicoQ.post():', () => {
        it('Expects PicoQ.post(".../ajax-f1.txt", {param1: valueA, param2: valueB}) to return a string.', (done) => {
          PicoQ.post(`${server}/test/ajax-f1.txt`, { param1: 'valueA', param2: 'valueB' }, (data) => {
            expect(data).to.be.a('string');
            done();
          });
        });
      });

      describe('Test PicoQ().load():', () => {
        it('Expects PicoQ().load() to return an object.', (done) => {
          expect(PicoQ().load()).to.be.an('object');
          done();
        });
        it('Expects PicoQ("#app70").load() to return an object.', (done) => {
          expect(PicoQ('#app70').load()).to.be.an('object');
          done();
        });
        it('Expects PicoQ("#app70").load(...ajax-f2.html) to insert <h1>Hello!</h1>.', (done) => {
          PicoQ('#app70').load(`${server}/test/ajax-f2.html`, () => {
            expect(PicoQ('#app70 h1').text()).to.be.a('string').that.is.equal('Hello!');
            done();
          });
        });
      });
    });
  });
};
