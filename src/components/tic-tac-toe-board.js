import React from 'react';
import TicTacToeSquare from './tic-tac-toe-square.js';

export default class TicTacToeBoard extends React.Component {
    renderSquare(i) {
        return (
        <TicTacToeSquare 
        key={'TicTacToeSquare '+ i}
            active = {this.props.activeSquare===i}
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
        /> );
        ;
    }

    render() {
        let board = [];
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            let rowBoard = [];
            for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
                let currentIndex = rowIndex*3 + columnIndex;
                rowBoard.push(this.renderSquare(currentIndex));
            }
            board.push(rowBoard);
        }
        return <div>{board}</div>;
    }
}
