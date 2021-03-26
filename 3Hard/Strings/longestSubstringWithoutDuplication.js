// O(n) time - where n is the length of the input string | O(min(n, a)) space

const longestSubstringWithoutDuplication = string => {
	// store characters and indices in hash table
  const lastSeen = {}
	// store starting index of current longest string
	// and ending index of current longest string
	let longest = [0, 1];
	let startIdx = 0;
	for ( let i = 0; i < string.length; i++){
		const char = string[i];
		if (char in lastSeen) {
			// if the character is in the hash table
			// maximum of the current startIdx 
			// or lastSeen character
			startIdx = Math.max(startIdx, lastSeen[char] + 1);
		}
		// update the longest string
		// if longest[1] - longest[0], take the difference right after the end of the string 
		// and the beginning of the string
		
		if (longest[1] - longest[0] < i + 1 - startIdx) {
			// if current difference is smaller
			// update longest string
			longest = [startIdx, i + 1]
		}
		// either adds or overwrites char in hashtable
		lastSeen[char] = i
	}
	// at least return first element
	// else return updated longest substring index
	// based on longest substring we found
	return string.slice(longest[0], longest[1])
}