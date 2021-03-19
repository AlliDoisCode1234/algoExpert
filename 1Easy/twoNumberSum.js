function twoNumberSum(array, targetSum) {
    // input1 => non-empty array of distinct integers
      // input2 => integer representing a target sum
      
      // if any two numbers in the input array sum up to target sum
      // return them in an array, in any order
      // if no two numbers sum up to the target sum
      // return empty array
      
      //NOTE: must use two different elements, cannot sum the same element with itself
      
      // You can assume that there will be at most one pair of numbers that equal target sum
      
      // // Hash Table
      // // O(nLog(n)) | O(1) space
      // Cost extra space but makes it run faster
      
      // Traverse array and store every number in a hash table
      // so we can access the numbers in constant time
      
      // Now that we have the hash table of numbers
      // we're going to traverse our array
      
      // Now we are going to check if the number needed 
      // to sum up to the target Sum is in Hash Table
      
      // When we're traversing the array we have a currentNum = x(the number we're at as we're traversing the array)
      // We want to find y so that x + y = 10 || y = 10 - x
      
      // if y is in our hash table
      // return x and y
      
      // otherwise we keep traversing the array and we make sure to store x in the hash table
      // y = 10 - 3 = 7 ... is 7 in our hash table? no then store x which is 3 in the hash table
      // store 3 in hash table with value of true to let us know it is in our hash table
      // keep traversing until we find pair or return empty array
      
      let sortedArray = array.sort((a,b) => a - b);
            
      // declaring variables for clean code
      let left = 0;
      let right = sortedArray.length - 1;

      // traverse the sorted array
      while (left < right) {
          // store current sum to check against target sum
          const currentSum = sortedArray[left] + sortedArray[right];
          if(currentSum === targetSum) {
              // if we have a pair that equals target sum
              // return array of indices 
              return [sortedArray[left], sortedArray[right]]
          } else if (currentSum < targetSum) {
              // keep traversing from the left
              left++
          } else if (currentSum > targetSum) {
              // keep traversing from the right
              right--
          }
      }
      // if we found no pair, return empty array
      return []
  }
      
      
      
      
  // export for algoExpert tests
  //   exports.twoNumberSum = twoNumberSum;