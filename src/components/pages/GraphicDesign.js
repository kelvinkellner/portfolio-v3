import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';

class GraphicDesign extends Component {
    render() {
        return(
            <Container id="ux-page" className="main">
                <Row>
                    <Heading>Graphic Design<span>.</span></Heading>
                </Row>
            </Container>
        );
    }
}

export default GraphicDesign;