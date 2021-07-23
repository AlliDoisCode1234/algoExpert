// P: Binary Tree
// R: number representing max path sum
// E: Tree:

// 			1
// 		2		2
// 	3	4		3 3

// 7 // 4 + 2 + 1



// O(n) time | O(log(n)) space - where n is the number of nodes

function maxPathSum(tree) {
    const [_, maxSum] = findMaxSum(tree);
      return maxSum;
  }
  
  
  function findMaxSum(tree) {
      if (tree === null) return [-Infinity, -Infinity];
      
      // running tally of sum as branch or path down the left side of the tree
      const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
      
      // running tally of sum as branch or path down the right side of the tree
      const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
      
      // max sum of either left or right branch sum
      const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch)
      
      // current node value
      const {value} = tree;
      
      // the max sum as a branch is either the branch plus the current node value
      // or just the current node value
      const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
      
      // the max sum including root node is either the left branch max sum plus the current node value plus the right branch max sum
      // or just the max sum as a branch only
      const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch);
      
      // the max path sum as a child triangle is either the left path max sum, right path max sum, or max sum including the root node
      const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);
      
      // return a tuple of the max sum as a branch or a triangle 
      return [maxSumAsBranch, maxPathSum]
  }
  