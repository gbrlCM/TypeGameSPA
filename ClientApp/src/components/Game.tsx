import React, {Component} from 'react';
import {PlayerInputNameGroup} from './GamePlayerName'
import { GameTextField } from './GameTextField';

interface Props {

}

interface State {
    frase: string,
    nomePlayer: string,
    toggleGameArea: boolean
    timer: number
}

export class Game extends Component<Props, State> {
    static displayName = Game.name;

    constructor(props){
        super(props);

        this.toggleGameArea = this.toggleGameArea.bind(this);
        this.changePlayerName = this.changePlayerName.bind(this);
        this.timerTick = this.timerTick.bind(this);

        this.state = {
            frase: "I think the only card she has is the Lorem card. I’m the best thing that ever happened to placeholder text. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. Despite the constant negative ipsum covfefe.",
            nomePlayer: '',
            toggleGameArea: false,
            timer: 0
        };
    }

    toggleGameArea() {

        this.setState({toggleGameArea: !this.state.toggleGameArea})
    }

    changePlayerName (name: string) {

        this.setState({nomePlayer: name})
    }

    timerTick() {
        if (this.state.toggleGameArea === true) {
            this.setState({timer: this.state.timer + 1})
        }
        else {
            this.setState({timer: 0})
        }
    }

    render() {
        return (
            <div>
                <PlayerInputNameGroup
                    name={this.state.nomePlayer}
                    setName={this.changePlayerName}
                    toggle={this.toggleGameArea}
                    toggleVal={this.state.toggleGameArea}
                />
                <GameTextField
                    frase={this.state.frase}
                    toggle={this.state.toggleGameArea}
                    timer={this.state.timer}
                    tick={this.timerTick}
                />
            </div>
        );
    }
}