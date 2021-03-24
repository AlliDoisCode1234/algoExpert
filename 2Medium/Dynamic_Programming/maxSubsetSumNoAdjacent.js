// O(n) time | O(1) space

function maxSubsetSumNoAdjacent(array) {
  
	// I: array of pos ints
	// O: max sum of non-adjacent elements in array - if empty array return 0
	
	// if array is empty return 0
	if (!array.length) return 0;
	// if array has only one element, return that one element
	if (array.length === 1) return array[0];
	// initialize pointers
	let second = array[0]
	// first equals whatever element is greater out of the two adjacent
	let first = Math.max(array[0], array[1]);
	
	// loop through array to find sum of no adjacent
	for (let i = 2; i < array.length; i++){
		// store current sum and update values
		const current = Math.max(first, second + array[i])
		second = first;
		first = current;
	}
	return first;
}