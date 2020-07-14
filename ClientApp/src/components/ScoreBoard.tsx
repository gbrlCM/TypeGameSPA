import React, {Component} from 'react'

interface Props {

}

interface State {
    loading : boolean,
    scoreList: Array<Score>

}

interface Score {
    id: number,
    nome: string,
    pontos: number
}

export class ScoreBoard extends Component<Props, State> {

    constructor(props){
        super(props);

        this.state={
            scoreList: [],
            loading: true
        }
    }

    componentDidMount(){
        this.fetchHighScore()
    }

    renderScoreTable(scoreList: Array<Score>) {
        return (
            <table className="table table-striped" aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        scoreList.map(score => 
                            <tr key={score.id}>
                                <td>{score.nome}</td>
                                <td>{score.pontos}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }

    async fetchHighScore(){
        const response = await fetch('Score/fetchHighScore')
        const data = await response.json();
        this.setState({scoreList: data, loading: false});
    }

    render(){
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderScoreTable(this.state.scoreList);
        
        return(
            <div>
                <h1 id="tabelLabel">Highest Score</h1>
                {contents}
            </div>
        );
        
    }
}