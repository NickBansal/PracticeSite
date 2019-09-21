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
    const [newsFeed, setNewsFeed] = useState([]);

    const handleClick = () => { };

    useEffect(() => {
        const socket = socketIOClient(endpoint);
        socket.on('FromAPI', (res) => setNewsFeed(res));
        // eslint-disable-next-line
    }, []);

    console.log(newsFeed);

    return (
        <Card fadeIn="1.5s">
            <Title>News feed</Title>
            <HR />
            <NewsContainer>
                {newsFeed.map((news) => (
                    <NewsItem news={news} key={news.title} />
                ))}
            </NewsContainer>
            <Button handleClick={handleClick}>Refresh news</Button>
        </Card>
    );
};

export default NewsFeedCard;

/*
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          {response
              ? <p>
                The temperature in Florence is: {response} °F
              </p>
              : <p>Loading...</p>}
        </div>
    );
  }
*/
