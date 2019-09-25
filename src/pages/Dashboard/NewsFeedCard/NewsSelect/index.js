import React from 'react';
import styled from 'styled-components';
import { bool, arrayOf, string, func } from 'prop-types';
import BlurImageLoader from '../../../../components/BlurImageLoader';
import { spacing } from '../../../../assets/globalStyles/constants';

const ModalStyled = styled.div`
	height: ${({ show }) => (show ? '300px' : '0px')};
	position: absolute;
	background: #b2bbc5;
	z-index: 100;
	bottom: 74px;
	width: 90%;
	overflow: scroll;
	text-align: center;
	transition: height 0.35s linear;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;

const Image = styled(BlurImageLoader)`
	margin: ${spacing.s2} ${spacing.s2} 0;
	border-radius: 16px;
	border: 3px solid grey;

	&:hover {
		cursor: pointer;
	}
`;

const NewsSelect = ({ show, handleClick, flags }) => (
	<ModalStyled show={show} aria-label="Country news selector">
		{flags.map(flag => {
			const country = flag.split('media/')[1].split('.')[0];
			return (
				<Image
					onClick={() => handleClick(country)}
					key={flag}
					width="110px"
					height="100px"
					image={flag}
					aria-label={`${country} flag`}
					placeholder={`${country} flag`}
				/>
			);
		})}
	</ModalStyled>
);

NewsSelect.propTypes = {
	show: bool.isRequired,
	flags: arrayOf(string).isRequired,
	handleClick: func
};

NewsSelect.defaultProps = {
	handleClick: () => {}
};

export default NewsSelect;
