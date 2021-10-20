//INTERMEDIATE ALGORITHM SCRIPTING PROBLEMS

//1.SUM ALL NUMBERS IN A RANGE
function sumAll(arr) {
    let sum;
    let resArr = [];
    arr.sort();
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let newLength = max - min + 1;
    resArr.push(min);
    for (let cur = 1; cur < newLength; cur++) {
      if (cur < max) {
        resArr.push(min+cur)
      }
    }
    sum = resArr.reduce((x,y) => x + y)
    return sum;
  }
  
  sumAll([1, 4]);
  
  //runtime - n + n

//2.DIFF TWO ARRAYS 
function diffArray(arr1, arr2) {
    var newArr = [];
    let setA = new Set(arr1);
    let setB = new Set(arr2);
  
    for (let item of setA) {
      if (!setB.has(item)) {
        newArr.push(item)
      }
    }
  
    for (let item of setB) {
      if (!setA.has(item)) {
        newArr.push(item)
      }
    }
    
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//3.SEEK AND DESTROY
function destroyer(arr) {
    let set = new Set();
    let resArr = [];
    for (let i = 1; i < arguments.length; i++) {
      set.add(arguments[i])
    }
    
    for (let num of arr) {
      if (!set.has(num)) {
        resArr.push(num);
      }
    }
    return resArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//4.WHEREFORE ART THOU
function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let sourceKeys = Object.keys(source);
    collection.filter(function(obj) {
      for (let key of sourceKeys) {
        if (!obj.hasOwnProperty(key) || obj[key] !== source[key]
        ) {
          return false;
        }
      }
      arr.push(obj);
    });
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

//5.SPINAL TAP CASE
function spinalCase(str) {
    let arrTracker = str.split(/\s|_|(?=[A-Z])/g);
    let resStr = arrTracker.join("-");
    resStr = resStr.toLowerCase();
    return resStr;
  
  }
  
  spinalCase('thisIsSpinalTap');
  /* 
  Pseudo Code:
  - regex at which the str.split() will take place = /\s|_|(?=[A-Z])/g
  join arr with - and assign to new string
  string.toLowerCase()
  return;
  */

//6. PIG LATIN
function translatePigLatin(str) {
    //variables that will keep track of the first syllable, vowel regex, segment of the word that is to be appended to the string at the end, and the pig latin version of the word
    let vowelIndex;
    let vowelRegex = /[a,e,i,o,u]/gi
    let segment;
    let pigLatin;
    //base case
    if (str[0].match(vowelRegex)) {
      pigLatin = str + "way";
    //case where string does not have any vowels
    } else if (!str.match(vowelRegex)) {
      pigLatin = str + "ay";
    // case where string has a mixture of vowels and consonants
    } else {
      vowelIndex = str.search(vowelRegex);
      segment = str.slice(0, vowelIndex);
      str = str.replace(segment, "")
      pigLatin = str + segment +"ay"
    }
    return pigLatin;
  }
  
  translatePigLatin("consonant");
  
  /*Pseudo code:
  base case: 
  - string starts with a vowel so ending should be "way"
  - string does not have any vowels so ending should be "ay"
  //consonant case where the word starts with a consonant
  - find the index of the consonant after the first vowel and save it to a var after removing it from string
   */

//7.SEARCH AND REPLACE
function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
      after = after.replace(after[0], after[0].toUpperCase())
    } else {
      after = after.replace(after[0], after[0].toLowerCase())
    }
    if (str.includes(before)) {
      str = str.replace(before, after)
    }
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  /* Pseudo Code
  - check to see if the first letter of before arg is capitalized
    - if yes, capitalize the first letter of the after arg
    - replace after arg with new version of after arg
  - else, make lowercase and replace
  - if string includes the before arg, then replace with new after arg
  - return the final string 
   */

//8.DNA PAIRING
function pairElement(str) {
    let finalArr = [];
    let pairings = str.split("");
    finalArr = pairings.map(letter => new Array())
    for (let i = 0; i < pairings.length; i++) {
      finalArr[i].push(pairings[i])
      if (finalArr[i] == "G") {
        finalArr[i].push("C")
      } 
      if (finalArr[i] == "C") {
        finalArr[i].push("G")
      } 
      if (finalArr[i] == "T") {
        finalArr[i].push("A")
      } 
      if (finalArr[i] == "A") {
        finalArr[i].push("T")
      } 
    }
    return finalArr
  }
  
  pairElement("GCG");
  
  /*Pseudo code:
  - create empty array 
  - find the length of string and create str.length number of array inside of the empty array 
  OR 
  - split the string into an array of strings and for each string, create an array inside of the big array that contains those strings and their corresponding pairs
   */

//9.MISSING LETTERS
function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    str = str.split("")
    let index = alphabet.indexOf(str[0]);
    let segment = alphabet.slice(index, str.length+index+1);
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== segment[i]) {
        return segment[i];
      }
    } 
  }
  
  fearNotLetter("stvwx");
  
  /*Pseudo code:
  - str -> arr
  - find the index of the first element of the arr in alphabet
  - find the length of the arr and copy the same num of letters from the alphabets array and save it in a new variable  
  - compare arr against the new var and return the letter that is missing
   */

