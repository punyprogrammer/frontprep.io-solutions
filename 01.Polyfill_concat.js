Array.prototype.myConcat = function (...args) {
  // Your code here
  const result = [...this];
  
  for (arg of args) {
    if (Array.isArray(arg)) result.push(...arg);
    else result.push(arg);
  }
  return result;
};

// --- Smoke tests (press Run to verify) ---
console.log([1, 2].myConcat([3, 4]));
// Expected: [1, 2, 3, 4]

console.log(['a'].myConcat('b', ['c', 'd'], 'e'));
// Expected: ['a', 'b', 'c', 'd', 'e']

console.log([1].myConcat([2, [3, 4]]));
// Expected: [1, 2, [3, 4]]  (only flattens one level)
