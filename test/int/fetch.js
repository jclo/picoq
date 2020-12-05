// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants
const server = 'http://localhost:8888'
    ;


// -- Local Variables


// -- Main
module.exports = function(PicoQ) {
  describe('Test Fetch functions:', () => {
    describe('Test PicoQ.fetch():', () => {
      it('Expects PicoQ.fetch(.../file.txt) to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(.../file.txt, "{method: "GET"}") to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' });
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(.../file.txt, "text") to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, 'text');
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(.../file.txt, "{method: "GET"}", "text") to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' }, 'text');
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(.../file.txt, "{method: "GET"}", "text", () => {...}) to return the string "Hi!".', (done) => {
        PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' }, 'text', (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        });
      });
    });

    describe('Test PicoQ.get():', () => {
      it('Expects PicoQ.get(.../file.txt) to return the string "Hi!".', async () => {
        const resp = await PicoQ.get(`${server}/test/data/file.txt`);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });
    });

    describe('Test PicoQ.getJSON():', () => {
      it('Expects PicoQ.getJSON(.../file.json) to return an array that contains one element.', async () => {
        const resp = await PicoQ.getJSON(`${server}/test/data/file.json`);
        expect(resp).to.be.an('array').that.has.lengthOf(1);
      });

      it('Expects this element to be an object.', async () => {
        const resp = await PicoQ.getJSON(`${server}/test/data/file.json`);
        expect(resp[0]).to.be.an('object');
      });

      it('Expects this object to own two properties.', async () => {
        const resp = await PicoQ.getJSON(`${server}/test/data/file.json`);
        expect(Object.keys(resp[0])).to.be.an('array').that.has.lengthOf(2);
      });

      it('Expects this object to own the property "a" that is equal "aaa".', async () => {
        const resp = await PicoQ.getJSON(`${server}/test/data/file.json`);
        expect(resp[0]).to.own.property('a').that.is.equal('aaa');
      });

      it('Expects this object to own the property "b" that is equal "bbb".', async () => {
        const resp = await PicoQ.getJSON(`${server}/test/data/file.json`);
        expect(resp[0]).to.own.property('b').that.is.equal('bbb');
      });
    });

    describe('Test PicoQ().load():', () => {
      it('Expects PicoQ("#app80").load(.../file.txt) to return the string "Hi!".', (done) => {
        PicoQ('#app80').load(`${server}/test/data/file.txt`, (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        });
      });
    });
  });
};
