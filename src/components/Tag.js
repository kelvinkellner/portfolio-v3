import React, { Component } from 'react';

import Alert from 'react-bootstrap/Alert';

class Tag extends Component { 
    render() {
        return(
            <Alert variant="light" className="tag" style={{fontSize: "0.95rem"}}>
                {this.props.children}
            </Alert>
        );
    }
}

export default Tag;