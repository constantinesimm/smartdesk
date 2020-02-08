const fs = require('fs');
const { join } = require('path');

const loggerOptions = {
    file: process.env.NODE_ENV === 'production' ? join(__dirname, '../logs/production.log') : join(__dirname, '../logs/development.log'),
    template: '"date > [:date[clf]]", "method > :method", "status > :status", "url > :url", "HTTP version > HTTP/:http-version", "request navbar > :req[navbar]", "response navbar > :res[navbar]", "referrer > :referrer", "user agent > :user-agent"'
};

const loggerStream = fs.createWriteStream(loggerOptions.file, { flags: 'a' });

module.exports = { loggerOptions, loggerStream };
