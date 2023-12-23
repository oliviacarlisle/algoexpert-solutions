class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
function removeDuplicatesFromLinkedList(linkedList) {
    let p = linkedList;
  
    while (p) {
        let n = p.next;
        while (n && n.value === p.value) { 
            n = n.next;
        }
        p.next = n;
        p = p.next;
    }
    
    return linkedList;
}