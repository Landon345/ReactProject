import React, { Component } from 'react';
import Case from './case';


class Cases extends Component {
  render() {
    const {cases, handleDelete, disable} = this.props;
    
    
    
    return (
      <React.Fragment>
        {cases.map(x => (
          <Case
            key={x.id}
            amountEnclosed = {x.amountEnclosed}
            caseNumber = {x.id}
            handleDelete = {handleDelete}
            disable = {disable}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Cases;
