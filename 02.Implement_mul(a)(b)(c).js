/**
 * @param {number} a
 * @return {Function}
 */
const mul = (a) => {
  // Your code here
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

// --- Smoke tests (press Run to verify) ---
console.log(mul(1)(2)(3)); // Expected: 6
console.log(mul(5)(5)(5)); // Expected: 125
console.log(mul(2)(3)(4)); // Expected: 24
console.log(mul(0)(5)(10)); // Expected: 0
