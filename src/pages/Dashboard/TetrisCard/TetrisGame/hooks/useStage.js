import { useState } from 'react';
import { createEmptyGameBoard } from '../../../SnakeCard/SnakeGame/utils';

export default () => {
	const [stage, setStage] = useState(createEmptyGameBoard(20, 12));

	return [stage, setStage];
};
