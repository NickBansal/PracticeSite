import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { fontSize } from '../../../assets/globalStyles/constants/index';
import { HR } from '../../../assets/globalStyles/index';
import LiveText from '../../../components/LiveText';
import NewsSelect from './NewsSelect';

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
    const [newsFeed, setNewsFeed] = useState([]);

    const [modal, setModal] = useState(false);

    useEffect(() => {
        const socket = socketIOClient(endpoint);
        socket.on('FromAPI', (res) => setNewsFeed(res));
        // eslint-disable-next-line
    }, []);

    return (
        <Card fadeIn="1.5s">
            <Title><LiveText /> news feed</Title>
            <HR />
            <NewsContainer>
                {newsFeed.map((news) => (
                    <NewsItem news={news} key={news.title} />
                ))}
                <NewsSelect show={modal} />
            </NewsContainer>
            <Button handleClick={() => setModal(!modal)}>Select news</Button>
        </Card>
    );
};

export default NewsFeedCard;
