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
 * @return {number[]}
 */

function buildBinaryTree(arr) {
  let i = 0;

  function helper() {
    if (i >= arr.length || arr[i] === null) {
      i++;
      return null;
    }
    const node = new TreeNode(arr[i]);
    i++;
    node.left = helper();
    node.right = helper();
    return node;
  }
  return helper();
}

var preorderTraversal = function(root) {
  if (!root) return [];

  const result = [root.val];
  result.push(...preorderTraversal(root.left));
  result.push(...preorderTraversal(root.right));      
  
  return result;
};