'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
    //Pseudo code
    /*
    1. find the min and max values of array in order to determine the range of numbers you are going to be dealing with 
        EDIT: Range should be 100.
    2. create res array and the length of that new array is going to be the range of input array
    3. loop through res array and initialize all values as zero
    4. loop through input array 
        - treat arr[i] as index of result array 
        - increment the value at res array[arr[i]] by 1
    5. return resArr
     */
    
    let range = 100;
    let resArr = [];
    let indexOfResArr = 0;
    while (indexOfResArr < range) {
        resArr.push(0)
        indexOfResArr++
    }
    for (let j = 0; j < arr.length; j++) {
        let incrementAtIndex = arr[j]
        resArr[incrementAtIndex] += 1;
    }
    return resArr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
