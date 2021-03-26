import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import pic from '../assets/images/kelvin-prom.jpg'

class About extends Component {
    render() {
        return(
            <Container id="about-page" className="main">
                <Row>
                    <Col xs={12} sm={3} style={{padding: 0, marginBottom: "3em"}}>
                        <Image src={pic} fluid></Image>
                    </Col>
                    <Col xs={12} sm={9} style={{marginBottom: "3em"}}>
                        <h3 className="heading">hi there<span>,</span></h3>
                        <p></p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;