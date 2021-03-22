// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  
  // O(n) time | O(1) space
  function findLoop(head) {
      // create two pointers
   let first = head.next;
      let second = first.next;
      // our first node travels from the first nodes to the start of the loop
      // all the way to the point it overlapped with the second pointer
      // then traveled back from the head of the linked list
      // all the way to the origin of the loop
      // equal to the remainder of the linked list
      
      // the second pointer did a bunch more
      // in the same amount of time
      while (first !== second){
          first = first.next;
          second = second.next.next;
      }
      first = head;
      while (first !== second) {
          first = first.next;
          second = second.next;
      }
      return first;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.findLoop = findLoop;
  