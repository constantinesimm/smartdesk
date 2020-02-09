export default (value, field, fieldType) => {
	const pattern = {
		email: value => /^\S+@\S+\.\S{2,10}$/.test(value),
		name: value => /[a-zA-Zа-яА-Я]{4,20}/.test(value),
		secret: value => /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\w])[\w]{6,14}$/.test(value)
	};

	return pattern[fieldType](value);
}
