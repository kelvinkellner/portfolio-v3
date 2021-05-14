import React, { Component } from 'react';
import Link from 'react-router-dom/Link'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

class UX extends Component {
    render() {
        return(
            <div id="ux-page" className="main">
                <Container>
                    <Row>
                        <Breadcrumb style={{margin: "1em 0"}}>
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Portfolio.</Breadcrumb.Item>
                            <Breadcrumb.Item active>UX Design.</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Heading>User<span>-</span>Experience Design<span>.</span></Heading>
                    </Row>
                    <Row>
                        <p>I love design thinking and the concept of user-centric design. The idea of putting the user first seems so simple, but it is surprising to see just how much change is possible when businesses start with this principle at their core.</p>
                        <p>I have completed 4 of 6 courses needed for my UX minor so far, including: Design Thinking, Information Design, Interaction Design, and UX Strategy. I am also currently enrolled in a course on Research in UX, and am very excited to learn about experimental design and research methods.</p>
                        <p>Throughout my time at University, I have had the chance to perform countless interviews and usability studies, designed numerous wireframes and mockups, created proposals, and designed many prototypes of various levels of fidelity and functionality – each of which you can find below...</p>
                    </Row>
                    <Row style={{marginTop: "2em"}}>
                        <Heading>UX Projects<span>.</span></Heading>
                    </Row>
                </Container>
                <ProjectDeck>
                    <Project title="YouX Careers" role="UX Researcher &amp; Software Developer" year="2021" type="Academic Project">
                        UX Strategy - we performed user-centered research to develop a solution that would teach students interested in UX about the various career opportunities available within the field etc.
                    </Project>
                    <Project title="Design For Change Challenge" role="UX Researcher" year="2021" type="Hackathon Submission">
                        Wilfrid Laurier UX Challenge - we performed user reacher and pitched our solution to a problem regarding how we can create social transformation to improve green behaviour etc.
                    </Project>
                    <Project title="Learning Management System" role="UX Researcher" year="2020" type="Academic Project">
                        Interaction design final project - we were tasked with creating a tool that helps people who are seeking self-guided learning to stay organized etc.
                    </Project>
                    <Project title="Source For Sports" role="UX Researcher" year="2019" type="Academic Project">
                        Intro to UX Design final project - we approached a local Source for Sports to improve their POS system etc.
                    </Project>
                </ProjectDeck>
            </div>
        );
    }
}

export default UX;