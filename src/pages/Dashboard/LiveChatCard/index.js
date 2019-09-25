import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { fontSize } from '../../../assets/globalStyles/constants/index';
import { HR, LiveText } from '../../../assets/globalStyles/index';
import Overlay from '../../../components/Overlay';


const Title = styled.h1`
    font-size: ${fontSize.title};
    margin: 0;
`;

const BlogCard = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <Card fadeIn="2.0s">
            <Title><LiveText>Live</LiveText> chat</Title>
            <HR />
            <Overlay showOverlay={showOverlay} handleClick={setShowOverlay} />
            <Button onClick={() => setShowOverlay(true)}> Click to enter</Button>
        </Card>
    );
};

export default BlogCard;
