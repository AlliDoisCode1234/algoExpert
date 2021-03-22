
// First pointer travels a distance X
// Second pointer travels a distance of 2x

// F => X 
// S => 2X 
// For every one move the first pointer was doing
// the second pointer was moving double the amount of the first pointer

// Let's call the distance between our starting node
// to the origin of the loop = D

// Distance between the origin of the loop and 
// the node where our pointers overlap = P


// F => X => D + P
// S => 2X => 2D + 2P

// We want to find the distance between where the two pointers overlap
// and the start of the loop as we go forward = R

// So we have L

// F = First Pointer
// S = Second Pointer
// D = Distance from first node to start of loop
// P = Distance from start of loop to where the pointers overlap
// R = Remainder of distance from the overlap point and the start of loop if we go forward

// Goal is to move to return the node that starts the loop in the singly linked list

// R = (D + P + R) - (D + P)



// Our second pointer travels D, then P, then R + P
// Travels the distance of entire linked list plus P

// T = Distance of entire linked list

// T = D + P + R
// S  has travelled = D + P + R + P
// S = 2D + 2P
// Extra arc = P

// T = 2D + 2P - P
// P = 2D + P

// R = T - P - D
// R = 2D + P - P - D = D 




class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
     //initialize pointers
      let first = head.next;
      let second = head.next.next;
      
      // loop at diffrent speeds through the array 
      // until they land on the same node
      while (first !== second){
          first = first.next;
          second = second.next.next;
      }
      
      // since
      // we know the distance from the root node to the loop node
      // is equal to the distance from the overlap node to the loop node
      // we loop the first pointer and the second pointer at the same rate
      // and we find where they overlap to find the loop node
      first = head;
      while (first !== second){
          first = first.next;
          second = second.next;
      }
      return first;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.findLoop = findLoop;