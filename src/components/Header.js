import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import NavLink from 'react-router-dom/NavLink';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Header extends Component {
    render(){
        return (
            <Container id="header">
                <Row>
                    <Col style={{padding: 0, maxWidth: "162px"}}>
                        <h4 id="title"><Link exact to="/">Kelvin<span>_</span>Kellner<span>.</span></Link></h4>
                    </Col>
                    <Col style={{padding: 0}} fluid>
                        <ul className="nav nav-header" style={{marginTop: "0.2em"}}>
                            <li className="nav-item"><NavLink exact to="/" activeClassName="active">Portfolio.</NavLink></li>
                            <li className="nav-item"><NavLink to="/hobbies" activeClassName="active">Hobbies.</NavLink></li>
                            <li className="nav-item"><NavLink to="/about" activeClassName="active">About Me.</NavLink></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header