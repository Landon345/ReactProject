import React, { Component } from 'react';

class Amount extends Component {
  render() {
    const amountsStyle = {
        background: 'orange',
        color: 'black',
        borderRadius: '5%',
        textAlign: 'center',
        padding: '5px',
        margin: '2px'
        
    };

    return <p style={amountsStyle}>{this.props.amount}</p>;
  }
}

export default Amount;
