import React from 'react';

export default class TicTacToeSquare extends React.Component {
    render() {
        return ( 
            <button 
                className = "square" 
                onClick={() => {
                    console.log("square clicked");
                    this.props.onClick();
                    }
                }
            >
                {this.props.value}
            </button>
        );
    }
}