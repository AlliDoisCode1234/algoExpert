// Best: O(nlog(n)) time | O(n) space
// Average: O(nlog(n)) time | O(n) space
// Worst: O(nlog(n)) time | O(n) space

// function mergeSort(array) {
//     if (array.length <= 1) return array;
//       const auxiliaryArray = array.slice();
//       mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
//       return array;
//   }
  
//   function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray) {
//       if (startIdx === endIdx) return;
//       const middleIdx = Math.floor((startIdx + endIdx) / 2)
//       mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
//       mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
//       doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
//   }
  
//   function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) {
//       let k = startIdx,
//               i = startIdx,
//               j = middleIdx + 1;
      
//       while (i <= middleIdx && j <= endIdx){
//           auxiliaryArray[i] <= auxiliaryArray[j] ? mainArray[k++] = auxiliaryArray[i++] : mainArray[k++] = auxiliaryArray[j++]
//       }
      
//       while (i <= middleIdx) {
//           mainArray[k++] = auxiliaryArray[i++];
//       }
      
//       while (j <= endIdx) {
//           mainArray[k++] = auxiliaryArray[j++]
//       }
      
//   }

  



//   SOLUTION #2 


function merge (left, right) {
	let arr = [];
	
	while (left.length && right.length){
		left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift())
	}
	
	return [...arr, ...left, ...right]
}


function mergeSort(array) {
  const half = array.length / 2
	
	
	if (array.length < 2) {
		return array;
	}
	
	const left = array.splice(0, half)
	return merge(mergeSort(left),mergeSort(array))
}