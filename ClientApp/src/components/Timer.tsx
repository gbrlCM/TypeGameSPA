import React, { Component } from 'react';

interface Props {
    timer: number,
    tick: () => void
}

export class Timer extends Component <Props> {

    timeID

    constructor(props) {
        super(props);

        this.state = {time : 0}
    }

    componentDidMount () {
        
        this.timeID = setInterval(
            () => this.props.tick(), 1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.timeID);
    }


    render() {

        return (
        <p style={{
            fontSize: "20px",
            fontWeight: "bolder"
        }}>Timer: {this.props.timer}</p>
        );
    }
}
