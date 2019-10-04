import * as yup from 'yup';
import alphaNumeric from '../../../../utils/validation/alphaNumeric';

const schema = yup
	.object({
		username: alphaNumeric({
			max: 50
		})
			.required()
			.label('Username'),
		room: alphaNumeric({
			max: 50
		})
			.required()
			.label('Chat room')
	})
	.required();

export default schema;
