function quickSort(array) {
    // initialize pivet
      
      // all numbers to the left of the pivet is smaller than
      // right of pivot greater than 
      
      // initialize left and right pointer
      
      // while right pointer is greater of equal to left pointer
      // we haven't finished sorting
      
      // at each pass
      // is the left pointer greater than the pivot
      // is the R smaller than the pivot
      // if the Left is greater than pivot && Right is smaller than the pivot
      // we swap the Left number and Right number
      
   quickSortHelper(array, 0, array.length - 1);
      return array;
  
  }
  
  const quickSortHelper = (array, startIdx, endIdx) => {
      
      if (startIdx >= endIdx) return;
      
      // initialize the pivot, Left Index pointer, and Right Index pointer
      const pivotIdx = startIdx;
      let leftIdx = startIdx + 1;
      let rightIdx = endIdx;
      
      // while the array is unsorted
      while (rightIdx >= leftIdx) {
          // our Left pointer number is great than  our pivot number
          // and
          // our Right pointer number is less than our pivot number
          
          if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
              // swap the left pointer number and the right pointer number
              swap(leftIdx, rightIdx, array);
          }
          if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
          if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
       }
      swap(pivotIdx, rightIdx, array);
      const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
      if (leftSubarrayIsSmaller) {
          quickSortHelper(array, startIdx, rightIdx -1);
          quickSortHelper(array, rightIdx + 1, endIdx);
      } else {
          quickSortHelper(array, rightIdx + 1, endIdx);
          quickSortHelper(array, startIdx, rightIdx - 1);
      }
  }
  
  const swap = (i, j, array) => {
      let temp = array[j];
      array[j] = array[i]
      array[i] = temp;
  }