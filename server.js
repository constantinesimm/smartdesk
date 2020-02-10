const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoDB = require('./server/services/database/mongoose');
const passport = require('passport');
const { loggerOptions, loggerStream } = require('./server/services/logger');
const { sessionOptions } = require('./server/config');
const createError = require('http-errors');
const server = express();

//connect mongo database
mongoDB()
    .then( () => console.log('MongoDB connected'))
    .catch(error => console.log(`MongoDB connection error with message: "${ error }"`));

//security middleware
server.use(cors());
server.use(helmet.xssFilter());
server.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

server.use(morgan(loggerOptions.template, { stream: loggerStream }));
if (process.env.NODE_ENV !== 'production') server.use(morgan('dev'));

//parser middleware
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//passport middleware
require('./server/middleware/passport')(passport);
server.use(passport.initialize());
server.use(passport.session(sessionOptions));

//static paths and files
server.use(express.static(path.join(__dirname, 'dist')));
server.get('*', (req, res) => res.sendFile('index.html', { root: 'dist'}));

//API controllers
server.use('/api/users', require('./server/controllers/api/users'));

//catch 404 and forward to error handler
server.use('*', (req, res, next) => {
	if (res.status(404)) next(createError(404, `Not found route: "${req.baseUrl}"`));
});

//central error handler middleware
server.use((err, req, res, next) => {
	let errStatus = err.status || 500;
	let errMessage = err.message || 'Server Internal Error';
	//validator middleware change exception status code and message
	if (errStatus === 422) errStatus = 400; errMessage = errMessage.split(': /')[0];

	return res.status(errStatus).send(errMessage);
});

module.exports = server;
