import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';

class Dev extends Component {
    render() {
        return(
            <Container id="dev-page" className="main">
                <Row>
                    <Heading>software development<span>.</span></Heading>
                </Row>
            </Container>
        );
    }
}

export default Dev;