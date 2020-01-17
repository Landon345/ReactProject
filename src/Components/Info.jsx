import React, { Component } from 'react';



class Info extends Component {

    
    
    render() { 

    const {caseNumberOfCaseJustClicked, amountOfCaseJustClicked, turn, noDeal, totalWinnings, myCase, bankOffer} = this.props;


        return ( 
        <div>
            <h1>directions: {this.getInfo(turn, noDeal)}</h1>
            <div>{this.getButtons(turn, noDeal)}</div>
    <h1>{this.getCaseJustClicked(caseNumberOfCaseJustClicked, amountOfCaseJustClicked, turn)}</h1>
            <h1>Your Case number is: {myCase}</h1>
            <h1>The Bank's offer is: {bankOffer}</h1>
            <h1>Your total winnings is: ${totalWinnings}</h1>
        </div> );
    }

    getInfo(turn, noDeal){
        
        if(turn === 0){
            return 'Pick your case';
        }else if(turn < 6 && turn > 0 && !this.ask(turn)){
            
            return 'Pick ' + (6 - turn) + ' more cases';
        }else if(turn < 10 && turn >= 6 && (!this.ask(turn) || noDeal)){
           
            return 'Pick ' + (10 - turn) + ' more cases';
        }else if(turn < 14 && turn >= 10 && (!this.ask(turn) || noDeal)){
           
            return 'Pick ' + (14 - turn) + ' more cases';
        }else if(turn < 17 && turn >= 14 && (noDeal || !this.ask(turn))){
            
            return 'Pick ' + (17 - turn) + ' more cases';
        }else if(turn < 20 && turn >= 17 && (noDeal || !this.ask(turn))){
            
            return 'Pick ' + (20 - turn) + ' more cases';
        }else if(turn < 22 && turn >= 20 && (noDeal || !this.ask(turn))){
            
            return 'Pick ' + (22 - turn) + ' more cases';
        }else if(turn < 23 && turn >= 22 && (noDeal || !this.ask(turn))){
            
            return 'Pick ' + (23 - turn) + ' more cases';
        }else if(turn < 24 && turn >= 23 && (noDeal || !this.ask(turn))){
            
            return 'Pick ' + (24 - turn) + ' more cases';
        }else if(turn < 25 && turn >= 24 && (noDeal || !this.ask(turn))){
            
            return 'Pick ' + (25 - turn) + ' more cases';
        }else{
            
            return 'Deal or No Deal?';
        }
    }


    getButtons(turn, noDeal){
        console.log(noDeal);
        if(noDeal){
            return <React.Fragment></React.Fragment>;
        }
        if(this.ask(turn) && turn === 26){
            return(
                <div>
                <button onClick = {() => this.props.handleDeal(this.props)}>Deal</button>
                </div>
                );
        }else if(this.ask(turn)){
            return (
            <div>
            <button onClick = {() => this.props.handleDeal(this.props)}>Deal</button>
            <button onClick = {() => this.props.handleNoDeal(this.props)}>No Deal</button>
            </div>
            );
        }else{
            return <React.Fragment></React.Fragment>;
        }
    }

    ask(turn){
        if(turn === 6 || turn === 10 || turn === 14 || turn === 17 || turn === 20 
            || turn === 22 || turn === 23 || turn ===24 || turn === 25 || turn === 26){
            return true;
        }else{
            return false;
        }
    }

    getCaseJustClicked(caseNumber, amountInCase, turn){
        if(turn === 1){
            return (<div>
                You can not know what is in your case.
            </div>);
        }else if(turn === 0){
            return <React.Fragment></React.Fragment>;
        }else{
            return (<div>
                Amount in case {caseNumber} is {amountInCase}.
            </div>);
        }
        
    }
}
 
export default Info;