const passport = require('passport');
const createError = require('http-errors');
const User = require('../users/model');
const mailer = require('../../services/mailer/mailer');

const { createAccessToken, verifyAccessToken, createServiceToken, createHashFromPassword} = require('./helpers');

const authenticate = (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', {}, (error, user, info) => {
      if (error) reject(error);

      if (user) {
        user.secret.token = createAccessToken(user._id)
        req.logIn(user, (err) => {
          if (err) reject(err);
          else {
            console.log(user)

            resolve({ auth: true, user: user, token: user.secret['token'], expires: Date.now() + 1000 * 60 * 6});
          }
        });
      }

      reject(info);
    })(req, res, next)
  })
};

const loggedOut = (req, res, next) => {
  return new Promise((resolve, reject) => {
    let { id, exp } = verifyAccessToken(req.headers['x-access-token'])
    console.log(id, exp)

    User.findOne({ _id: id }, (err, user) => {
      if (err) {
        reject(err);
      }

      if (user) {

        user.secret['token'] = null;

        user.save();
        console.log(user)
        req.logout();
        resolve({ message: 'Good luck! See you soon!'})
      }
    })
  })
};

const registerInvite = (req, res, next) => {
  return new Promise((resolve, reject) => {
    let userEmail = req.body.email;

    User.findOne({ email: userEmail }, (err, user) => {
      if (err) reject(err);
      if (user) reject(createError(400, 'User is already exists'));
      else {
        const newUser = new User({
          email: userEmail,
          access: {
            expiresAt: Date.now() + 1000 * 60 * 60 * 24
          },
          service: {
            token: createServiceToken()
          }
        });

        newUser.save(err => {
          if (err) reject(err);

          mailer('registerVerify', { subject: 'SmartDesk | Email Verify', recipient: newUser['email'], id: newUser['_id'], token: newUser['service'].token})

          resolve();
        });
      }
    })
  })
};

const registerComplete = (req, res, next) => {
  return new Promise((resolve, reject) => {
    let userId = req.params['userId'];
    let serviceToken = req.params['token'];

    User.findOne({ _id: userId }, (err, user) => {
      if (err) reject(err)
      if (!user) reject(createError(400, 'No such user'));
      else {
        user.access.expiresAt = '';
        user.service.token = '';

        user.save(err => console.log(err));

        resolve(user.service.token);
      }
    })
  })
};


module.exports = {
  authenticate,
  loggedOut,
  registerInvite,
  registerComplete
};
/*
const authenticate = async(req, res, next) => {
	await passport.authenticate('local', {}, (error, user, info) => {
		if (error) throw error;
		if (!user) next(createError(404, info));
		if (!user.service.isVerified) next(createError(400, info));

		req.logIn(user, error => {
			if (error) {
				next(createError(500, error));
			} else {
				user.secret['token'] = createAuthToken(user._id);
				user
					.save()
					.then(() => res.status(200).send({ auth: true, user: user, token: user.secret.token }))
			}
		})
	})(req, res, next)
};

const logout = async(req, res) => {
	console.log('logout', req.session);
	await req.session.destroy(() => {
		res.clearCookie('connect.sid');
		res.status(200).send('User logout succeed');
	});
};
 */
