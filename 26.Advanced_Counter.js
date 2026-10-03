/**
 * @param {number} [initialValue=0] - The starting value of the counter
 * @returns {{ get: Function, increment: Function, decrement: Function, reset: Function }}
 */
function createCounter(initialValue = 0) {
  // Your code here
  let counter = initialValue;
  return {
    get: () => counter,
    increment: () => ++counter,
    decrement: () => --counter,
    reset: () => {
      counter = initialValue;
      return counter;
    },
  };
}

// --- Smoke tests (press Run to verify) ---
const counter = createCounter();
console.log(counter.get()); // Expected: 0
console.log(counter.increment()); // Expected: 1
console.log(counter.increment()); // Expected: 2
console.log(counter.reset()); // Expected: 0
console.log(counter.decrement()); // Expected: -1

const counter2 = createCounter(5);
console.log(counter2.get()); // Expected: 5
console.log(counter2.decrement()); // Expected: 4
console.log(counter2.reset()); // Expected: 5
