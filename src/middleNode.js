class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
    
  function middleNode(linkedList) {
    let fast = linkedList;
    let slow = linkedList;
    while (fast !== null) {
      fast = fast.next;
      
      if (fast) {
        slow = slow.next;
        fast = fast.next;
      } 
    }
    return slow;
}