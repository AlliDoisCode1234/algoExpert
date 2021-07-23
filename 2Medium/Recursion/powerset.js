// O(n*2^n) time | O(n*2^n) space

function powerset(array) {
    const subsets = [[]];
      for (const ele of array) {
          //
          const length = subsets.length;
          for (let i = 0; i< length; i++) {
              // i= 0, length = 1 => [1],
              // i= 1, length = 2 => [2]
              // i= 2, length = 3 => [1, 2]
              // i= 3, length = 4 => [3]
              // i= 4, length = 5 => [1, 3]
              const currentSubset = subsets[i];
              // [1]
              // [2]
              // [3]
              // []
              subsets.push(currentSubset.concat(ele));
          }
      }
      return subsets;
  }