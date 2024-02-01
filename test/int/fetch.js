// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(PicoQ, server) {
  describe('Test Fetch functions:', () => {
    describe('Test PicoQ.fetch() _getArgs():', () => {
      const [F] = PicoQ._setTestMode();

      // zero element
      it('Expects _getArgs() to return an array with 4 elements.', () => {
        const arr = F._getArgs();
        expect(arr).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects these 4 elements to be all null.', () => {
        const arr = F._getArgs();
        expect(arr[0]).to.be.a('null');
        expect(arr[1]).to.be.a('null');
        expect(arr[2]).to.be.a('null');
        expect(arr[3]).to.be.a('null');
      });

      // one element
      it('Expects _getArgs(1) to return an array with 4 elements.', () => {
        const arr = F._getArgs(1);
        expect(arr).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects these 4 elements to be [null, null, null, null].', () => {
        const arr = F._getArgs(1);
        expect(arr[0]).to.be.a('null');
        expect(arr[1]).to.be.a('null');
        expect(arr[2]).to.be.a('null');
        expect(arr[3]).to.be.a('null');
      });

      // two elements
      it('Expects _getArgs(1, 2) to return an array with 4 elements.', () => {
        const arr = F._getArgs(1, 2);
        expect(arr).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects these 4 elements to be [null, null, null, null].', () => {
        const arr = F._getArgs(1, 2);
        expect(arr[0]).to.be.a('null');
        expect(arr[1]).to.be.a('null');
        expect(arr[2]).to.be.a('null');
        expect(arr[3]).to.be.a('null');
      });

      // three elements
      it('Expects _getArgs(1, 2, 3) to return an array with 4 elements.', () => {
        const arr = F._getArgs(1, 2, 3);
        expect(arr).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects these 4 elements to be [null, null, null, null].', () => {
        const arr = F._getArgs(1, 2, 3);
        expect(arr[0]).to.be.a('null');
        expect(arr[1]).to.be.a('null');
        expect(arr[2]).to.be.a('null');
        expect(arr[3]).to.be.a('null');
      });

      // four elements
      it('Expects _getArgs(1, 2, 3, 4) to return an array with 4 elements.', () => {
        const arr = F._getArgs(1, 2, 3, 4);
        expect(arr).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects these 4 elements to be [null, null, null, null].', () => {
        const arr = F._getArgs(1, 2, 3, 4);
        expect(arr[0]).to.be.a('null');
        expect(arr[1]).to.be.a('null');
        expect(arr[2]).to.be.a('null');
        expect(arr[3]).to.be.a('null');
      });

      // Fith elements
      it('Expects _getArgs(1, 2, 3, 4, 5) to return an array with 4 elements.', () => {
        const arr = F._getArgs(1, 2, 3, 4, 5);
        expect(arr).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects these 4 elements to be [null, null, null, null].', () => {
        const arr = F._getArgs(1, 2, 3, 4, 5);
        expect(arr[0]).to.be.a('null');
        expect(arr[1]).to.be.a('null');
        expect(arr[2]).to.be.a('null');
        expect(arr[3]).to.be.a('null');
      });
    });


    describe('Test PicoQ.fetch():', () => {
      it('Expects PicoQ.fetch() to return the error "Not Found".', async () => {
        PicoQ.fetch()
          .then(() => {})
          .catch((e) => {
            expect(e.statusText).to.be.a('string').that.is.equal('Not Found');
          });
      });

      // one element
      it('Expects PicoQ.fetch(url) to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      // two elements
      it('Expects PicoQ.fetch(url, { method: "GET" }) to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' });
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(url, "test") to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, 'text');
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(url, "zzz") to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, 'zzz');
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(url, () => {...}) to return the string "Hi!".', (done) => {
        PicoQ.fetch(`${server}/test/data/file.txt`, (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        });
      });

      it('Expects PicoQ.fetch(url, 1) to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, 1);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      // three elements
      it('Expects PicoQ.fetch(url, { method: "GET" }, "text") to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' }, 'text');
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(url, { method: "GET" }, () => {...}) to return the string "Hi!".', (done) => {
        PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' }, (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        });
      });

      it('Expects PicoQ.fetch(url, { method: "GET" }, 2) to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' }, 2);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(url, "text", () => {...}) to return the string "Hi!".', (done) => {
        PicoQ.fetch(`${server}/test/data/file.txt`, 'text', (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        });
      });

      it('Expects PicoQ.fetch(url, "text", 1) to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, 'text', 1);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ.fetch(url, 1, () => {...}) to return the string "Hi!".', (done) => {
        PicoQ.fetch(`${server}/test/data/file.txt`, 1, (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        });
      });

      it('Expects PicoQ.fetch(url, 1, 2) to return the string "Hi!".', async () => {
        const resp = await PicoQ.fetch(`${server}/test/data/file.txt`, 1, 2);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      // four elements
      it('Expects PicoQ.fetch(url, { method: "GET" }, "text", () => {...}) to return the string "Hi!".', (done) => {
        PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' }, 'text', (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        });
      });

      // fith elements
      it('Expects PicoQ.fetch(url, { method: "GET" }, "text", () => {...}, 5) to return the string "Hi!".', (done) => {
        PicoQ.fetch(`${server}/test/data/file.txt`, { method: 'GET' }, 'text', (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        }, 5);
      });
    });

    describe('Test PicoQ.get():', () => {
      it('Expects PicoQ.get(url) to return the string "Hi!".', async () => {
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
      it('Expects PicoQ("#appzzz").load(.../file.txt) to return the string "Hi!".', async () => {
        const resp = await PicoQ('#appzzz').load(`${server}/test/data/file.txt`);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ("#app100").load(.../file.txt) to return the string "Hi!".', async () => {
        const resp = await PicoQ('#app100').load(`${server}/test/data/file.txt`);
        expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
      });

      it('Expects PicoQ("#app100").load(.../file.txt, () => {...}) to return the string "Hi!".', (done) => {
        PicoQ('#app100').load(`${server}/test/data/file.txt`, (err, resp) => {
          expect(resp.slice(0, 3)).to.be.a('string').that.is.equal('Hi!');
          done();
        });
      });
    });
  });
};
