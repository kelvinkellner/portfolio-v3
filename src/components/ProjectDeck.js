import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

class ProjectDeck extends Component {
    render() {
        return(
            <Container fluid xs={this.props.xs} sm={this.props.sm} md={this.props.md} lg={this.props.lg} xl={this.props.xl}>
                {this.props.children}
            </Container>
        );
    }
}

export default ProjectDeck;