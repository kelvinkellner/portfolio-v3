import React, { Component } from 'react';

import Alert from 'react-bootstrap/Alert';

class Tag extends Component { 
    render() {
        return(
            <Alert variant="light" className="tag">
                {this.props.children}
            </Alert>
        );
    }
}

export default Tag;