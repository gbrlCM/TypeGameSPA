import React from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

interface Props {
    name: string,
    setName: (name: string) => void,
    toggleVal: boolean,
    toggle: () => void
}

export const PlayerInputNameGroup :React.FC<Props> = (props : Props) => {

    return (
        <div>
        <InputGroup>
            <Input 
                type="text"
                name="player-name"
                placeholder="Digite O Seu Nome"
                value={props.name}
                disabled={props.toggleVal}
                onChange={(event) => props.setName(event.target.value)}
            />
            <InputGroupAddon addonType="append">
                <Button 
                    color="primary" 
                    onClick={props.toggle} 
                    style={{marginBottom: '1rem'}}
                    disabled={props.toggleVal}
                >Confirmar</Button>
            </InputGroupAddon>
        </InputGroup>
        </div>
    )
}
