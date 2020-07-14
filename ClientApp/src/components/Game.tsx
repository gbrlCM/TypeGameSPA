import React, {Component} from 'react';
import {PlayerInputNameGroup} from './GamePlayerName'
import { GameTextField } from './GameTextField';

interface Props {

}

interface State {
    frase: string,
    nomePlayer: string,
    toggleGameArea: boolean
    isGameStarted: boolean
    timer: number
}

export class Game extends Component<Props, State> {
    static displayName = Game.name;

    constructor(props){
        super(props);

        this.toggleGameArea = this.toggleGameArea.bind(this);
        this.changePlayerName = this.changePlayerName.bind(this);
        this.timerTick = this.timerTick.bind(this);
        this.toggleGame = this.toggleGame.bind(this);
        this.postResult = this.postResult.bind(this);

        this.state = {
            frase: "",
            nomePlayer: '',
            toggleGameArea: false,
            isGameStarted: false,
            timer: 0
        };
    }

    componentDidMount(){
        this.getSetence();
    }

    async getSetence (){
        const response = await fetch('Frase/RequestSetence');
        const data = await response.text()
        console.log(data);
        this.setState({frase: data})
    }

    async postResult (score){
        await fetch(`Score/postScore?nome=${this.state.nomePlayer}&pontos=${score}`)
    }

    toggleGameArea() {

        this.setState({toggleGameArea: !this.state.toggleGameArea})
    }

   toggleGame(){
        this.setState({isGameStarted: !this.state.isGameStarted});
    }

    changePlayerName (name: string) {

        this.setState({nomePlayer: name})
    }

    timerTick() {
        if (this.state.isGameStarted === true) {
            this.setState({timer: this.state.timer + 1})
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
                    gameStatus={this.state.isGameStarted}
                    toggleGameStatus={this.toggleGame}
                    postResult={this.postResult}
                />
            </div>
        );
    }
}