import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TicTacToeBoard from './tic-tac-toe-board.js';
import TicTacToeBanner from './tic-tac-toe-banner.js';
import { TicTacToeNextGameButton, TicTacToeResetButton } from './tic-tac-toe-btn.js';

import './tic-tac-toe.css';

export default class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                move: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
            OWin: 0,
            XWin: 0,
            activeSquare: null,
        };
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const playerWins = [this.state.OWin, this.state.XWin];

        const moves = history.map((step, move) => {
            const rowNow = Math.floor(history[move].move / 3) + 1 ;
            const colNow = history[move].move % 3 + 1 ;
            const desc = move ?
                'Go to move #' +  move + ' [r' + rowNow + ',c' + colNow + ']':
                'Go to game start';
            return (
                <li 
                    key={move}
                    className="mt-1"
                >
                    <button 
                        className="btn-steps"
                        onClick={() => this.jumpTo(move)
                    }>
                        {desc}
                    </button>
                </li>
            )
        })

        // Update status
        let status;
        if (winner) {
            status = 'Winner: ' + winner;

        } else {
            status = 'Next player: '+ (this.state.xIsNext ? 'X' : 'O')
        }

        return (
            <div className = "tic-tac-toe" >
                <TicTacToeBanner wins={playerWins} status={status}/>
                <Container>
                    <Row className="game-board justify-content-center py-4">
                        <Col sm={6} className = "p-0 my-auto">
                            <TicTacToeBoard 
                                squares = {current.squares}
                                activeSquare = {this.state.activeSquare}
                                onClick={(i) => this.handleClick(i)}
                            />
                        </Col> 
                        <Col sm={5} className = "game-info p-0">
                            <div className="text-center mb-2 fs-5 text-decoration-underline">
                                Game History
                            </div> 
                            <ol className="ms-5"> {moves} </ol>
                        </Col> 
                    </Row>
                </Container>
                <div className="d-flex justify-content-center py-2">
                    <TicTacToeResetButton 
                        
                        winner={winner}
                        onClick={() => {
                            this.refreshBoard();
                            this.setState({
                                OWin: 0,
                                XWin: 0,
                            });
                        }}
                    />
                    <TicTacToeNextGameButton
                        winner={winner}
                        onClick={() => {
                            this.updateWinner(winner);
                            this.refreshBoard();
                        }}
                    />
                </div>
            </div>
        );
    }

    updateWinner(winner) {
        if (winner==='O') {
            this.setState({
                OWin: this.state.OWin + 1
            });
        } else if (winner==='X'){
            this.setState({
                XWin: this.state.XWin + 1
            });
        }
    }

    refreshBoard() {
        this.setState({
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
            activeSquare: null,
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber+1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                move: i,
            }]),
            activeSquare: i,
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

}

// ========================================

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}