// O(n) time | O(1) space - where n is the length of the input array
const kadanesAlgorithm = array => {
    // either maxSum = current number plus next number
      // or just current number
      // this accounts for negative numbers
      
      // maxSumOf Ending Here = max(maxEndingHere + number)
      // or
      // just our number
      let maxEndingHere = array[0];
      let maxSoFar = array[0];
      for (let i = 1; i < array.length; i++) {
          const num = array[i];
          maxEndingHere = Math.max(num, maxEndingHere + num);
          maxSoFar = Math.max(maxSoFar, maxEndingHere)
      }
      return maxSoFar
  }