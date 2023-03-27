// 121.
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
const maxProfit = (prices) => {
  // if prices array is empty, return 0
  if (!prices.length) return 0;
  // initialize profit variable
  let maxProfit = 0;
  // initialize current stock amount and update as you loop through the array
  let minPrice = prices[0];
  // iterate through prices array
  for (let i = 1; i < prices.length; i++) {
    // if prices[i] < minPrice, update minPrice
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      // if it's greater than or equal to minPrice,
      // update maxProfit by subtracting the minPrice from prices[i]
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
};
