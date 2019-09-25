import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { LiveText } from '../../../assets/globalStyles/index';
import NewsSelect from './NewsSelect';
import flags from '../../../assets/flags';

const endpoint = 'http://127.0.0.1:8080/';
const socket = socketIOClient(endpoint);

const NewsContainer = styled.div`
  height: 290px;
  overflow: scroll;
`;

const Image = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    position: absolute;
    right: 16px;
    &:hover {
        cursor: pointer;
    }
`;

const NewsFeedCard = () => {
    const [newsFeed, setNewsFeed] = useState([]);
    const [country, setCountry] = useState('united-kingdom');
    const [modal, setModal] = useState(false);

    useEffect(() => {
        socket.on('FromAPI', setNewsFeed);
        // eslint-disable-next-line

        return () => socket.off('FromAPI', setNewsFeed);
    }, []);

    const btnText = modal ? 'Show news' : 'Select country';

    const handleClick = (value) => {
        setModal(false);
        setCountry(value);

        socket.emit('sendCountry', value.replace(new RegExp('\\-', 'g'), ''));
    };

    const currentCountry = flags.filter((flag) => JSON.stringify(flag).includes(country));

    return (
        <Card fadeIn="1.5s">
            <Card.Title><LiveText>Live</LiveText> chat

                <Image
                    onClick={() => setModal(!modal)}
                    src={currentCountry[0]}
                    alt={`${country} flag`}
                    placeholder={`${country} flag`}
                />

            </Card.Title>
            <NewsContainer>
                {newsFeed.map((news) => (
                    <NewsItem news={news} key={news.title} />
                ))}
                <NewsSelect show={modal} handleClick={handleClick} flags={flags} />
            </NewsContainer>
            <Button onClick={() => setModal(!modal)}>{btnText}</Button>
        </Card>
    );
};

export default NewsFeedCard;
