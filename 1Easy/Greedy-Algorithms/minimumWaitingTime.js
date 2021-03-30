// O(nlogn) time | O(1) space
//
//
//

const minimumWaitingTime = queries => {
    // Input: non-empty array of positive integers
      // representing the amounts of time that specific queries
      // take to execute.
      
      // only one query can be executed at a time
      // but they can be executed in any order
      
      // waitingTime = the amount of time that it must wait before its execution starts
      // if a query is executed second, then the waitingTime is the duration of the first query
      // third, the sum of the first and second query 
      
      // Return: minimum amount of total waiting time for all the queries
      
      // Example: 
      // 					given [1, 4, 5] .... Total waitingTime if executed in order of
      // 					[5, 1, 4] would be (0) + (5) + (5 + 1) = 11
      
      // E: 			[3,2,1,2,6]
                          // sort [1, 2, 2, 3, 6]
                              // 0 + 3 + (3+2) + (3+2+1) + 3+2+1+2
      
      // Note: you're allowed to mutate the input array
      queries.sort((a,b) => a - b);
      
      let waitingTime = 0;
      for (let idx = 0; idx < queries.length; idx++){
          const duration = queries[idx];
          const queriesLeft = queries.length - (idx + 1);
          waitingTime += duration * queriesLeft;
      }
      
      
    return waitingTime;
  }
  