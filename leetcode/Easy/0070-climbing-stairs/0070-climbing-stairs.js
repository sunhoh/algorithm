/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // if (n === 0 || n === 1) return 1;
    // return climbStairs(n - 1) + climbStairs(n - 2);
    let a=1, b=1
    if (n === 1) return 1;
    if (n === 2) return 2;
    for(let i=0; i<n; i++){
        [a,b] = [b, a+b]
    }
    return a
};