import React, { useEffect } from 'react';

interface Props {
    timer: number,
    tick: () => void
}

// export class Timer extends Component <Props,State> {

//     timeID

//     constructor(props) {
//         super(props);

//         this.state = {time : 0}
//     }

//     componentDidMount () {
        
//         this.timeID = setInterval(
//             () => this.tick(), 1000
//         );
//     }

//     componentWillUnmount () {
//         clearInterval(this.timeID);
//     }

//     tick () {
//         this.setState({time: this.state.time + 1})
//     }

//     render() {

//         return (
//         <p style={{
//             fontSize: "20px",
//             fontWeight: "bolder"
//         }}>Timer: {this.state.time}</p>
//         );
//     }
// }

export const Timer: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        const interval = setInterval(() => props.tick, 1000);
        return () => clearInterval(interval);
    },[props.tick])

    return (
        <div>
            <p style={{
                fontSize: "20px",
                fontWeight: "bolder"
            }}>
                Timer: {props.timer}
            </p>
        </div>
    );
}