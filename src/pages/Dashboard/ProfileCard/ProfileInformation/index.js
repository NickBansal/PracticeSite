import React from 'react';
import styled from 'styled-components';
import nc from '../../../../assets/profile/nc.JPG';
import background from '../../../../assets/profile/background.JPG';
import {
	breakPoints,
	spacing
} from '../../../../assets/globalStyles/constants';

const Profile = styled.div`
	background: white;
	border-radius: 8px;
	border: 5px solid white;
`;

const Image = styled.img`
	width: 245px;
	height: 170px;
	border-radius: 50px;
	margin-top: 50px;
	border: 5px solid white;

	@media (min-width: ${breakPoints.mobileMax}) {
		margin-left: 50px;
	}
`;

const Header = styled.div`
	background-image: url(${background});
	text-align: center;
	height: 150px;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;

	@media (min-width: ${breakPoints.mobileMax}) {
		text-align: left;
	}
`;

const Title = styled.h1`
	display: block;
	position: relative;
	top: -20px;
	left: 0;
	font-size: 1.5rem;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 2.5rem;
		display: inline-block;
		left: 60px;
		top: -30px;
	}
`;

const Content = styled.div`
	background-image: linear-gradient(white, white, #c27f82);
	height: 350px;
	border-bottom-right-radius: 8px;
	border-bottom-left-radius: 8px;
`;

const LinkIcon = styled.div`
	display: inline-block;
	text-align: center;
`;

const Icon = styled.i`
	color: #ff3300;

	&:hover {
		color: #a92301;
	}

	transition: 0.3s;
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

const SkillsContainer = styled.div`
	position: absolute;
	width: 100%;
	text-align: center;
	top: 66%;

	@media (min-width: ${breakPoints.mobileMax}) {
		top: 60%;
	}
`;

const Skills = styled.i`
	color: #ff3300;
	margin: ${spacing.s1};

	&:nth-child(1) {
		font-size: 40px;
	}
	&:nth-child(2) {
		font-size: 60px;
	}
	&:nth-child(3) {
		font-size: 80px;
	}
	&:nth-child(4) {
		font-size: 60px;
	}
	&:nth-child(5) {
		font-size: 40px;
	}

	@media (min-width: ${breakPoints.mobileMax}) {
		&:nth-child(1) {
			font-size: 60px;
		}
		&:nth-child(2) {
			font-size: 80px;
		}
		&:nth-child(3) {
			font-size: 105px;
		}
		&:nth-child(4) {
			font-size: 80px;
		}
		&:nth-child(5) {
			font-size: 60px;
		}
	}
`;

const ContactContainer = styled.div`
	width: 100%;
	height: 60px;
	position: absolute;
	bottom: 0;
	left: 0;
	text-align: center;
`;

const Contact = styled.i`
	color: white;
	font-size: 30px;
	margin: auto 20px;

	&:hover {
		cursor: pointer;
	}
`;

const ProfileInformation = () => (
	<Profile>
		<Header>
			<Image src={nc} alt="Me" />
			<Title>Nick Bansal</Title>
			{/* <Job>Junior web developer</Job> */}
		</Header>
		<Content>
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
						href="https://codepen.io/NickyBee/"
					>
						<Icon className="i-link fab fa-codepen fa-2x" />
					</a>
				</LinkIcon>
			</LinksContainer>
			<SkillsContainer>
				<Skills className="i-link fab fa-css3" />
				<Skills className="i-link fab fa-react" />
				<Skills className="i-link fab fa-js-square" />
				<Skills className="i-link fab fa-node" />
				<Skills className="i-link fab fa-python" />
			</SkillsContainer>
			<ContactContainer>
				<Contact className="i-link far fa-envelope-open" />
				<Contact className="i-link fas fa-phone" />
			</ContactContainer>
		</Content>
	</Profile>
);

export default ProfileInformation;
