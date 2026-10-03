function sum(num) {
  // Your code here
  return function (num2) {
    return num2 === undefined ? num : sum(num + num2);
  };
}
