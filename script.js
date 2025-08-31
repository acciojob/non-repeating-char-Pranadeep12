function firstNonRepeatedChar(str) {
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeated character
}

// Examples
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
console.log(firstNonRepeatedChar('abc'));     // 'a'
console.log(firstNonRepeatedChar(''));        // null
