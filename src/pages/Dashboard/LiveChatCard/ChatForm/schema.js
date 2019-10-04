import * as yup from 'yup';
import alphaNumeric from '../../../../utils/validation/alphaNumeric';

const schema = yup
	.object({
		username: alphaNumeric().required(),
		room: alphaNumeric().required()
	})
	.required();

export default schema;
