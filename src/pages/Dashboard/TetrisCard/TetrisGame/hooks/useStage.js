import { useState } from 'react';
import createEmptyGame from '../../../../../utils/functions/createEmptyGame';

export default () => {
	const [stage, setStage] = useState(createEmptyGame(12, 20));

	return [stage, setStage];
};
