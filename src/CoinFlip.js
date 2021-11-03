import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlip.css';

class CoinFlip extends Component {
    static defaultProps = {
        sides : ['heads', 'tails'],
    }
    constructor(props){
        super(props);
        this.state = {
            side : 'heads',
            totalFlips : 0,
            heads : 0,
        };
        this.flip = this.flip.bind(this);
    }
    flip() {
        let id = Math.floor(Math.random() * 2);
        this.setState(curSt => ({
            side : this.props.sides[id],
            totalFlips : curSt.totalFlips + 1,
            heads : id ? curSt.heads : curSt.heads + 1
        }));
    }
    render() {
        return (
            <div>
                <h1>Let's Flip a Coin!</h1>
                <Coin side={this.state.side}/>
                <button onClick={this.flip}className="CoinFlip-button">Flip Me!</button>
                <p>
                    Out of {this.state.totalFlips} flips,
                    {" "}{this.state.heads} were heads and {this.state.totalFlips - this.state.heads} were tails.
                </p>
            </div>
        );
    }
}

export default CoinFlip