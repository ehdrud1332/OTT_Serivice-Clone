import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  // vh : 뷰높이
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 font-size: 40px;
 margin-top: 50px;
`;


export default () => (
    <Container>
        <span role="img" aria-label="loading">
            ⏰
        </span>
    </Container>
);