import React, { Component } from 'react';
import Amount from './amount';

class Amounts extends Component {
  render() {

    

    return (
      <React.Fragment >
        {this.props.amountsAvailable.map(x => (

          <Amount
            key={x}
            amount={x}
            
          />

        ))}
      </React.Fragment>
    );
  }
}

export default Amounts;
