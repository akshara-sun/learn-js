//BASIC ALGORITHM SCRIPTING PROBLEMS

//1. REVERSE A STRING
//Solution 1:
function reverseString(str) {
    //declare empty string variable
    let newString = "";
    //for loop that starts at the last index and decrements to the first index
    for (let i = str.length - 1; i >= 0; i--) {
    //concatenate reversed string to empty string variable
    newString += str[i]
   }
  // returning the new string stops the function
  return newString
}


//Solution 2: 
// 3rd Solution - using shift & unshift
function reverseString(str) {
    //save length of string for iterating purposes
    let strLength = str.length;
    //turn string into array
    let stringArr = str.split('');
    //array to store reversed string
    let reversed = [];
   
    //iterate through all characters in string
    for(let i =0; i < strLength; i++){
      //remove first letter from original string
      let first = stringArr.shift();
      //add letter to begginning of reversed string
      reversed.unshift(first);
    }
    //change array into string
    reversed = reversed.join('');
    //return reversed string
    return reversed;
} 

//2. FACTORIALIZE A NUMBER
function factorialize(num) {
	//base condition
  if(num == 0 || num == 1){
    return 1; 
  }
  //recursion
  return num * factorialize(num - 1);
}

//3.FIND THE LONGEST WORD IN A STRING
function findLongestWordLength(str) {
    //convert string into an array of strings
    let arrayOfStrings = str.split(" ")
    //declare an empty array 
    let wordLengths = []
    //console.log(arrayOfStrings.length)
    for (let i = 0; i < arrayOfStrings.length; i++) {
      wordLengths.push(arrayOfStrings[i].length);
    }
    return  Math.max(...wordLengths)
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//4.RETURN LARGEST NUMBERS IN AN ARRAY

function largestOfFour(arr) {
    //declare an empty array
    let newArr = [];
    // loop through passed-in arr
    for (let i = 0; i < arr.length; i++) {
      newArr.push(Math.max(...arr[i]))
    }
    return newArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  //Because Math.max() accepts an entire array, you can just pass in the sub-array as the parameter. 
  //In this case, arr[i] indicates the arrays at each index, which is then passed into the method as a parameter.

//5.CONFIRM THE ENDING
function confirmEnding(str, target) {
    //find the length of the target string object and save it to a var; type: number
    let targetLength = target.length;
    //extract target from string by slicing the target.length starting from the last index of given string 
    //str.slice(-targetLength)
    //check if extracted section of string matches the target
    if (str.slice(-targetLength) === target) {
      return true 
    } 
    return false
  }

//6.REPEAT A STRING

function repeatStringNumTimes(str, num) {
    // condition 1: num has to be positive and if it isn't, then return empty string
    if (num <= 0) {
      return "";
    }
    // condition 2: if num is one, return string as is
    if (num === 1) {
      return str;
    }
    //condition 3: if num > 1, return str and run function again on string decremeting each time until you reach 1
    if (num >1) {
     return str + repeatStringNumTimes(str, num-1)
    }
  }
  
  repeatStringNumTimes("abc", 3);

//7.TRUNCATE A STRING
function truncateString(str, num) {
    //truncate means keep the beginning of the string until the given number and discard the rest 
    //if num is greater then or equal to the str.length, then just return str without truncating
    if (num >= str.length) {
      return str;
    }
    //if num is less than str.length, then .slice to extract the a portion of the string starting from the 1st element to the max string length, which is num.
    return str.slice(0, num) + "..."
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

//9.FINDERS KEEPERS
function findElement(arr, func) { //func is pre-defined
    //given
    let num = 0;
    //loops through array
    for (let i = 0; i <= arr.length; i++) {
      //assigns num to arr[i], as in each element of the arr
      num = arr[i];
      //because the function is predefined, all we have to do is check if num passes the test and if it does, then num is returned.
      if (func(num)) {
        return num;
      }
    }
    //returning undefined if num doesn't pass the check
    return undefined;
  }
  
findElement([1, 2, 3, 4], num => num % 2 === 0);

//10.BOO WHO
function booWho(bool) {
    if (bool === true | bool === false) {
      return true
    } 
    return false;
  }
  
booWho(null);

//11.TITLE CASE A SENTENCE
function titleCase(str) {
    str = str.toLowerCase();
    str = str.replace(str[0], str[0].toUpperCase());
    for (let i = 0; i <= str.length; i++) {
       if (str[i] === " ") {
         //split the string into two halves
         let beforeWhiteSpace = str.slice(0, [i+1]);
        //  console.log(beforeWhiteSpace);  
         let afterWhiteSpace = str.slice(i+1, str.length);  
        //  console.log(afterWhiteSpace); 
         str = beforeWhiteSpace + afterWhiteSpace.replace(afterWhiteSpace[0], afterWhiteSpace[0].toUpperCase())  
      }
    }
    return str;
  }
  
titleCase("I'm a little tea pot");

//12.SLICE AND SPLICE
function frankenSplice(arr1, arr2, n) {
    //declare empty array variable
    //this array will serve as a copy of arr2, in which all the elements of arr1 will be pushed at the nth index
    let finalArray = [];
    //loop through the arr2 
    for (let i = 0; i < arr2.length; i++) {
      //push all elements of arr2 into finalArray
      finalArray.push(arr2[i]);
    }
    //loop through finalArray and insert arr1 elements at nth index
    for (let j = 0; j <= finalArray.length; j++) {
      //find the nth index
      if (j === n) {
        //using the splice index, we are specifying three parameters: index, deleteCount, and items to be added
        finalArray.splice(n, 0, ...arr1)
      }
    }
    return finalArray
  }
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//13.FLASY BOUNCER
function bouncer(arr) {
    //create an array that will contain only the truthy values (a.k.a falsy values will be removed)
    let truthyArr = [];
    //loop through given arr
    for (let i = 0; i <= arr.length; i++) {
      //set condition that checks the truthyness of each el in arr
      if (arr[i]) {
        truthyArr.push(arr[i])
      }
    }
    return truthyArr;
  }
  
  bouncer([7, "ate", "", false, 9]);

//14.WHERE DO I BELONG
function getIndexToIns(arr, num) {
    let indexOfNum = 0;
    //using the .sort() method, sort the arr in ascending order
    arr.sort((a,b) => a-b);
    //loop through arr to check if the given num is greater than any of the elements in the arr
    for (let i = 0; i <= arr.length; i++) {
      //if num is greater than arr[i], then return indexOfNum = i + 1
      if (num > arr[i]) {
        indexOfNum = i + 1
      }
    }
    return indexOfNum;
  }
  
  getIndexToIns([5, 3, 20, 3], 5);
  
  //.sort() sorts in alphabetical order because it converts all elements in the array into strings. 
  //In order to sort in numeric order, you must compare the numbers by this arrow function:
  // ((a,b) =>. a-b), which allows it to sort the numbers such that the lesser one goes first followed by the greater one. 
  //The minus sign does not subtract.

  //15.MUTATIONS
  //Akshara's Solution
function mutation(arr) {
    //split up first element into an array of strings
    let firstWord = arr[0].toLowerCase().split('');
    //split up second element into an array of strings
    let secondWord = arr[1].toLowerCase().split('');
    //loop through secondWord and check to see if firstWord arr includes any of those letters
    for (let i = 0; i < secondWord.length; i++) {
      //if the firstWord does not include any of the letters in the second word, return false
      if (!firstWord.includes(secondWord[i])) {
        return false
      }
    }
    return true
  }
  
  mutation(["hello", "hey"]);
  
  //Note: It's important to check the false conditional first, 
  //because if you checked if (firstWord.incloudes(secondWord[i])) { return true} -> 
  //this would have just stopped at the first letter if the first characters of the strings match. 
  //In other words, it won't loop through the entire length of the string.

//16.CHUNKY MONKEY
function chunkArrayInGroups(arr, size) {
    //declare new array var
    let finalArr = [];
    //The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
    //for loop that starts at 0th index and stops at last element in the arr; += splits the arr every size elements
    for (let i = 0; i < arr.length; i+= size) {
      //pushing size elements as sub-arrays to finalArr
      finalArr.push(arr.slice(i, i + size));
    }
   return finalArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

