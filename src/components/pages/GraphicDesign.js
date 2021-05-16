import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

import AroraLogo from '../../assets/images/arora-logo.png';
import DavesAutoLogo from '../../assets/images/daves-auto-service-logo.png';
import KGodlessLogo from '../../assets/images/k-godless-logo.png';

class GraphicDesign extends Component {
    render() {
        return(
            <div id="graphic-design-page" className="main">
            <Container>
                <Row>
                    <Breadcrumb style={{margin: "1em 0 1.8em 0"}}>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Portfolio.</Breadcrumb.Item>
                        <Breadcrumb.Item active>Graphic Design.</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Heading style={{marginBottom: "0.8em"}}>Graphic Design<span>.</span></Heading>
                </Row>
                <Row style={{marginBottom: "0.6em"}}>
                    <p>I have always been a tinkerer. I have a fascination for trying, testing, tweaking, and re-evaluating creative ideas. From when I was a child playing with LEGOs, until more recently as I continue learning how to produce music, build websites, and design products: this vivid curiosity and passion for learning has allowed me to flourish wholeheartedly.</p>
                    <p>Throughout my time at University, I have had the chance to perform countless interviews and usability studies, designed numerous wireframes and mockups, created proposals, and designed many prototypes of various levels of fidelity and functionality – some of which you can find below.</p>
                </Row>
            </Container>
            <ProjectDeck>
                <Project title="ARORA" role="Graphic Designer" year="2019-2021" type="Freelance Contract" tech="Photoshop, Illustrator" imgSrc={AroraLogo} imgAlt="ARORA Logo"
                actions={[{
                        message: "Visit Website",
                        href: "https://www.byarora.com/"
                    }]}>
                    Collaborated with creative director to design vector-art illustrations for logos, branding graphics, and promotional assets. Edited photographs to create digital product mockups.
                </Project>
                <Project title="Dave's Auto Service" role="Digital Media Manager, Web Designer" year="2015-2021" type="Part-Time Employement" tech="Photoshop" imgSrc={DavesAutoLogo} imgAlt="Dave's Auto Service Logo"
                actions={[{
                        message: "Visit Website",
                        href: "https://www.davesautoservice.ca/"
                    }]}>
                    Created designs for logos, business cards, website, road signs, store-front signs, social media posts and more. Managed company's social media presence.
                </Project>
                <Project title="Digital Photo Illustrations" role="Graphic Designer" year="2016-2020" type="Academic Project" tech="Photoshop" imgSrc={KGodlessLogo} imgAlt="K. Godless Instagram Portfolio Logo"
                actions={[{
                        message: "View Instagram Profile",
                        href: "https://www.instagram.com/k.godless/"
                    }]}>
                    Received commission for illustrating minimalist design pieces for local musicians, artists, and small businesses. Promoted my abilities on Instagram and gained a small social media following.
                </Project>
            </ProjectDeck>
        </div>
        );
    }
}

export default GraphicDesign;