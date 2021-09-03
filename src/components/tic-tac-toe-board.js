import React from 'react';
import TicTacToeSquare from './tic-tac-toe-square.js';

export default class TicTacToeBoard extends React.Component {
    renderSquare(i) {
        return (
        <TicTacToeSquare 
            active = {this.props.activeSquare===i}
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
        /> );
        ;
    }

    render() {
        return ( <div>
            <div className = "board-row d-flex justify-content-center" > {
                this.renderSquare(0)
            } {
                this.renderSquare(1)
            } {
                this.renderSquare(2)
            } 
            </div> 
            <div className = "board-row d-flex justify-content-center" > {
                this.renderSquare(3)
            } {
                this.renderSquare(4)
            } {
                this.renderSquare(5)
            } 
            </div> 
            <div className = "board-row d-flex justify-content-center"> {
                this.renderSquare(6)
            } {
                this.renderSquare(7)
            } {
                this.renderSquare(8)
            } 
            </div> 
        </div>
        );
    }
}
