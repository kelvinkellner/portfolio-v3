import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import Tag from './Tag';

class Project extends Component {
    render() {
        return(
            <Container className="project card">
                <h4>{this.props.title}</h4>
                <h5 style={{fontWeight: 500}}>{this.props.role}</h5>
                <p>{this.props.children}</p>
                <Tag>{this.props.type}</Tag>
            </Container>
        );
    }
}

export default Project;