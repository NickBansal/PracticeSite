import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { LiveText } from '../../../assets/globalStyles/index';
import Overlay from '../../../components/Overlay';

const Info = styled.div`
    height: 300px;
    width: 500px;
    background: yellow;
`;

const BlogCard = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <Card fadeIn="2.0s">
            <Card.Title><LiveText>Live</LiveText> chat</Card.Title>

            <Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
                <Info />
            </Overlay>
            <Button onClick={() => setShowOverlay(true)}> Click to enter</Button>
        </Card>
    );
};

export default BlogCard;
