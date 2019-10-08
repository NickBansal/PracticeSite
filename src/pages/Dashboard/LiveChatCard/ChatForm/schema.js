import * as yup from 'yup';
import get from 'lodash.get';

const regex = /^[a-zA-Z0-9()',+-\s]+$/;

const alphaNumeric = options => {
	const max = get(options, 'max', 50);
	const message = get(options, 'message', 'Alpha numeric characters only');

	return yup
		.string()
		.trim()
		.max(max)
		.matches(regex, { message })
		.required();
};

const schema = yup
	.object({
		username: alphaNumeric().label('Username'),
		room: alphaNumeric().label('Chat room')
	})
	.required();

export default schema;
