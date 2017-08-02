// This server is derived from https://gist.github.com/ryanflorence/701407
/* global */
/* eslint one-var: 0 */

'use strict';

// -- Node modules
const http = require('http')
  , url = require('url')
  , path = require('path')
  , fs = require('fs')
  ;

// -- Local modules

// -- Local constants
const port = process.argv[2] || 8888
    ;

// -- Local variables


// -- Main ---------------------------------------------------------------------

// Create the HTTP Server:
const server = http.createServer((request, response) => {
  const uri    = url.parse(request.url).pathname
    , contentTypesByExtension = {
      '.html': 'text/html',
      '.json': 'text/plain',
      '.txt': 'text/plain',
      '.css': 'text/css',
      '.js': 'text/javascript',
    }
    ;
  let filename = path.join(process.cwd(), uri)
    ;

  // Returns url parameters to the client if any for a GET:
  const params = url.parse(request.url, true).query;
  if (request.method === 'GET' && Object.keys(params).length > 0) {
    response.end(JSON.stringify(params));
    process.stdout.write(`served GET: ${JSON.stringify(params)}\n`);
    return;
  }

  // Nota:
  // node-XMLHttpRequest doesn't include in the body the parameters sent by the
  // Ajax POST instruction xhr.send(params).
  // The server can't return these params to the client as it does for the GET
  // method.

  // if (request.method === 'POST') {
  //   let body = '';
  //
  //   request.on('data', (data) => {
  //     body += data;
  //
  //     // Too much POST data, kill the connection!
  //     // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
  //     if (body.length > 1e6) {
  //       request.connection.destroy();
  //     }
  //   });
  //
  //   request.on('end', () => {
  //     if (body !== '') {
  //       response.end(JSON.stringify(body));
  //       process.stdout.write(`served POST: ${JSON.stringify(body)}\n`);
  //     }
  //   });
  //   return;
  // }

  // Send the file:
  fs.exists(filename, (exists) => {
    const headers = {}
        , contentType = contentTypesByExtension[path.extname(filename)]
        ;

    // Send 404 if the file doesn't exist:
    if (!exists) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found\n');
      response.end();
      return;
    }

    // If it is a dir, send the file 'index.html' that must be in the dir:
    if (fs.statSync(filename).isDirectory()) {
      filename += '/index.html';
    }

    // Otherwise, send the requested file:
    fs.readFile(filename, 'binary', (err, file) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.write(`${err}\n`);
        response.end();
        return;
      }

      // Set the Content-Type:
      if (contentType) {
        headers['Content-Type'] = contentType;
      }
      // Send Response:
      response.writeHead(200, headers);
      response.write(file, 'binary');
      process.stdout.write(`served file: ${filename}\n`);
      response.end();
    });
  });
});

// Start the server listening port:
server.listen(parseInt(port, 10), () => {
  process.stdout.write(`Static file server running at\n  => http://localhost:${port}/\nCTRL + C to shutdown\n`);
});
