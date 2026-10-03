function setCancellableTimeout(func, delay, ...args) {
  // Your code here
  const timerId = setTimeout(() => func(...args), delay);
  return function () {
    clearTimeout(timerId);
  };
}
