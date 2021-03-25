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
                    <Col md={12} lg={2} xl={3} style={{padding: 0, marginBottom: "3rem"}}>
                        <Image src={pic} fluid></Image>
                    </Col>
                    <Col md={12} lg={10} xl={9} style={{marginBottom: "3rem"}}>
                        <h3 className="heading">hi there<span>,</span></h3>
                        <p></p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;