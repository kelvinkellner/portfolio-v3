import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Home extends Component {
    render() {
        return (
            <Container id="home-page" className="main">
                <Row>
                    <Col md={12} lg={10} xl={9} style={{padding: 0, marginBottom: "3rem"}}>
                        <h3 className="heading">passionate about learning <span>&</span> creating<span>.</span></h3>
                        <p>
                            Hello! <svg id="smiley" style={{visibility: "hidden", margin: "-16px"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.331 1.465 2.827 4 6.001 4 3.134 0 5.666-2.521 5.999-4zm0-3.998l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002zm-7 0l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z"/></svg>
                            I am a software developer & graphic designer currently studying Computer Science & User-Experience Design at Wilfrid Laurier University. 
                            I have an affection for building new skills and helping others grow.</p>
                        <p>
                            Feel free to browse through some of the projects I have been working on, and do not feel shy to <a href="mailto:kelvinkellner123@gmail.com">contact me</a>.</p>
                    </Col>
                </Row>
                <Row>
                    <h3 className="heading">what would you like to see<span>?</span></h3>
                </Row>
                <Row xs={1} md={3}>
                    <Col fluid><Button variant="section-selector"><Link to="/ux"><h3>ux design</h3></Link></Button></Col>
                    <Col fluid><Button variant="section-selector"><Link to="/dev"><h3>software dev</h3></Link></Button></Col>
                    <Col fluid><Button variant="section-selector"><Link to="/graphics"><h3>graphic design</h3></Link></Button></Col>
                </Row>
            </Container>
        );
    }
}

export default Home;