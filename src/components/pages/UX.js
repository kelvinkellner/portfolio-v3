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
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>portfolio.</Breadcrumb.Item>
                            <Breadcrumb.Item active>ux design.</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Heading>ux design<span>.</span></Heading>
                    </Row>
                    <Row>
                        <p>paragraph describing my experience and interest in ux...</p>
                    </Row>
                    <Row>
                        <Heading>projects<span>.</span></Heading>
                    </Row>
                </Container>
                <ProjectDeck>
                    <Project title="Source For Sports" role="UX Researcher" type="Academic Project">
                        Intro to UX Design final project - we approached a local Source for Sports to improve their POS system etc.
                    </Project>
                    <Project title="Learning Management System" role="UX Researcher" type="Academic Project">
                        Interaction design final project - we were tasked with creating a tool that helps people who are seeking self-guided learning to stay organized etc.
                    </Project>
                    <Project title="Design For Change Challenge" role="UX Researcher" type="Hackathon Submission">
                        Wilfrid Laurier UX Challenge - we performed user reacher and pitched our solution to a problem regarding how we can create social transformation to improve green behaviour etc.
                    </Project>
                    <Project title="YouX Careers" role="UX Researcher &amp; Software Developer" type="Academic Project">
                        UX Strategy - we performed user-centered research to develop a solution that would teach students interested in UX about the various career opportunities available within the field etc.
                    </Project>
                    <Project title="YouX Careers" role="UX Researcher &amp; Software Developer" type="Academic Project">
                        UX Strategy - we performed user-centered research to develop a solution that would teach students interested in UX about the various career opportunities available within the field etc.
                    </Project>
                </ProjectDeck>
            </div>
        );
    }
}

export default UX;