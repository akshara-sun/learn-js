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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  let result = s;
  let hour = parseInt(s.substring(0,2))
  let AMorPMCheck = s.substring(s.length-2, s.length)
  if (hour < 12 && AMorPMCheck === "PM") {
    hour = (hour + 12).toString()
    result = hour + s.substring(2,s.length-2) 
    return result;
  }
  if (hour === 12 && AMorPMCheck === "AM") {
    hour = "00"
    result = hour + s.substring(2,s.length-2)
    return result;
  } 
    result = s.substring(0, s.length-2)
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
