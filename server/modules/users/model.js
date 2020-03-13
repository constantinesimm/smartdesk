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
  access: {
    expiresAt: {
      type: Date,
      default: null
    },
    token: {
      type: String,
      default: null
    },
    identity: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: 'client',
      enum: ['client', 'manager', 'admin', 'super']
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
		fakeUser: {
			type: Boolean,
			default: false
		}
	},
	secret: {
		hash : {
			type: String
		}
	}
}, { collection: 'users', timestamps: { updatedAt: 'service.updatedAt', createdAt: 'service.createdAt' } });

module.exports = mongoose.model('User', UserSchema);
