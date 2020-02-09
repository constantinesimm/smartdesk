const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email : {
		type: String,
		required: true,
		trim: true,
		set: v => v.toLowerCase()
	},
	userId: {
		type: Number
	},
	info: {
		fullname: String,
		language: {
			type: String,
			default: 'en'
		},
		gender: {
			type: String,
			enum: ['male', 'female']
		},
		birthday: {
			type: Date,
			default: null
		}
	},
	service: {
		token: {
			type: String,
			default: null
		},
		isVerified: {
			type: Boolean,
			default: false
		},
		accessExpires: {
			type: Date,
			default: null
		},
		fakeUser: {
			type: Boolean,
			default: false
		}
	},
	access: {
		role: {
			type: String,
			default: 'client',
			enum: ['client', 'manager', 'admin', 'super']
		}
	},
	secret: {
		token: {
			type: String,
			default: null
		},
		hash : {
			type: String
		}
	}
}, { collection: 'users', timestamp: { updatedAt: 'updatedAt' } });

module.exports = mongoose.model('User', UserSchema);
