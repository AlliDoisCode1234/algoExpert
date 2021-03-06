// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  
  // Average case: when the tree is balanced
  // O(n) time | O(h) space - where n is the number of nodes in
  // the Binary Tree and h is the height of the Binary Tree
  
  
  // Returns final answer
  function binaryTreeDiameter(tree) {
      return getTreeInfo(tree).diameter;  
  }
  
  
  // helper function that recursively finds height and diameter of each branch
  function getTreeInfo(tree) {
      if (tree === null) {
          return new TreeInfo(0, 0)
      }
      
      const leftTreeInfo = getTreeInfo(tree.left);
      const rightTreeInfo = getTreeInfo(tree.right);
      
      const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
      const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
      const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
      const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
      
      return new TreeInfo(currentDiameter, currentHeight);
  }
  
  class TreeInfo {
      constructor(diameter, height) {
          this.diameter = diameter;
          this.height = height;
      }
  }
  
  
  // Do not edit the line below.
  exports.binaryTreeDiameter = binaryTreeDiameter;
  exports.BinaryTree = BinaryTree;
  