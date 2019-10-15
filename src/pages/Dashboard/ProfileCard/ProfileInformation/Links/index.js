import React from 'react';
import styled from 'styled-components';
import {
	breakPoints,
	colors,
	transitionSpeed
} from '../../../../../utils/globalStyles/constants';

const LinkIcon = styled.div`
	display: inline-block;
	text-align: center;
`;

const Icon = styled.i`
	color: ${colors.orange};

	&:hover {
		color: #a92301;
	}

	transition: ${transitionSpeed};
`;

const LinksContainer = styled.div`
	position: absolute;
	transform: translate(-50%, -50%);
	top: 300px;
	left: 50%;
	width: 130px;
	display: flex;
	justify-content: space-around;

	@media (min-width: ${breakPoints.mobileMax}) {
		top: 260px;
		left: 190px;
	}
`;

const Links = () => (
	<LinksContainer>
		<LinkIcon>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://www.linkedin.com/in/nick-bansal-69059717a/"
			>
				<Icon className="i-link fab fa-linkedin fa-2x" />
			</a>
		</LinkIcon>
		<LinkIcon>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://github.com/NickBansal"
			>
				<Icon className="i-link fab fa-github fa-2x" />
			</a>
		</LinkIcon>
		<LinkIcon>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://soundcloud.com/bansal321/"
			>
				<Icon className="i-link fab fa-soundcloud fa-2x" />
			</a>
		</LinkIcon>
	</LinksContainer>
);

export default Links;
