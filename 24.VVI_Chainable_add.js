/**
 * @param {number} num
 * @return {object}
 */
const add = (num1) => {
  // Your code here
  return {
    add: (num2) => add(num1 + num2),
    sum: () => num1,
  };
};

// --- Smoke tests (press Run to verify) ---
console.log(add(1).add(5).add(2).sum()); // Expected: 8
console.log(add(10).add(20).sum()); // Expected: 30
console.log(add(5).sum()); // Expected: 5
console.log(add(-5).add(10).sum()); // Expected: 5
