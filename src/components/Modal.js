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
    position: relative;
    width: 400px;
    height: 300px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
`;
const Closer = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export default props => {
    const { isActived, handleModal } = props;

    return (
        <>
            {isActived ? (
                <Root>
                    <Container>
                        Modal Text
                        <Closer onClick={() => handleModal(false)}>
                            close
                        </Closer>
                    </Container>
                </Root>
            ) : (
                ''
            )}
        </>
    );
};
