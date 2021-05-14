import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import Tag from './Tag';

class Project extends Component {
    render() {
        return(
            <Container className="project card">
                <h5>{this.props.title}</h5>
                <h6 style={{fontWeight: 500}}>{this.props.role} – {this.props.year}</h6>
                <p style={{fontSize: "1rem"}}>{this.props.children}</p>
                <Tag>{this.props.type}</Tag>
            </Container>
        );
    }
}

export default Project;