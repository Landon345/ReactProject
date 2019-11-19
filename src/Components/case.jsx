import React, { Component } from 'react';

class Case extends Component {
  render() {

    const casestyle = {
         fontSize: '30px',
         background: 'white',
         borderRadius: '5%',
         border: '4px solid black'
    };

    return (
      <React.Fragment>
        <button style={casestyle} onClick={() => this.props.handleDelete(this.props)} disabled = {this.props.disable}>
          {this.props.caseNumber}
        </button>
      </React.Fragment>
    );
  }
}

export default Case;
