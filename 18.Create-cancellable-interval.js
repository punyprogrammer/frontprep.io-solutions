function setCancellableInterval(func, delay, ...args) {
  // Your code here
  let timerId = setInterval(() => func(...args), delay);
  return function () {
    clearInterval(timerId);
  };
}
