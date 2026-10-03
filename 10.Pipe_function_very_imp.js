/**
 * @param {...Function} fns
 * @return {Function}
 */
const pipe = (...fns) => {
  return function (...args) {
    if (fns.length === 0) {
      return args[0];
    }

    return fns.slice(1).reduce(
      (acc, fn) => fn(acc),
      fns[0](...args)
    );
  };
};

const getName = (obj) => {
  // Your code here
  return obj?.['name']
};

const uppercase = (str) => {
  // Your code here
  return str.toUpperCase()
};

const reverse = (str) => {
  // Your code here
  return str.split("").reverse().join("")
};

// --- Smoke tests (press Run to verify) ---
const transform = pipe(getName, uppercase, reverse);

console.log(transform({ name: 'Frontend' }));
// Expected: 'DNETNORF'

console.log(pipe()('unchanged'));
// Expected: 'unchanged'
