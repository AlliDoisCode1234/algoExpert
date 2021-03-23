// Best: O(n) time | O(1)
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

function insertionSort(array) {
  
	// we can assume the first element in the array is tentatively sorted 
	// if we visualize the array given as two separate arrays
	// within the same input array
	// we can say the first element is sorted
	// now we need a second index j = i
	// 
	for(let i = 1; i < array.length; i++){
		// we initialize second pointer j to i 
		let j = i;
		// while the array is not sorted
		// insert all elements of unsorted side
		// into sorted side by using a helper function
		// called swap that swaps backwards
		// until the entire array is sorted
		
		// we haven't reached the very beginning of the array
		// and while array[j] is out of position/ is not sorted
		// swap with previous number
		// j tracks number we're tying to insert
		while(j > 0 && array[j] < array[j - 1]){
			swap(j, j - 1, array)
			j--
		} 
	}
	return array
}

const swap = (i, j, array) => {
		let temp = array[j]
		array[j] = array[i]
		array[i] = temp
	}