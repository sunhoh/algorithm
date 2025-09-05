/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 // BFS Bottom-Up
// var hasPathSum = function (root, targetSum = 22) {
//   if (!root) return false;
//   const q = [[root, root.val]];
//   while (q.length) {
//     const [node, sum] = q.shift();
//     if (!node.left && !node.right && sum === targetSum) return true;
//     if (node.left) q.push([node.left, sum + node.left.val]);
//     if (node.right) q.push([node.right, sum + node.right.val]);
//   }
//   return false;
// };

// DFS Top-Down
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;

  const next = targetSum - root.val;
  return hasPathSum(root.left, next) || hasPathSum(root.right, next);
};