import React from 'react';
import Button from 'react-bootstrap/esm/Button';

export class TicTacToeButton extends React.Component {
    render() {
        return(
            <Button 
                variant="outline-primary"
                className="tic-tac-toe-btn m-2"
                onClick={() => this.props.onClick()}
            >
                {this.props.display}
            </Button>
        )
    }
}

export class TicTacToeDisableButton extends React.Component {
    render() {
        return(
            <Button 
                variant="outline-primary"
                className={this.props.winner?"tic-tac-toe-btn m-2":"tic-tac-toe-btn m-2 disabled"}
                onClick={() => this.props.onClick()}
            >
                {this.props.display}
            </Button>
        )
    }
}

