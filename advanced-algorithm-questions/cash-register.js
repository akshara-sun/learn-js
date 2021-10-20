//ADVANCED ALGORITHM SCRIPTING PROJECTS!

//CASH REGISTER
function checkCashRegister(price, cash, cid) {
    let change = cash*100 - price*100;
    let cidSum = 0;
    for (let el of cid) {
      cidSum += el[1]*100
    }
    if (change > cidSum) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (change === cidSum) {
      return {status: "CLOSED", change: cid}
    } else {
      cid = cid.reverse()
      let currencyUnits = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
      }
      let filter = [];
      for (let el of cid) {
        let changeArr = [el[0], 0];
        el[1] = el[1]*100
        while(change >= currencyUnits[el[0]] && el[1] > 0) {
          change -= currencyUnits[el[0]];
          el[1] -= currencyUnits[el[0]];
          changeArr[1] += currencyUnits[el[0]]/100
        }
        if (changeArr[1] > 0) {
          filter.push(changeArr)
        }
      }
      if (change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
      return {status: "OPEN", change: filter}
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);