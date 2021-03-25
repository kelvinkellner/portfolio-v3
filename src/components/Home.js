import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Home extends Component {
    render() {
        return (
            <Container id="home-page" className="main">
                <Row>
                    <Col md={12} lg={10} xl={9} style={{padding: 0, marginBottom: "3rem"}}>
                        <h3 className="heading">passionate about learning & creating<span>.</span></h3>
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
                    <h4>work<span>.</span></h4>
                </Row>
                <Row>
                    <CardDeck>
                        <Card>
                            <a href="https://www.davesautoservice.ca/" rel="noreferrer" target="_blank">
                                <Card.Img src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Dave's Auto Service</Card.Title>
                                    <Card.Text>Web Development & Graphic Design</Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                        <Card>

                        </Card>
                        <Card>
                            
                        </Card>
                    </CardDeck>
                    <div className="cards">
                        <div className="card">
                            <a href="https://www.davesautoservice.ca/" rel="noreferrer" target="_blank">
                            {/*<img src="/images/daves-auto-logo.png" alt="Dave's Auto Service website logo">*/}
                            <p className="font-weight-bold">Dave's Auto Service</p>
                            <p className="sub-heading">Web Development & Graphic Design</p></a>
                        </div>
                        <div className="card">
                            <a href="https://www.redbubble.com/people/kelvinkellner/shop" rel="noreferrer" target="_blank">
                            {/*<img src="/images/redbubble-logo-notext.png" alt="Redbubble website logo">*/}
                            <p className="font-weight-bold">Redbubble</p>
                            <p className="sub-heading">Graphic Design & Illustration</p></a>
                        </div>
                        <div className="card">
                            <a href="https://www.aroraapparel.com/collections/all" rel="noreferrer" target="_blank">
                            {/*<img src="/images/arora-logo.png" alt="Arora clothing brand logo">*/}
                            <p className="font-weight-bold">Arora</p>
                            <p className="sub-heading">Graphic Design</p></a>
                        </div>
                    </div>
                </Row>
                <Row>
                    <h4>learn<span>.</span></h4>
                    <div className="cards">
                        <div className="card">
                            <a href="https://drive.google.com/file/d/1cupNFh9V9XpJgF6jFdzHgui256CKeovY/view?usp=sharing" rel="noreferrer" target="_blank">
                            {/*<img src="/images/ux-icon.jpg" alt="User-Experience design icon" />*/}
                            <p className="font-weight-bold">LMS Case Study</p>
                            <p className="sub-heading">Interaction Design</p></a>
                        </div>
                        <div className="card">
                            <a href="https://drive.google.com/file/d/1luVjh0DA4SOoQiGyTD-xt7OITvgOq1cV/view?usp=sharing" rel="noreferrer" target="_blank">
                            {/*<img src="/images/source-for-sports-logo.png" alt="Source for Sports logo" />*/}
                            <p className="font-weight-bold">SFS Case Study</p>
                            <p className="sub-heading">User-Experience Design</p></a>
                        </div>
                    </div>
                </Row>
                <Row>
                    <h4>play<span>.</span></h4>
                    <div className="cards">
                        <div className="card">
                            <a href="https://www.flow.page/kelvinkounter" rel="noreferrer" target="_blank">
                            {/*<img src="/images/music-mixing-icon.png" alt="illustration of audio mixing faders" />*/}
                            <p className="font-weight-bold">Independent</p>
                            <p className="sub-heading">Digital Music Production</p></a>
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Home;