if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const databaseLink = process.env.NODE_ENV === 'production' ? `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_SECRET }@${ process.env.DB_HOST }/${ process.env.DB_NAME }?retryWrites=true&w=majority` : 'mongodb://127.0.0.1:27017/smartdesk';

module.exports = {
    controlString: process.env.CONTROL_STRING,
    database: {
        mongo: {
            uri: databaseLink,
            options: {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        }
    },
    sessionOptions: {
        saveUninitialized : false,
        resave : false,
        secret : process.env.CONTROL_STRING,
        cookie : {
            httpOnly : true,
            maxAge : 1000 * 60 * 60 * 6
        }
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    }
};
