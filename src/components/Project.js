import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Tag from './Tag';

class Project extends Component {
    render() {
        const actions = this.props.actions;
        return(
            <Container className="project card">
                <Col>
                    <Row>
                        <h5 style={{marginRight: "0.24em", marginBottom: "-0.12em"}}>{this.props.title}</h5>
                    </Row>
                    <Row style={{marginBottom: "0.48em", marginLeft: "-1.024em"}}>
                        <Tag>{this.props.type}, {this.props.year}</Tag>
                    </Row>
                    <Row>
                        <h6 style={{fontWeight: 500, margin: "0.22em 0.22em 0.8em 0"}}>{this.props.role}</h6>
                        {this.props.tech === undefined ? <></> : <Tag>– {this.props.tech}</Tag>}
                    </Row>
                    <Row>
                        <p style={{fontSize: "1rem", marginBottom: 0}}>{this.props.children}</p>
                    </Row>
                    <hr />
                    {actions === undefined ? <></> : (
                        <Row>
                            {actions.map((a, i) => i === actions.length-1 ?
                                <Col style={{padding: 0, paddingRight: 0}}><a className="project-link" href={a.href} target="_blank" rel="noreferrer"><Button className="btn-project-link" variant="primary" block>{a.message}</Button></a></Col>
                            :
                                <Col style={{padding: 0, paddingRight: "0.8em"}}><a className="project-link" href={a.href} target="_blank" rel="noreferrer"><Button className="btn-project-link" variant="secondary" block>{a.message}</Button></a></Col>
                            )}
                        </Row>
                    )}
                </Col>
            </Container>
        );
    }
}

export default Project;