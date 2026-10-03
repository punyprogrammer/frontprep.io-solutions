function stringToObject(input) {
  // alternate solution
  // return Object.fromEntries(new URLSearchParams(input));
  // Your code here
  const cleanedInput = input.replace('?', '');
  const keyValuePairs = cleanedInput.split('&');
  return keyValuePairs.reduce((accumulator, item) => {
    const [key, value] = [item.split('=')[0], item.split('=')[1]];
    accumulator[key] = value;
    return accumulator;
  }, {});
}
