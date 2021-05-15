import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

class Dev extends Component {
    render() {
        return(
            <div id="dev-page" className="main">
            <Container>
                <Row>
                    <Breadcrumb style={{margin: "1em 0 1.8em 0"}}>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Portfolio.</Breadcrumb.Item>
                        <Breadcrumb.Item active>Development.</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Heading>Software <span>&amp;</span> Website Development<span>.</span></Heading>
                </Row>
                <Row>
                    <p>I have always been a tinkerer. I have a fascination for trying, testing, tweaking, and re-evaluating creative ideas. From when I was a child playing with LEGOs, until more recently as I continue learning how to produce music, build websites, and design products: this vivid curiosity and passion for learning has allowed me to flourish wholeheartedly.</p>
                    <p>Throughout my time at University, I have had the chance to perform countless interviews and usability studies, designed numerous wireframes and mockups, created proposals, and designed many prototypes of various levels of fidelity and functionality – some of which you can find below...</p>
                </Row>
                <Row style={{marginTop: "2em"}}>
                    <Heading style={{marginBottom: "0.8em"}}>Dev Projects<span>.</span></Heading>
                </Row>
            </Container>
            <ProjectDeck>
                <Project title="Portfolio Website" role="Front End Software Developer" year="2020-2021" type="Personal Project" tech="React JS, HTML, CSS"
                actions={[{
                        message: "View on GitHub",
                        href: "https://github.com/kelvinkellner/portfolio-v3"
                    }]}>
                    Designed and implemented a digital portfolio website for hosting academic and personal projects. Website made with React JS, React Bootstrap, and CSS.
                </Project>
                <Project title="YouX Careers" role="Software Developer &amp; UX Researcher" year="2021" type="Academic Project" tech="React JS, HTML, CSS"
                actions={[{
                        message: "View on GitHub",
                        href: "https://github.com/kelvinkellner/youx-careers"
                    }, {
                        message: "Launch Prototype",
                        href: "https://youx-careers.vercel.app/"
                    }]}>
                    Worked on a team of 4 to design and implement a prototype for an online educational tool that matches students to UX careers that fit their skills and interests.
                </Project>
                <Project title="Learning Management System" role="Software Developer &amp; UX Researcher" year="2020" type="Academic Project" tech="HTML, CSS, JavaScript"
                actions={[{
                        message: "View on GitHub",
                        href: "https://github.com/kelvinkellner/lms-prototype"
                    }, {
                        message: "Launch Prototype",
                        href: "https://lms-prototype.vercel.app/"
                    }]}>
                    Worked with a partner to research and design a digital organizational tool for students pursuing self-paced learning options.
                </Project>
                <Project title="Source For Sports" role="UX Researcher" year="2019" type="Academic Project" tech="C#"
                actions={[{
                        message: "View on GitHub",
                        href: ""
                    }, {
                        message: "View Slide Deck",
                        href: "https://drive.google.com/file/d/1DJ-hISyE38oaiGKANxGW_0BiogmPG9Gy/view?usp=sharing"
                    }]}>
                    Worked on a team of 5 to research and design a new Point-of-Sale system that reduced pain points for employees during checkout.
                </Project>
                <Project title="Dave's Auto Service" role="Web Designer &amp; Digital Media Manager" year="2015-2020" type="Part-Time Employement" tech="Wix Editor, Adobe Suite"
                actions={[{
                        message: "Visit Website",
                        href: "https://www.davesautoservice.ca/"
                    }]}>
                    Worked on a team of 3 to resarch, plan, and pitch a collaborative classroom game that creates social transformation by teaching children to engage in green behaviour.
                </Project>
            </ProjectDeck>
        </div>
        );
    }
}

export default Dev;