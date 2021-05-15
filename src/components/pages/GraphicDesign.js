import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Heading from '../Heading';
import Project from '../Project';
import ProjectDeck from '../ProjectDeck';

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
                    Worked with a partner to design and prototype a modular organizational tool similar to bullet journals for students pursuing self-paced learning options.
                </Project>
                <Project title="Dave's Auto Service" role="Web Designer &amp; Digital Media Manager" year="2015-2020" type="Part-Time Employement" tech="Wix Editor, Adobe Suite"
                actions={[{
                        message: "Visit Website",
                        href: "https://www.davesautoservice.ca/"
                    }]}>
                    Designed a visually appealing website for customers to quickly discover important information about the business.
                </Project>
                <Project title="LIT: Learn to Invest Today" role="UX Researcher &amp; Software Developer" year="2019" type="Hackathon Submission" tech="React JS, CSS, Figma"
                actions={[{
                        message: "View Slide Deck",
                        href: "https://drive.google.com/file/d/19IiIPuUV3Lje9slTnqC2WvaPvlL5MjDb/view?usp=sharing"
                    }]}>
                    Prototyped and pitched an idea for an online educational tool that teaches new investors all the basics of investing.
                </Project>
                <Project title="Let's Get This Bread" role="Game Developer" year="2019" type="Academic Project" tech="Java"
                actions={[{
                        message: "View on GitHub",
                        href: "https://github.com/kelvinkellner/Lets-Get-This-Bread"
                    }]}>
                    Planned and prototyped a simple 2D platformer game where you play as a pixel art duck who is adamantly in search of bread. Implemented in Java.
                </Project>
            </ProjectDeck>
        </div>
        );
    }
}

export default GraphicDesign;