import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { fontSize } from '../../../assets/globalStyles/constants/index';
import { HR } from '../../../assets/globalStyles/index';

const endpoint = 'http://127.0.0.1:8080/';

const Title = styled.h1`
    font-size: ${fontSize.title};
    margin: 0;
`;

const NewsContainer = styled.div`
  height: 290px;
  overflow: scroll;
`;

const NewsFeedCard = () => {
    const [newsFeed, setNewsFeed] = useState({ res: [], loading: true });

    useEffect(() => {
        const socket = socketIOClient(endpoint);
        socket.on('FromAPI', (res) => setNewsFeed({ res, loading: false }));
        // eslint-disable-next-line
    }, []);

    const { res, loading } = newsFeed;

    return (
        <Card fadeIn="1.5s">
            <Title>News feed</Title>
            <HR />
            <NewsContainer>
                {loading && <p>Loading</p>}
                {res.map((news) => (
                    <NewsItem news={news} key={news.title} />
                ))}
            </NewsContainer>
            <Button>Refresh news</Button>
        </Card>
    );
};

export default NewsFeedCard;
