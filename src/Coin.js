import React, { Component } from 'react';
import './Coin.css';
const COIN_API =
'https://tinyurl.com/coin-'

class Coin extends Component {
    render() {
        let img_src = `${COIN_API}${this.props.side}-jpg`;
        console.log(img_src);
        return (
            <div>
                <img src={img_src} alt={this.props.side} className="Coin-img"></img>
            </div>
        );
    }
}

export default Coin