//10.SORTED UNION
function uniteUnique(arr) {
    let res = [];
    let set = new Set();
    for (let i = 0; i < arguments.length; i++) {
      for (let num of arguments[i]) {
        if (arguments[i].includes(num)) {
          set.add(num);
        } 
        res = Array.from(set)
      }
    }
    return res;
    
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  //pseudo code
  // in order to avoid duplicates, create a set and push the values of all the arrays into that
  //using the set, you can check how many times a number appears in total amongst the three arrays - if it's just once or three times, then add to result array. 

//11.CONVERT HTML ENTITIES
function convertHTML(str) {
    let split = str.split("");
    for (let i = 0; i < split.length; i++) {
      switch(split[i]) {
        case "&":
          split[i] = "&amp;";
          break;
        case "<":
          split[i] = "&lt;";
          break;
        case ">":
          split[i] = "&gt;";
          break;
        case '"':
          split[i] = "&quot;";
          break;
        case "'":
          split[i] = "&apos;";
          break;
      }
    }
    str = split.join("")
    return str;
  }
  
  convertHTML("Dolce & Gabbana");

//12.SUM ALL OFF FIBONACCI NUMBERS
function sumFibs(num) {
    let limit = num;
    let oddNumsArr = [];
    let start = 1;
    let current = 1;
    let temp;
    let tracker = [1];
    while (num > 1) {
      temp = start;
      start = start + current;
      current = temp;
      num--;
      tracker.push(current)
    }
  
    for (let i = 0; i < tracker.length; i++) {
      if (tracker[i] <= limit && tracker[i] % 2 == 1) {
        oddNumsArr.push(tracker[i])
      }
    }
    return oddNumsArr.reduce((x,y) => x+y)
  }
  
  sumFibs(4);

//13.SMALLEST COMMON MULTIPLE
function smallestCommons(arr) {
    let [min, max] = arr.sort((a,b) => a-b);
    let rangeArr = []
    let allMultiplied = 1;
    for (let i = min; i <= max; i++) {
      rangeArr.push(i);
    }
    allMultiplied = rangeArr.reduce((a,b) => a*b);
    
    for (let multiple = max; multiple <= allMultiplied; multiple += max) {
      let numDivisors = 0;
      for (let i = min; i<=max; i++) {
        if (multiple % i === 0) {
          numDivisors += 1;
        }
      }
      if (numDivisors === rangeArr.length) {
        return multiple;
      }
    }
  }
  
  smallestCommons([1,5]);

//14.DROP IT
function dropElements(arr, func) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      if (!func(arr[0])) {
        arr.splice(0,1)
      } else {
        return arr
      }
    }
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  //runtime = o(n^2)
  
  //Second Solution
  function dropElements(arr, func) {
    let i;
    for (i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        break;
      } 
    }
    arr.splice(0, i)
    return arr;
  }
  dropElements([1, 2, 3], function(n) {return n < 3; });
  //runtime = o(n)

//15.STEAMROLLER
function steamrollArray(arr) {
    let flatArr = [].concat(...arr);
    for (let i = 0; i < flatArr.length; i++) {
      if (Array.isArray(flatArr[i])) {
        return steamrollArray(flatArr);
      }
    }
    return flatArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

//16.BINARY AGENTS
function binaryAgent(str) {
    str = str.split(" ");
    let res = [];
    for (let i = 0; i < str.length; i++) {
      res.push(String.fromCharCode(parseInt(str[i], 2)))
    }
    res = res.join("")
    return res ;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//17.EVERYTHING BE TRUE
function truthCheck(collection, pre) {
    for (let obj of collection) {
      if (!obj[pre]) {
        return false;
      } 
    }
    return true;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//18.ARGUMENTS OPTIONAL
function addTogether() {
    let [num1, num2] = arguments;
    let numCheck = (num) => {return Number.isInteger(num)};
    if (!numCheck(num1)) {
      return undefined;
    } else if (numCheck(num1) && numCheck(num2)) {
      return num1 + num2
    } else if (!num2) {
      return function newVal(newNum) {
        if (numCheck(newNum)) {
          return num1 + newNum;
        }
      }
    }
  }
  
  addTogether(2,3);

//19.MAKE A PERSON
var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    this.getFullName = function() {
      return fullName;
    }
    this.getFirstName = function() {
      return fullName.split(" ")[0]
    }
    this.getLastName = function() {
      return fullName.split(" ")[1]
    }
    this.setFirstName = function(first) {
      return fullName = first + " " + fullName.split(" ")[1]
    }
    this.setLastName = function(last) {
      return fullName = fullName.split(" ")[0] + " " + last
    }
    this.setFullName = function(newName) {
      return fullName = newName;
    }
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();

//20.MAP THE DEBRIS
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    //do something to each object in the array 
    arr.forEach(obj => {
      obj.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3)/GM)) 
    delete obj.avgAlt
    })
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);