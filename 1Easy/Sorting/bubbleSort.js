// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

function bubbleSort(array) {
	// declare isSorted to false
	// assume array is not sorted
  let isSorted = false;
	let counter = 0;
	
	// while the assumed array is not sorted
	while (!isSorted){
		// tentatively set isSorted to true
		// assume array is sorted
		isSorted = true;
		// iterate through the array up to the last index
		// and we're subtracting the counter because we're 
		// looping through so we can assume during the first
		// loop that the last values are swapped correctly
		for (let i=0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i + 1]) {
				swap(i, i + 1, array);
				// if we had to swap, we need to loop again
				// to ensure all values are sorted correctly
				// if not loop again
				isSorted = false;
			}
		}
		// count each time we swap to save time by not
		// running the function on end values we know
		// are already swapped
		counter++;
	}
	return array;
}

// abstract out for cleanliness
// helper function
function swap(i, j, array){
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
	
}