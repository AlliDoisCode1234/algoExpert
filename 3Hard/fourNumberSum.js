// Average: O(n^2) time | O(n^2) space
// Worst: O(n^3) time | O(n^2) space


function fourNumberSum(array, targetSum) {
    // write a function that takes in a non-empty array 
      // of distinct integers and an interger 
      // representing a target sum. 
      // should find all quadruplets in the array that sum 
      // up to the target sum
      // return 2D array of all these quadruplets in no particular order.
      
      // if no sum, return empty array
      const allPairSums = {}
      const quadruplets = [];
      for (let i = 1; i < array.length -1; i++) {
          for (let j = i + 1; j < array.length; j++) {
              const currentSum = array[i] + array[j];
              const difference = targetSum - currentSum;
              if(difference in allPairSums) {
                  for (const pair of allPairSums[difference]) {
                      quadruplets.push(pair.concat([array[i], array[j]]));
                  }
              }
          }
          for (let k = 0; k < i; k++) {
              const currentSum = array[i] + array[k];
              if(!(currentSum in allPairSums)) {
                  allPairSums[currentSum] = [[array[k], array[i]]];
              } else {
                  allPairSums[currentSum].push([array[k], array[i]]);
              }
          }
      }
      return quadruplets;
      
  }
  
  console.log(fourNumberSum([1,2,3,4,5,6,7,8], 15))
  // Do not edit the line below.
  exports.fourNumberSum = fourNumberSum;
  