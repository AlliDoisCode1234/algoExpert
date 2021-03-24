class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
      // O(v + e) time | O(v)
    breadthFirstSearch(array) {
          // create data structure queue
          // enqueue first node into queue
      const queue = [this];
          // while queue is not empty
          while (queue.length > 0) {
              // dequeue using FIFO rule
              const current = queue.shift();
              // push current node name
              // where name is the initial node input
              array.push(current.name);
              // enqueue any child into the queue
              for (const child of current.children) {
                  queue.push(child);
              }
          }
          return array
    }
  }