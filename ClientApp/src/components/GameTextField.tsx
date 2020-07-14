import React, { useState } from 'react'
import {
    Collapse,
    Card,
    CardText,
    Input,
    CardBody,
    CardHeader,
    CardFooter,
    Button,
    ButtonGroup
} from 'reactstrap'
import { Timer } from './Timer'

interface Props {
    toggle: boolean
    frase: string
    timer: number
    gameStatus: boolean
    toggleGameStatus: () => void
    tick: () => void
    postResult: (score: number) => void
    newGame: (localChanges: () => void) => any
    restart: (localChanges: () => void) => any
}

export const GameTextField: React.FC<Props> = (props: Props) => {

    const [isRight, toggleRight] = useState(false);
    const [disable, toggleDisable] = useState(false);
    const [txtArea, setTextArea] = useState('')
    const scoreSentence = () => `Parabéns seu score foi ${Math.round((100 * props.frase.length) / props.timer)}`
    const runVerifications = (target) => {
        {
            if (props.gameStatus === false) {
                props.toggleGameStatus();
            }

            if (target === props.frase) {
                props.toggleGameStatus();
                toggleDisable(!disable);
                props.postResult(Math.round((100 * props.frase.length) / props.timer));
            }

            if (target === props.frase.substr(0, target.length)) {
                toggleRight(true);
            }
            else {
                toggleRight(false);
            }
        }
    }
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
                            value={txtArea}
                            onChange={(event) => {
                                setTextArea(event.target.value);
                                runVerifications(event.target.value);
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
                    <CardFooter>
                        <ButtonGroup size="lg">
                            <Button
                                color="primary"
                                onClick={() => props.newGame(() => {
                                    toggleRight(false);
                                    toggleDisable(false);
                                    setTextArea('');
                                })}
                                style={{ marginBottom: '1rem' }}
                            >Novo Jogo</Button>

                            <Button
                                color="primary"
                                onClick={() => props.restart(() => {
                                    toggleRight(false);
                                    toggleDisable(false);
                                    setTextArea('');
                                })}
                                style={{ marginBottom: '1rem' }}
                            >Reniciar</Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Collapse>
        </div>
    )
}
