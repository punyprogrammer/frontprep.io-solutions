function reverseWords(str) {
  // Your code here
  return str
    .split(' ')
    .map((item) => item.split('').reverse().join(''))
    .join(' ');
}

// --- Smoke tests (press Run to verify) ---
console.log(reverseWords('Hello World'));
// Expected: "olleH dlroW"

console.log(reverseWords('JavaScript is awesome'));
// Expected: "tpircSavaJ si emosewa"

console.log(reverseWords('a'));
// Expected: "a"
