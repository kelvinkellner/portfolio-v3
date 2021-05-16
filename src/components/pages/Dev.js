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
                    <p>Puzzles have always fascinated me. From when I was a kid playing with Rubik's Cube, playing challenging board games, or learning to code – I have never been the type of person to shy away from challenges. I am a problem-solver after all. I love working with others to analyse issues, brainstorm ideas, and begin implementing solutions.</p>
                    <p>University has given me the opportunity to learn tons of new information about mathematics, computing, and algorithms. I have also gained a strong interest in UI/UX Design and creating products that are easy to use and serve some benefit to users. I hope to continue exploring the worlds of software, website, and mobile development in the years to come. Until then, you can find some of the past projects I have worked on below.</p>
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

export default Dev;