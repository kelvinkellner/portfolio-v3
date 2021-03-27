import React, { Component } from 'react';

class Heading extends Component {
    render(){
        return (
            <h3 className="heading">{this.props.children}</h3>
        );
    }
}

export default Heading;