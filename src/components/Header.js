import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Header extends Component {
    render(){
        return (
            <Container id="header">
                <Row style={{paddingTop: "3em", paddingBottom: "4em"}}>
                    <Col xs={4} style={{padding: 0}}>
                        <h4 id="title" className="font-weight-bold">
                            <a href="/">kelvin<span>_</span>kellner<span>.</span></a></h4>
                    </Col>
                    <Col className="nav-container" xs={8} style={{padding: 0}}>
                        <ul className="nav nav-header" style={{marginTop: "0.1em"}}>
                            <li className="nav-item active"><a href="/">portfolio.</a></li>
                            <li className="nav-item"><a href="/hobbies/">hobbies.</a></li>
                            <li className="nav-item"><a href="/about/">about.</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header