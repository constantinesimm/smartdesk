const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { controlString } = require('../../config');

module.exports = {
	createAuthToken(userId) {
		return jwt.sign({ id: userId }, controlString, { expiresIn: '6h' });
	},
	createServiceToken() {
		let randomString = (+new Date).toString(36).slice(-10) + Math.random().toString(36).slice(-10);
		let hash = bcrypt.hashSync(randomString, 10);

		return hash.replace(/[/]/g, '').replace(/[$]/g, '').replace(/[.]/g, '');
	},
	createHashFromPassword(password) {
		return bcrypt.hashSync(password, 10);
	},
	validateEmail(value) {
		return /^\S+@\S+\.\S{2,10}$/.test(value)
	},
	validatePassword(value) {
		return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\w])[\w]{6,14}$/.test(value)
	}
};
