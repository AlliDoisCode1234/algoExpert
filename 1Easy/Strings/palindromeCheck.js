// function isPalindrome(string) {
//    return string === [...string].reverse().join("")
// }

// O(n) time | O(1) space
const isPalindrome = string => {
	let leftIdx = 0;
	let rightIdx = string.length - 1;
	while (leftIdx < rightIdx) {
		if (string[leftIdx] !== string[rightIdx]) return false;
		leftIdx++
		rightIdx--
	}
	return true
}
// Do not edit the line below.
exports.isPalindrome = isPalindrome;