import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import TicTacToe from "./tic-tac-toe.js";

import './main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'TicTacToe',
        };
    }

    render() {
        return (
            <Router>
                <Navbar bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand>
                            ReactBootstrap
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-collapse" />
                        <Navbar.Collapse id="navbar-collapse" className="me-auto">
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link href='/' className={(this.state.active==="TicTacToe")?"active":""}>Tic Tac Toe</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='https://github.com/iankhor2001/project-game-tic-tac-toe-final'>
                                        GitHub
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Nav className='ms-auto'>
                                <Nav.Item>
                                    <Nav.Link href='https://github.com/iankhor2001/'>
                                        Ian Khor
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <TicTacToe/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}