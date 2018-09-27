/* eslint consistent-return:0 */

// const http = require('http');
const express = require('express');
const { resolve } = require('path');
const spdy = require('spdy');
const fs = require('fs');
const logger = require('./util//logger');

const argv = require('./util/argv');
const port = require('./util//port');
const setup = require('./middlewares/frontendMiddleware');

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const prettyHost = customHost || 'localhost';

const options = {
  key: fs.readFileSync(`${__dirname}/server.key`),
  cert: fs.readFileSync(`${__dirname}/server.crt`)
};

spdy.createServer(options, app).listen(port, error => {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  logger.appStarted(port, prettyHost);
});

// http.createServer((req, res) => {
//   res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
//   res.end();
// }).listen(80);
