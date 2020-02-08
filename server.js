const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { loggerOptions, loggerStream } = require('./server/services/logger');
const mongoDB = require('./server/services/database/mongo/mongoose');

const server = express();

//connect mongo database
mongoDB()
    .then( () => console.log('MongoDB connected'))
    .catch(error => console.log(`MongoDB connection error with message: "${ error }"`));

//security middleware
server.use(cors());
server.use(helmet.xssFilter());
server.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

//logger middleware write all requests to ./server/logs
server.use(morgan(loggerOptions.template, { stream: loggerStream }));
//logger middleware, dev mode show all requests in console
server.use(morgan('dev'));

//parser middleware
server.use(cookieParser());         //cookie
server.use(bodyParser.json());      //application/json
server.use(bodyParser.urlencoded({  //application/x-www-form-urlencoded
    extended: true
}));

//static paths and files
server.use(express.static(path.join(__dirname, 'dist')));
server.get('*', (req, res) => res.sendFile('index.html', { root: 'dist'}));

module.exports = server;
