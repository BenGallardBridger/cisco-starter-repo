import React, { Component } from 'react';
import './Exhibit.css';

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
                <h1>{this.props.exhibitHeader}</h1>
                <div className='exhibitChildren'>{this.props.children}</div>
            </div>
        );
    }
}

export default Exhibit;