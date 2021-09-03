import React from 'react';

export default class TicTacToeSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }
    render() {
        return ( 
            <button 
                className={ this.props.active ? 'square active-square' : 'square'}
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

    // componentDidMount() {
    //     this.setState({ active: true });
    // }

    // componentWillUnmount() {
    //     this.setState({ active: false });
    // }
}