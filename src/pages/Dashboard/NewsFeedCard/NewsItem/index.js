import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import BlurImageLoader from '../../../../components/BlurImageLoader';

const Container = styled.div`
    display: flex;
    margin-bottom: 8px;
    
    &:hover {
        cursor: pointer;
        background: lightgrey
    }

    transition: 0.3s
`;

const Image = styled(BlurImageLoader)`
    margin-right: 16px;
`;

const Title = styled.p`
    margin: 0;
    font-size: 13px;
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
    font-size: 13px;
    margin: 0;
    text-decoration: underline;
    color: slategrey;

    &:hover {
        cursor: pointer
    }
`;

const NewsItem = ({ news }) => (
    <Container onClick={() => window.open(news.url)}>
        <Image
            width="110px"
            height="120px"
            image={news.urlToImage}
            alt="Profile picture"
            placeholder="Profile picture"
        />
        <Information>
            <Title>{news.title}</Title>
            <Links>Read more</Links>
        </Information>
    </Container>
);

NewsItem.propTypes = {
    news: shape({
        title: string,
        urlToImage: string,
        url: string,
    }).isRequired,
};

export default NewsItem;
