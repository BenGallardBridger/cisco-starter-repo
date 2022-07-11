import React, { Component } from 'react';

class Websock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: props.socket,
            timeSince: null
        };
    }



    componentDidMount() {
        var comp = this;
        function setTime(time){
            comp.setState({timeSince: time});
        }
        var W3CWebSocket = require('websocket').w3cwebsocket;

        var client = new W3CWebSocket(this.state.socket, 'echo-protocol');

        client.onerror = function() {
            console.log('Connection Error');
        };

        client.onopen = function() {
            console.log('WebSocket Client Connected');
        };

        client.onclose = function() {
            console.log('echo-protocol Client Closed');
        };
        let difference = null;
        client.onmessage = function(e) {
            if (typeof e.data === 'string') {
                var currentDate = Date.now();
                var packetTime = parseInt(e.data);
                difference = currentDate-packetTime;
                setTime(difference);
            }
        };
    }
    render() {
        
        return (
            <span className="Websock">
                {this.state.timeSince}
            </span>
        );
    }
}

export default Websock;