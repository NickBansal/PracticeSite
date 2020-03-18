import React, { useState } from 'react';
import styled from 'styled-components';
import { breakPoints } from '../../../../utils/globalStyles/constants';

import Events from './Events';

const Container = styled.div`
	color: white;
	width: 90%;
	margin: 20px auto;
	max-width: 1000px;
`;

const TimePeriod = styled.div`
	border-bottom: 1px solid white;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	&:last-of-type {
		border-bottom: none;
	}

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 70px;
	}

	animation: zoom-in 1s 1;
	@keyframes zoom-in {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

const Decade = styled.p`
	font-size: 20px;
	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
	}
`;

const PlusIcon = styled.i`
	font-size: 25px;
	cursor: pointer;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
	}
`;

const MinusIcon = styled(PlusIcon)`
	animation: zoom-in 1s 1;
	@keyframes zoom-out {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(0);
		}
	}
`;

const Timeline = () => {
	const [era, setEra] = useState(null);
	const decadeLabels = ["1960's", "1970's", "1980's", "1990's", "2000's"];

	return (
		<Container>
			{decadeLabels.map((year, index) => {
				return (
					<>
						<TimePeriod key={year}>
							<Decade>{year}</Decade>
							{era === index ? (
								<MinusIcon
									className="fa-2x fas fa-minus"
									currentYear={era === index}
									onClick={() => setEra(null)}
								/>
							) : (
								<PlusIcon
									className="fa-2x fas fa-plus"
									onClick={() => setEra(index)}
								/>
							)}
						</TimePeriod>
						{era === index && <Events id={year} />}
					</>
				);
			})}
		</Container>
	);
};

export default Timeline;
