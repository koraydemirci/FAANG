class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

const printList = (head) => {
  if (!head) {
    return;
  }
  console.log(head.val);
  printList(head.next);
};

var reverseBetween = function (head, m, n) {
  let current = head;
  let currentPosition = 1;
  let holder = head;

  while (currentPosition < m) {
    holder = current;
    current = current.next;
    currentPosition++;
  }

  let previous = null;
  let holder2 = current;
  while (currentPosition >= m && currentPosition <= n) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    currentPosition++;
  }

  holder.next = previous;
  holder2.next = current;

  if (m > 1) {
    return head;
  } else {
    return previous;
  }
};
printList(linkedList);
console.log("after reverse");
printList(reverseBetween(linkedList, 2, 4));
