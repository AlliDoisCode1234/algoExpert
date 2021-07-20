// My Brute Force:
// function moveElementToEnd(array, toMove) {
// 	// P: array and number to move instances to the end
// 	// R: array
// 	// E: [1,3,4,5,5,4,4] , 5 => [1,3,4,4,4,5,5]
// 	// P: map through array to see if element equals toMove, if so, push to end
// 	let addEnd = [];
// 	let newArr = []
// 	for (let i = 0; i < array.length; i++) {
// 		array[i] === toMove ? addEnd.push(array[i]) : newArr.push(array[i])
// 		}

// 	return newArr.concat(addEnd)
	
// }

// // console.log(moveElementToEnd([1,3,4,5,5,4,4], 5), [1,3,4,4,4,5,5])

// // Do not edit the line below.
// exports.moveElementToEnd = moveElementToEnd;


// Optimal Solution: 



// O(n) time | O(1) space - where n is the length of the array

function moveElementToEnd(array, toMove) {
    let i = 0;
      let j = array.length - 1;
      
      while(i < j) {
          while(i < j && array[j] === toMove) j--;
          if(array[i] === toMove) swap(i, j, array);
          i++;
      }
      return array;
  }
  
  function swap(i, j, array) {
      const temp = array[j];
      array[j] = array[i]
      array[i] = temp;
  }
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  