import React, { useState } from 'react'
import { Collapse, Card, CardText, Input, CardBody, CardHeader } from 'reactstrap'
import { Timer } from './Timer'

interface Props {
    toggle: boolean
    frase: string
    timer: number
    gameStatus: boolean
    toggleGameStatus: () => void
    tick: () => void
    postResult: (score: number) => void
}

export const GameTextField :React.FC<Props> = (props :Props) => {

    const [isRight, toggleRight] = useState(false);
    const [disable, toggleDisable] = useState(false);
    const scoreSentence = () => `Parabéns seu score foi ${Math.round((100 * props.frase.length)/props.timer)}`

    return (
        <div>
            <Collapse isOpen={props.toggle}>
                <Card>
                    <CardHeader>
                        <Timer
                            timer={props.timer}
                            tick={props.tick}
                        />
                    </CardHeader>
                    <CardBody>
                        <CardText
                            style={
                                {
                                    margin: "10px"
                                }
                            }
                        >{!disable ? props.frase : scoreSentence()}</CardText>
                        <Input
                            type="textarea"
                            autoFocus={true}
                            onChange ={(event) => {
                                if (props.gameStatus === false) {
                                props.toggleGameStatus();
                                }
                    
                                if (event.target.value === props.frase) {
                                    props.toggleGameStatus();
                                    toggleDisable(!disable);
                                    props.postResult(Math.round((100 * props.frase.length)/props.timer));
                                }

                                if (event.target.value === props.frase.substr(0,event.target.value.length)){
                                    toggleRight(true);
                                }
                                else{
                                    toggleRight(false);
                                }
                            }}
                            style={{
                                resize: "none",
                                height: "400px",
                                borderColor: isRight ? "green" : "red"
                            }}
                            placeholder="Digite Aqui o texto para iniciar o jogo"
                            disabled={disable}
                        />
                    </CardBody>

                </Card>
            </Collapse>
        </div>
    )
}