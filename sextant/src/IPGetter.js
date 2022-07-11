import React, { Component } from 'react';

class IP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: props.link,
            ip: null
        };
    }

    componentDidMount() {
        fetch(this.state.link)
            .then(response => response.json())
            .then(data => this.setState({ ip: data.ip }));
    }

    render() {
        return (
            <span className="IP">
                {this.state.ip}
            </span>
        );
    }
}

export default IP;