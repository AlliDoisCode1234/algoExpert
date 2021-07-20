// 1

// O(n^2) time | O(n) space - where n is the length of the input array

function arrayOfProducts(array) {
	// P: array
	// R: array of products
	// E: [1, 2, 3, 4] => [24, 12, 8, 6]
	// P: 
	// loop through and product if not el
	const products = [];
	
	for (let i = 0; i < array.length; i++) {
		let runningProduct = 1;
		for (let j = 0; j < array.length; j++) {
			if (i !== j) {
				runningProduct *= array[j];
			}
			products[i] = runningProduct;
		}
	}
	
	return products;
}


// 2

// O(n) time | O(n) space - where n is the length of the input array

function arrayOfProducts(array) {
    const products = new Array(array.length).fill(1),
                  leftProducts = new Array(array.length).fill(1),
                  rightProducts = new Array(array.length).fill(1);
      
      let leftRunningProduct = 1;
      for (let i = 0; i < array.length; i++) {
          leftProducts[i] = leftRunningProduct;
          leftRunningProduct *= array[i];
      }
      
      let rightRunningProduct = 1;
      for (let i = array.length - 1; i > -1; i--) {
          rightProducts[i] = rightRunningProduct;
          rightRunningProduct *= array[i]
      }
      
      for (let i = 0; i < array.length; i++) {
          products[i] = leftProducts[i] * rightProducts[i];
      }
      
      return products
  }

// 3 (OPTIMAL)

// O(n) time | O(n) space - where n is the length of the input array

function arrayOfProducts(array) {
    const products = new Array(array.length).fill(1);
      // creates a new array the same size with 1 filling each element
      
      let leftRunningProduct = 1;
      
      for(let i = 0; i < array.length; i++) {
          // muliply left side 
          products[i] = leftRunningProduct;
          leftRunningProduct *= array[i]
      }
      
      let rightRunningProduct = 1;
      for (let i = array.length - 1; i > -1; i--) {
          // muliply right side 
          products[i] *= rightRunningProduct;
          rightRunningProduct *= array[i];
      }
      
      return products
  }