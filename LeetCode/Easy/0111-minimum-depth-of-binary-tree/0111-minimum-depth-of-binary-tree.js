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
 * @return {number}
 */

var minDepth = function(root) {
    if (!root) return 0;
    const q = [[root, 1]];
    while (q.length) {
        const [node, d] = q.shift();
        if (!node.left && !node.right) return d;
        if (node.left) q.push([node.left, d + 1]);
        if (node.right) q.push([node.right, d + 1]);
    }
    return 0;
};

// function minDepth(root) {
//   if (!root) return 0;
//   const lh = minDepth(root.left);
//   const rh = minDepth(root.right);

//   if (lh === 0 || rh === 0) return lh + rh + 1;
//   return Math.min(lh, rh) + 1;
// }