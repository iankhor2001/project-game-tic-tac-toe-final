import React from 'react';
import Button from 'react-bootstrap/esm/Button';

export class TicTacToeResetButton extends React.Component {
    render() {
        return(
            <Button 
                className={this.props.winner?"reset-btn":"reset-btn disabled"}
                onClick={() => this.props.onClick()}
            >
                Restart Game
            </Button>
        )
    }
}