const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n')
const nodes = input.map(v => v.split(' '));


class Tree {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }

  traversePreOrder(curNode = this) {
    if (!curNode) {
      return '';
    }
    const leftNodes = this.traversePreOrder(curNode.leftNode);
    const rightNodes = this.traversePreOrder(curNode.rightNode);
    return curNode.value + leftNodes + rightNodes;
  }

  traverseInOrder(curNode = this) {
    if (!curNode) {
      return '';
    }
    const leftNodes = this.traverseInOrder(curNode.leftNode);
    const rightNodes = this.traverseInOrder(curNode.rightNode);
    return leftNodes + curNode.value + rightNodes;
  }

  traversePostOrder(curNode = this) {
    if (!curNode) {
      return '';
    }
    const leftNodes = this.traversePostOrder(curNode.leftNode);
    const rightNodes = this.traversePostOrder(curNode.rightNode);
    return leftNodes + rightNodes + curNode.value;
  }
}

const trees = Array
  .from({ length: N }, (_, i) => new Tree(String.fromCharCode(i + 65)))
  .reduce((acc, tree) => {
    acc[tree.value] = tree;
    return acc;
  }, {});

nodes.forEach(([node, left, right]) => {
  if (left !== '.') {
    trees[node].leftNode = trees[left];
  }
  if (right !== '.') {
    trees[node].rightNode = trees[right];
  }
});

console.log(trees.A.traversePreOrder());
console.log(trees.A.traverseInOrder());
console.log(trees.A.traversePostOrder());