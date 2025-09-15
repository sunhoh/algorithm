/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

// const arrToList = (arr, pos = 1) => {
//   const dummy = new ListNode();
//   let cur = dummy;
//   let cycleNode = null;

//   arr.forEach((val, index) => {
//     cur.next = new ListNode(val);
//     cur = cur.next;
//     if (index === pos) {
//       cycleNode = cur;
//     }
//   });

//   if (pos >= 0) {
//     cur.next = cycleNode;
//   }

//   return dummy.next;
// };