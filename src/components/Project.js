import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Tag from './Tag';

class Project extends Component {
    render() {
        return(
            <Container className="project card">
                <Col>
                    <Row>
                        <h5 style={{marginRight: "0.24em"}}>{this.props.title}</h5>
                        <Tag>({this.props.year})</Tag>
                    </Row>
                    <Row>
                        <h6 style={{fontWeight: 500, margin: "0.22em 0.22em 0.8em 0"}}>{this.props.role}</h6>
                        {this.props.tech === undefined ? <></> : <Tag>– {this.props.tech}</Tag>}
                    </Row>
                    <Row>
                        <p style={{fontSize: "1rem", marginBottom: "0.8em"}}>{this.props.children}</p>
                    </Row>
                    <Row>
                        <Col style={{padding: 0}}><Tag>{this.props.type}</Tag></Col>
                        <Col style={{padding: 0}}><Button>Hello</Button></Col>
                    </Row>
                </Col>
            </Container>
        );
    }
}

export default Project;