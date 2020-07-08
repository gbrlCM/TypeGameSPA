import React, {Component} from 'react';

interface Props {

}

interface State {

    time: number
}


export class Timer extends Component <Props,State> {

    timeID

    constructor(props) {
        super(props);

        this.state = {time : 0}
    }

    componentDidMount () {
        
        this.timeID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.timeID);
    }

    tick () {
        this.setState({time: this.state.time + 1})
    }

    render() {

        return (
        <p className="timer-Stamp">{this.state.time}</p>
        );
    }
}