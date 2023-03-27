/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

const mySqrt = (x) => {
  let num = 0;
  let product = 0;
  while (num >= 0) {
    product = num * num;
    if (product < x) {
      num++;
      product = 0;
    } else if (product === x) {
      return num;
    } else {
      return num - 1;
    }
  }
};
