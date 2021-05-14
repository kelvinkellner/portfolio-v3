import React, { Component } from 'react';

import Alert from 'react-bootstrap/Alert';

class Tag extends Component { 
    render() {
        return(
            <p style={{fontSize: "0.96em", margin: "0.12em"}} className="tag">
                {this.props.children}
            </p>
        );
    }
}

export default Tag;