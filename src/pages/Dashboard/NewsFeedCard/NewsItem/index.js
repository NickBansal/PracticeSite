import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import BlurImageLoader from '../../../../components/BlurImageLoader';
import {
	spacing,
	transitionSpeed,
	fontSize
} from '../../../../assets/globalStyles/constants';
import placeholderImage from '../../../../assets/news/placeholder.png';

const Container = styled.div`
	display: flex;
	margin-bottom: ${spacing.s1};

	&:hover {
		cursor: pointer;
		background: lightgrey;
	}

	transition: ${transitionSpeed};
`;

const Image = styled(BlurImageLoader)`
	margin-right: ${spacing.s2};
`;

const Title = styled.p`
	margin: 0;
	font-size: ${fontSize.small};
	text-align: left;
	height: 100px;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Information = styled.div`
	display: flex;
	flex-direction: column;
`;

const Links = styled.p`
	font-size: ${fontSize.small};
	margin: 0;
	text-decoration: underline;
	color: slategrey;

	&:hover {
		cursor: pointer;
	}
`;

const NewsItem = ({ news: { urlToImage, url, title } }) => (
	<Container onClick={() => window.open(url)} aria-label="News headline">
		<Image
			width="110px"
			height="120px"
			image={urlToImage || placeholderImage}
			alt="Profile picture"
			placeholder="Profile picture"
		/>
		<Information>
			<Title>{title}</Title>
			<Links>Read more</Links>
		</Information>
	</Container>
);

NewsItem.propTypes = {
	news: shape({
		title: string,
		urlToImage: string,
		url: string
	}).isRequired
};

export default NewsItem;
