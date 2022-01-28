/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable. */

'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let numElements = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zero = 0;
    for (let i = 0; i < numElements; i++) {
        if (arr[i] > 0) {
            positiveCount += 1
        } else if (arr[i] < 0) {
            negativeCount += 1
        } else { 
            zero += 1;
        } 
    }
    
    let positives = (positiveCount/numElements).toFixed(6)
    let negatives = (negativeCount/numElements).toFixed(6)
    let z = (zero/numElements).toFixed(6)
    
    console.log(positives + "\n" + negatives + "\n" + z)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
