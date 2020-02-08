const fs = require('fs');
const { join } = require('path');

module.exports = {
    devLoggerStream: fs.createWriteStream(join(__dirname, '../../logs/dev-access.log'), { flags: 'a' }),
    prodLoggerStream: fs.createWriteStream(join(__dirname, '../../logs/prod-access.log'), { flags: 'a' })
};