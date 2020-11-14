/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titles our solution for the code solution!
*/
// --------- Our solution -----------
class ListNode {
  constructor(val, next = null, child = null) {
    this.val = val;
    this.next = next;
    this.child = child;
  }
}

// ---- Generate our linked list ----
const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];

const buildMultiLevel = function (nodes) {
  const head = new ListNode(nodes[0]);
  let currentNode = head;

  for (let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode;

    if (Array.isArray(val)) {
      nextNode = buildMultiLevel(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    currentNode = nextNode;
  }

  return head;
};

let multiLinkedList = buildMultiLevel(nodes);

// ---- Generate our linked list ----

const printListMulti = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);

  if (head.child) {
    printListMulti(head.child);
  }

  printListMulti(head.next);
};

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);

  printList(head.next);
};

// --------- Our solution -----------

var flatten = function (head) {
  if (!head) {
    return head;
  }

  let currentNode = head;

  while (currentNode) {
    if (!currentNode.child) {
      currentNode = currentNode.next;
    } else {
      let childNode = currentNode.child;
      while (childNode.next) {
        childNode = childNode.next;
      }

      childNode.next = currentNode.next;
      if (childNode.next) {
        childNode.next.prev = childNode.next;
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};

printListMulti(multiLinkedList);
console.log("after flatten");
printList(flatten(multiLinkedList));
