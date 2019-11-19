export default class CaseClass {
  constructor(id, amountEnclosed) {
    this.id = id;
    this.amountEnclosed = amountEnclosed;
  }

  /**
   *
   * Discription: return an array of cases with random amounts enclosed in each.
   * @returns a case array
   */
  static populateCases() {
    let casesArray = [];

    let amounts = [
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
    ];

    for (var i = 0; i < 26; i++) {
      //get a random number from the amounts array
      
        let ranIndex = Math.floor(Math.random() * (amounts.length));

        let ranAmount = amounts[ranIndex];
        casesArray.push(new CaseClass(i + 1, ranAmount));

         //take the selected case out of the case list so there are no duplicates of amounts.
        amounts.splice(ranIndex,1);
      
    }
    return casesArray;
  }

}
