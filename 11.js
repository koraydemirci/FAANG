/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ---- Generate our linked list ----
const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

let curr = linkedList,
  cycleNode;
while (curr.next !== null) {
  if (curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;
// ---- Generate our linked list ----

// --------- Our solution -----------
const findCycle1 = function (head) {
  const seen = new Set();
  let currentNode = head;

  while (!seen.has(currentNode)) {
    if (currentNode.next) {
      return false;
    }

    seen.add(currentNode);
    currentNode = currentNode.next;
  }

  return currentNode;
};

const findCycle2 = function (head) {
  let slow = head;
  let fast = head;

  while (true) {
    slow = slow.next;
    fast = fast.next;
    if (!fast || !fast.next) {
      return false;
    } else {
      fast = fast.next;
    }

    if (slow === fast) {
      break;
    }
  }

  let p1 = head;
  let p2 = slow;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};

console.log(findCycle2(linkedList));
