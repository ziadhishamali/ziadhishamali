import React, { Component } from 'react';

import '../../styles/Games.css';

import backIcon from '../../images/icons/left-arrow-1.svg';

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="games-wrapper">
                <div className="games-back-button" onClick={() => this.props.history.push('/')}>
                    <img src={backIcon} alt="back" />
                </div>
                <h1>GAMES PAGE IS STILL UNDER CONSTRUCTION</h1>
            </div>
        );
    }
}
 
export default Games;