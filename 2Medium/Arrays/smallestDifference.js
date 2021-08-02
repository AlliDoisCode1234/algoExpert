function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);
       let idxOne = 0,
               idxTwo = 0,
               smallest = Infinity,
               current = Infinity,
               smallestPair = [];
       while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
           let firstNum = arrayOne[idxOne],
                   secondNum = arrayTwo[idxTwo];
           if (firstNum < secondNum) {
               current = secondNum - firstNum;
               idxOne++;
           } else if (secondNum < firstNum) {
               current = firstNum - secondNum;
               idxTwo++
           } else {
               return [firstNum, secondNum];
           }
           if (smallest > current) {
               smallest = current;
               smallestPair = [firstNum, secondNum]
           }
       }	
       return smallestPair;	
   }