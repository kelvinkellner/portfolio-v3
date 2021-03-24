import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <div id="header">
                <div className="container">
                    <div className="row" style={{padding: "3em 0 4em 0", margin: 0}}>
                        <div className="four columns" style={{float: "left"}}>
                            <h5 id="title" className="font-weight-bold"><a href="/">
                            kelvin<span>_</span>kellner<span>.</span>
                            </a></h5>
                        </div>
                        <div className="eight columns nav-container" style={{float: "right", height: 0}}>
                            <ul className="nav nav-header" style={{marginTop: "0.1em"}}>
                                <li className="nav-item active"><a href="/">portfolio.</a></li>
                                <li className="nav-item"><a href="/hobbies/">hobbies.</a></li>
                                <li className="nav-item"><a href="/about/">about.</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header