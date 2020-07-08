import React, {Component} from 'react';

interface Props {

}

interface State {
    frase: string,
    nomePlayer: string,
    toggleGameArea: boolean
}

export class Game extends Component<Props, State> {
    static displayName = Game.name;

    constructor(props){
        super(props);

        this.toggleGameArea = this.toggleGameArea.bind(this);

        this.state = {
            frase: '',
            nomePlayer: '',
            toggleGameArea: false
        };
    }

    toggleGameArea() {

        this.setState({toggleGameArea: !this.state.toggleGameArea})
    }

    confirmPlayerName (name: string) {

        this.setState({nomePlayer: name})
    }

    render() {

        return (
            <div>
                <h1>PUUUUUDIM</h1>
                <p>OOOOOI</p>
            </div>
        );
    }


}