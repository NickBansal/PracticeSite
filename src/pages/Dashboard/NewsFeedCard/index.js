import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { fontSize } from '../../../assets/globalStyles/constants/index';
import { HR, LiveText } from '../../../assets/globalStyles/index';
import NewsSelect from './NewsSelect';
import flags from '../../../assets/flags';

const endpoint = 'http://127.0.0.1:8080/';
const socket = socketIOClient(endpoint);

const Title = styled.h1`
display: inline-block;
    font-size: ${fontSize.title};
    margin: 0;
`;

const NewsContainer = styled.div`
  height: 290px;
  overflow: scroll;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    }
`;

const NewsFeedCard = () => {
    const [newsFeed, setNewsFeed] = useState([]);
    const [country, setCountry] = useState('united-kingdom');
    const [modal, setModal] = useState(false);

    useEffect(() => {
        socket.on('FromAPI', (res) => setNewsFeed(res));
        // eslint-disable-next-line
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
            <TitleContainer>
                <Title><LiveText>Live</LiveText> news feed</Title>
                <Image
                    onClick={() => setModal(!modal)}
                    src={currentCountry[0]}
                    alt={`${country} flag`}
                    placeholder={`${country} flag`}
                />
            </TitleContainer>
            <HR />
            <NewsContainer>
                {newsFeed.map((news) => (
                    <NewsItem news={news} key={news.title} />
                ))}
                <NewsSelect show={modal} handleClick={handleClick} />
            </NewsContainer>
            <Button handleClick={() => setModal(!modal)}>{btnText}</Button>
        </Card>
    );
};

export default NewsFeedCard;
