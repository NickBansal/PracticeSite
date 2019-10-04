import { string } from 'yup';
import get from 'lodash.get';

const regex = /^[a-zA-Z0-9()',+-\s]+$/;

const alphaNumeric = options => {
	const max = get(options, 'max', 100);
	const message = get(options, 'message', 'Alpha numeric characters only');

	return string()
		.trim()
		.max(max)
		.matches(regex, { message });
};

export default alphaNumeric;
