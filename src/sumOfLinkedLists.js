class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const output = new LinkedList();
  let p = output;
  
  let carry = 0;
  while (linkedListOne || linkedListTwo || carry) {
    let num1 = linkedListOne ? linkedListOne.value : 0;
    let num2 = linkedListTwo ? linkedListTwo.value : 0;
    let sum = num1 + num2 + carry;
    carry = 0;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    }

    p.next = new LinkedList(sum);
    p = p.next;

    if (linkedListOne) linkedListOne = linkedListOne.next;
    if (linkedListTwo) linkedListTwo = linkedListTwo.next;
  }
  
  return output.next;
}