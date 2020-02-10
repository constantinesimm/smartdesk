const Joi = require('joi');
const createError = require('http-errors');

const schemas = {
	userEmail: Joi.object().keys({
		email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required()
	}),
	loginPOST: Joi.object().keys({
		email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
		secret: Joi.string().regex(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\w])[\w]{6,14}$/).required()
	}),
	signUpPOST: Joi.object().keys({
		userId: Joi.number().min(100).required(),
		email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
		firstname: Joi.string().min(4).max(20).required(),
		lastname: Joi.string().min(4).max(20).required(),
		gender: Joi.string().valid('male', 'female').required(),
		language: Joi.string().valid('uk', 'en', 'ru').required(),
		birthday: Joi.date().iso().required(),
		secret: Joi.string().regex(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\w])[\w]{6,14}$/).required(),
		serviceToken: Joi.string().min(40).max(75).required()
	})
};

const validator = (schema, property) => {
	return (req, res, next) => {
		const { error } = Joi.validate(req[property], schema);
		const valid = error == null;

		if (valid) { next() }
		else {
			const { details } = error;
			const message = details.map(i => i.message).join(',');

			next(createError(422, message));
		}
	}
};
module.exports = {
	validator,
	schemas
};
