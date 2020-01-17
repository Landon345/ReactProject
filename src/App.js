import React, { Component } from 'react';
import './App.css';
import Cases from './Components/cases';
import CaseClass from './Classes/CaseClass';
import Amounts from './Components/amounts';
import Info from './Components/Info';

let turnNumberHolder = 0;
let firstCase = null;
let totalWinnings = 0;

class App extends Component {
  state = {
    cases: [],
    amountsAvailable: [],
    noDeal: false,
    ask: false,
    bankOffer: 0,
    totalWinnings: 0,
    amountOfCaseJustClicked: 0,
    caseNumberOfCaseJustClicked: 0
  };

  handleStart = () => {
    const caseList = CaseClass.populateCases();
    turnNumberHolder = 0;
    firstCase = null;
    this.setState({
      cases: caseList,
      amountsAvailable: [
        0.01,
        1,
        5,
        10,
        25,
        50,
        75,
        100,
        200,
        300,
        400,
        500,
        750,
        1000,
        5000,
        10000,
        25000,
        50000,
        75000,
        100000,
        200000,
        300000,
        400000,
        500000,
        750000,
        1000000
      ],
      noDeal: false,
      ask: false,
      bankOffer: 0,
      amountOfCaseJustClicked: 0,
      caseNumberOfCaseJustClicked: 0,
    });
  };

  handleDelete = x => {

    
    let amountsAvail;
    if (turnNumberHolder === 0) {
      amountsAvail = this.state.amountsAvailable;
      firstCase = x.caseNumber;
    }else{
      amountsAvail = this.state.amountsAvailable.filter(
        c => c !== x.amountEnclosed
      );
      
    }
    const cases = this.state.cases.filter(c => c.id !== x.caseNumber);
    
    console.log(amountsAvail);
    this.setState({
      cases,
      amountsAvailable: amountsAvail,
      amountOfCaseJustClicked: x.amountEnclosed,
      caseNumberOfCaseJustClicked: x.caseNumber
    });
    

    
    this.doBankOffer(amountsAvail);

    
  };
  doBankOffer = x => {
    let bankOffer;
    
    turnNumberHolder++;
    if (
      turnNumberHolder === 6 ||
      turnNumberHolder === 10 ||
      turnNumberHolder === 14 ||
      turnNumberHolder === 17 ||
      turnNumberHolder === 20 ||
      turnNumberHolder === 22 ||
      turnNumberHolder === 23 ||
      turnNumberHolder === 24 ||
      turnNumberHolder === 25 ||
      turnNumberHolder === 26
    ) {
      this.handleAsk();
      bankOffer = this.getBankOffer(x);
    }
    
    

    this.setState({
      noDeal: false,
      bankOffer
    });
  }

  

  handleNoDeal = () => {
    this.handleAsk();
    this.setState({
      noDeal: true
    });
  };

  getBankOffer = (x) => {
    let total = 0;
    let average = 0;
    console.log(x);
    for (let i = 0; i < x.length; i++) {
      total += x[i];
    }

    average = total / x.length;
    return average.toFixed(0);
  };

  handleDeal = () => {
    const winnings = this.state.bankOffer;
    totalWinnings += parseFloat( winnings);
    this.setState({
      totalWinnings
    });
    this.handleStart();
  };

  handleAsk = () => {
    const ask = this.state.ask ? false : true;
    this.setState({
      ask
    });
  };

  render() {
    const container = {
      //height: '750px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gridGap: '10px'
    };

    const header = {
      textAlign: 'center',
      background: 'rgb(200, 140, 150)',
      color: 'white',
      height: '20px'
    };

    const casesContainer = {
      background: 'lightBlue',
      display: 'grid',
      gridColumn: '2/4',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
      gridGap: '30px',
      padding: '15px'
    };

    const amountsContainer = {
      background: 'gray',
      display: 'grid',
      gridRow: '1/3',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridGap: '0px'
    };

    const infoContainer = {
      gridColumn: '2/4'
    };

    return (
      <React.Fragment>
        <header style={header}>
          <button onClick={this.handleStart}>Start New Game</button>
        </header>

        <section style={container}>
          <div style={amountsContainer}>
            <Amounts
              cases={this.state.cases}
              amountsAvailable={this.state.amountsAvailable}
            />
          </div>

          <div style={casesContainer}>
            <Cases
              cases={this.state.cases}
              handleDelete={this.handleDelete}
              disable={this.state.ask}
            />
          </div>

          <div style={infoContainer}>
            <Info
              turn={turnNumberHolder}
              myCase={firstCase}
              handleNoDeal={this.handleNoDeal}
              noDeal={this.state.noDeal}
              bankOffer = {this.state.bankOffer}
              handleAsk={this.handleAsk}
              amountsAvailable={this.state.amountsAvailable}
              handleDeal={this.handleDeal}
              totalWinnings={this.state.totalWinnings}
              amountOfCaseJustClicked = {this.state.amountOfCaseJustClicked}
              caseNumberOfCaseJustClicked = {this.state.caseNumberOfCaseJustClicked}
            />
          </div>
        </section>
        <footer style={{background: 'rgb(50,50,50)', color: 'white'}}>Copyright 2019</footer>
      </React.Fragment>
    );
  }
}

export default App;
