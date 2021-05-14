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
                    <Project title="YouX Careers" role="UX Researcher &amp; Software Developer" year="2021" type="Academic Project" tech="React JS, HTML, CSS">
                        Worked on a team of 4 to create an online educational tool that matched high school students with UX careers that fit their skills and interests.
                    </Project>
                    <Project title="Design For Change Challenge" role="UX Researcher" year="2021" type="Hackathon Submission">
                        Worked on a team of 3 to resarch, plan, and pitch a collaborative classroom game that creates social transformation by teaching children to engage in green behaviour.
                    </Project>
                    <Project title="Learning Management System" role="UX Researcher" year="2020" type="Academic Project" tech="HTML, CSS, JavaScript">
                        Worked with a partner to research and design a digital organizational tool for students pursuing self-paced learning options.
                    </Project>
                    <Project title="Source For Sports" role="UX Researcher" year="2019" type="Academic Project" tech="C#">
                        Worked on a team of 5 to research and design a new Point-of-Sale system that reduced pain points for employees during checkout.
                    </Project>
                </ProjectDeck>
            </div>
        );
    }
}

export default UX;