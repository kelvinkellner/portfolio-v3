import React, { Children, Component } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

class ProjectDeck extends Component {
    render() {
        const count = Children.count(this.props.children);
        return(
            <Jumbotron style={{paddingBottom: "3em", paddingTop: "1em"}}>
                <Container className="project-deck">
                    <Row xs={1} lg={count % 3 === 0 || count % 3 === 2 ? 3 : (count % 2 === 0 ? 2 : 1)}>
                    {/* <Row xs={1} sm={count % 3 === 0 ? 3 : (count % 2 === 0 ? 2 : 1)}> */}
                        {this.props.children.map((child) => <Col fluid>{child}</Col>)}
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default ProjectDeck;