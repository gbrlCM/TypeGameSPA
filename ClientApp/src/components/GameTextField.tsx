import React from 'react'
import { Collapse, Card, CardText, Input, CardBody, CardHeader } from 'reactstrap'
import { Timer } from './Timer'

interface Props {
    toggle: boolean
    frase: string
    timer: number
    tick: () => void
}

export const GameTextField :React.FC<Props> = (props :Props) => {

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
                            style={{
                                resize: "none",
                                height: "400px",

                            }}
                            placeholder="Digite Aqui o texto para iniciar o jogo"
                        />
                    </CardBody>

                </Card>
            </Collapse>
        </div>
    )
}