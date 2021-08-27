import React from 'react';
// import ReactDOM from 'react-dom';

// import './cell.css';

export default class Square extends React.Component {
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