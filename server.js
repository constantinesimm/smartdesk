const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const { devLoggerStream, prodLoggerStream } = require('./server/service/logger/logger');

const server = express();

//security middleware
app.use(cors());
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

//log middleware, write all requests to access.log
if (process.env.NODE_ENV === 'production') {
  app.use(logger('common', { stream: prodLoggerStream }));
} else {
  //write to file
  app.use(logger('common', { stream: devLoggerStream }));
  //show in console
  app.use(logger('dev'));
}

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());

//static paths and files
server.use(express.static(path.join(__dirname, 'dist')));
server.get('*', (req, res) => res.sendFile('index.html', { root: 'dist'}));

module.exports = server;
