class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
          // if current node has an array 
          // we know it has a child node
      array.push(this.name);
          console.log(array)
          // iterate through all the children of the current node
          for (const child of this.children) {
              
              child.depthFirstSearch(array)
          }
          return array
    }
  }