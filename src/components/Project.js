import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

class Project extends Component {
    render() {
        return(
            <Container fluid className="project">
                <h4>{this.props.title}</h4>
                <h5>{this.props.role}</h5>
                <p>{this.props.children}</p>
            </Container>
        );
    }
}

export default Project;