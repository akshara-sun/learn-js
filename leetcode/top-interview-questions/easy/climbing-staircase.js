/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

// slow solution
// const climbStairs = (n) => {
//   if (n === 0 || n === 1) return 1;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

// fast solution
const climbStairs = (n) => {
  if (n < 3) return n;

  let prevCount = 1;
  let nextCount = 2;

  for (var i = 2; i < n; i++) {
    const temp = prevCount;
    prevCount = nextCount;
    nextCount = nextCount + temp;
  }

  return nextCount;
};
