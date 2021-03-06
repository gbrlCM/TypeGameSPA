// <reference path="../../oldstuff/navmenu.js" />
import React, {Component} from 'react';
import {
    Collapse,
    Container, 
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    NavItem,
    NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom';

interface Props {

}

interface State {
    collapsed: boolean
};

export class NavMenu extends Component<Props,State> {


    constructor (props){
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            collapsed: true
        }
    }

    toggleNavbar(){
            this.setState({
                collapsed: !this.state.collapsed
            });
    }

    render () {

        return(
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Typing Game SPA</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Game</NavLink>
                                </NavItem>
                                <NavItem>  
                                    <NavLink tag={Link} className="text-dark" to="/ScoreBoard">Score Board</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-dark" href="https://github.com/gbrlCM/TypeGameSPA">GitHub</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }

}
