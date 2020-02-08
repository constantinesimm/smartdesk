const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');

const server = express();

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(sassMiddleware({
  src: path.join(__dirname, 'dist'),
  dest: path.join(__dirname, 'dist'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
server.use(express.static(path.join(__dirname, 'dist')));


module.exports = server;
