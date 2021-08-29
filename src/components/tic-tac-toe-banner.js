import React from 'react';
import './tic-tac-toe-banner.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TicTacToeScore extends React.Component {
    render() {
        return (
            <div className="score col flex">
                <FontAwesomeIcon 
                    icon={ this.props.player ? ["fas","times"] : ["far","circle"] } 
                    className="score-icon ms-auto"
                />
                &nbsp;&nbsp;
                <span className="role me-auto">{ this.props.wins ? this.props.wins : "-" }</span>
            </div>
        )
    }
}

export default class TicTacToeBanner extends React.Component {
    render() {
        return (
            <div className="tic-tac-toe-banner container">
                <div className="row">
                    <TicTacToeScore className="me-auto" player={false} wins={this.props.wins[0]} />
                    <TicTacToeScore className="ms-auto" player={true}  wins={this.props.wins[1]} />
                </div>       
                <div className="turnCon">
                    {this.props.status}
                </div>         
            </div>
        );
    }
}