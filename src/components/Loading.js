import React from 'react';
import { Container, Spinner } from 'reactstrap';


const Loading = () => {
    return (
        <Container>
            <br />
            <Spinner
                color="secondary"
                style={{margin: 'auto', display: 'block', width: '60px', height: '60px', borderWidth: '10px'}}
            >
                Loading...
            </Spinner>
            <br />
        </Container>
        
    );
};

export default Loading;