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
}

export const GameTextField :React.FC<Props> = (props :Props) => {

    const [isRight, toggleRight] = useState(false);

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
                        >{props.frase}</CardText>
                        <Input
                            type="textarea"
                            autoFocus={true}
                            onChange ={(event) => {
                                if (props.gameStatus === false) {
                                props.toggleGameStatus();
                                }
                    
                                if (event.target.value === props.frase) {
                                    props.toggleGameStatus();
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
                        />
                    </CardBody>

                </Card>
            </Collapse>
        </div>
    )
}