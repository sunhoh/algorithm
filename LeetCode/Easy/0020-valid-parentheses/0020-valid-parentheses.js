/**
 * @param {string} s
 * @return {boolean}
 */
 
var isValid = function (s) {
  const strs = s.split("");
  const stack = [];

  for (let char of strs) {
    if (char === "(" || char === "[" || char === "{") {
      if (char === "(") stack.push(")");
      if (char === "[") stack.push("]");
      if (char === "{") stack.push("}");
    } else if (!stack.length || stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
};
