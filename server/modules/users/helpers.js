const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { controlString } = require('../../config');

module.exports = {
	createAccessToken(userId) {
		return jwt.sign({ id: userId }, controlString, { expiresIn: '6h' });
	},
  verifyAccessToken(token) {
	  return jwt.verify(token, controlString);
  },
	createServiceToken() {
		let randomString = (+new Date).toString(36).slice(-10) + Math.random().toString(36).slice(-10);
		let hash = bcrypt.hashSync(randomString, 10);

		return hash.replace(/[/]/g, '').replace(/[$]/g, '').replace(/[.]/g, '');
	},
	createHashFromPassword(password) {
		return bcrypt.hashSync(password, 10);
	}
};
