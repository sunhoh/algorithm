/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   const minProfit = Math.min(...prices);
//   const start = prices.indexOf(minProfit);
//   let maxProfit = 0;

//   if (start === prices.length - 1) return 0;
//   for (let i = start; i < prices.length; i++) {
//     if (prices[i] >= prices[i + 1]) {
//       maxProfit = prices[i];
//     }
//   }

//   return maxProfit - minProfit;
// };
var maxProfit = function (prices) {
  let minPrice = prices[0]; 
  let maxProfit = 0; 

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
};