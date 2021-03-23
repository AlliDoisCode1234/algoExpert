// Space Time Complexity 
//
//
// O(n) time | O(1) space - where n is the length of the array
//
//
//

function isValidSubsequence(array, sequence) {
    // given two non-empty arrays of integers
    // determine if second array is a subsequence of the first array
       
       // a subsequence of an array is a set of numbers
       // not necessarily adjacent in the array
       // but are in the same order as they appear in the array
       
       // ex [1, 2, 3, 4] is the first array
       // [1, 3, 4] and [2, 4] are both subsequences
       
       // Note:
       // A single number in the array and
       // the array itself are both valid subsequences
       
       // Return true or false
       
       
       // Traverse both arrays
        
       
       // create pointer variable
       let sequenceIndex = 0;
       // traverse the length of main array
       for (const value of array) {
       
       // if the length of the sequence array equals
       // the current sequence index we leave on
       // break out to return true
           if (sequenceIndex === sequence.length) break;
           
       // if the element in the sequence equals the value in the main array
       // check the next sequence
           if (sequence[sequenceIndex] === value) sequenceIndex++
   
       }
       // if the index in the sequence we end on equals
       // the length of the sequence array
       // we know all elements passed the test
       // we return true
       // else false
       return sequenceIndex === sequence.length;
       
   }


//  algoExpert test export
// exports.isValidSubsequence = isValidSubsequence;
