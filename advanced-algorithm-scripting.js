//ADVANCED ALGORITHM SCRIPTING PROJECTS!

//1.PALINDROME CHECKER
function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[\W_]/g, "")
    for (let i = 0, j= str.length-1; i < str.length/2; i++, j--) {
      if (str[i] !== str[j]) {
        return false;
      } 
    }
    return true;
  }

  palindrome("eye");

//2.ROMAN NUMERAL CONVERTER
function convertToRoman(num) {
    let romanNumerals = {
     'M': 1000, 
     'CM': 900, 
     'D': 500, 
     'CD': 400, 
     'C': 100, 
     'XC': 90, 
     'L': 50, 
     'XL': 40, 
     'X': 10, 
     'IX': 9, 
     'V': 5, 
     'IV': 4, 
     'I': 1
    }
    let romanVersion = "";
    for (let key in romanNumerals) {
     while (num >= romanNumerals[key]) {
        romanVersion += key;
        num -= romanNumerals[key]
      }
    }
    return romanVersion;
   }
   
   convertToRoman(36);

//3.CAESAR'S CIPHER
function rot13(str) {
    let rot13 = {
      'A': 'N',
      'B': 'O',
      'C': 'P',
      'D': 'Q', 
      'E': 'R', 
      'F': 'S', 
      'G': 'T', 
      'H': 'U', 
      'I': 'V', 
      'J': 'W', 
      'K': 'X', 
      'L': 'Y', 
      'M': 'Z', 
      'N': 'A', 
      'O': 'B', 
      'P': 'C' , 
      'Q': 'D', 
      'R': 'E', 
      'S': 'F', 
      'T': 'G', 
      'U': 'H', 
      'V': 'I', 
      'W': 'J', 
      'X': 'K', 
      'Y': 'L', 
      'Z': 'M'
    }
    let copy = str.split("");
    let decoded = ""
    for (let i = 0; i < str.length; i++) {
      for (let letter in rot13) {
        if (str[i] === rot13[letter]) {
          copy.splice(i, 1, letter)
        }
      }
    }
    decoded = copy.join("")
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");

//4.TELEPHONE NUMBER VALIDATOR
function telephoneCheck(str) {
    let regexCheck = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  
    return regexCheck.test(str);
    
  }
  telephoneCheck("555-555-5555");

//5.CASH REGISTER
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