// callback signature callbackFn(element, index, array)
Array.prototype.myFilter = function (callback, thisArg) {
  // Your code here
  const result = [];
  for (let i = 0; i < this.length; i++) {
    //  sparse array check
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) result.push(this[i]);
    }
  }
  return result;
};

// --- Smoke tests (press Run to verify) ---
console.log([1, 2, 3, 4, 5].myFilter((n) => n > 3));
// Expected: [4, 5]

console.log([1, 2, 3, 4, 5].myFilter((n) => n % 2 === 0));
// Expected: [2, 4]

console.log([].myFilter((n) => n > 0));
// Expected: []
