import React, { useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;
const Container = styled.div`
    width: 400px;
    height: 300px;
    background-color: #fff;
`;

export default () => {
    return (
        <Root>
            <Container>Modal Text</Container>
        </Root>
    );
};
