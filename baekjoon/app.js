

// class TreeNode {
//   constructor(value) {
//     this.value = value;   // 노드의 값
//     this.left = null;     // 왼쪽 자식 노드
//     this.right = null;    // 오른쪽 자식 노드
//   }
// }
// class Tree {
//   constructor(){
//     this.root = null
//   }

//   setRoot(value) {
//     this.root = new TreeNode(value);
//   }
//   addLeft(node, value) {
//     if (value !== '.') {
//       node.left = new TreeNode(value);
//     }
//   }

//   addRight(node, value) {
//     if (value !== '.') {
//       node.right = new TreeNode(value);
//     }
//   }

//   preorder(node){
//     if(node){
//       console.log(node.value)
//       this.preorder(node.left);
//       this.preorder(node.right);
//     } 
//   }

//   inorder(node){
//     if(node){
//       this.inorder(node.left);
//       console.log(node.value)
//       this.inorder(node.right);
//     } 
//   }
  
//   postorder(node){
//     if(node){
//       this.postorder(node.left);
//       this.postorder(node.right);
//       console.log(node.value)
//     } 
//   }
// }

// const tree = new Tree()
// tree.setRoot('A');                  
// tree.addLeft(tree.root, 'B');       
// tree.addRight(tree.root, 'C');      
// tree.addLeft(tree.root.left, 'D');  
// tree.addLeft(tree.root.right, 'E'); 
// tree.addRight(tree.root.right, 'F');
// tree.addRight(tree.root.right.right, 'G'); 

// tree.preorder(tree.root)
// tree.inorder(tree.root)
// tree.postorder(tree.root)

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const [N,...input] = fs.readFileSync(filePath).toString().split('\n')

// console.log(input)

let result = '';

const tree = {};
for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
}

console.log(result)

function preorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  result += node;
  preorder(left);
  preorder(right);
}

function inorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  inorder(left);
  result += node;
  inorder(right);
}

function postorder(node) {
  if (node === ".") return;
  const [left, right] = tree[node];
  postorder(left);
  postorder(right);
  result += node;
}

preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

// 전위 순회한 결과 : ABDCEFG // (루트) (왼쪽 자식) (오른쪽 자식)
// 중위 순회한 결과 : DBAECFG // (왼쪽 자식) (루트) (오른쪽 자식)
// 후위 순회한 결과 : DBEGFCA // (왼쪽 자식) (오른쪽 자식) (루트)