import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useForceUpdate from 'use-force-update';
import NewsItem from './NewsItem';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { fontSize } from '../../../assets/globalStyles/constants/index';
import { HR } from '../../../assets/globalStyles/index';
import url from '../../../newsApiConfig';

const Title = styled.h1`
    font-size: ${fontSize.title};
    margin: 0;
`;

const NewsContainer = styled.div`
  height: 290px;
  overflow: scroll;
`;

const NewsFeedCard = () => {
    const [newsFeed, setNewsFeed] = useState([]);

    const forceUpdate = useForceUpdate();

    const handleClick = () => forceUpdate();

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setNewsFeed([res.data.articles]);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <Card fadeIn="1.5s">
            <Title>News feed</Title>
            <HR />
            <NewsContainer>
                {newsFeed[0] && newsFeed[0].map((news) => (
                    <NewsItem news={news} key={news.title} />
                ))}
            </NewsContainer>
            <Button handleClick={handleClick}>Refresh news</Button>
        </Card>
    );
};

export default NewsFeedCard;
