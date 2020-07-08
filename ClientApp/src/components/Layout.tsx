import React, {Component} from 'react';
import {Container} from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Route} from 'react-router-dom';
import { Game } from './Game';



export class Layout extends Component{

    static displayName = Layout.name;

    render () {

        return (
            <div>
                <NavMenu/>
                <Container>
                    <Route exact path='/' component={Game} />
                </Container>
            </div>
        )
    }
}