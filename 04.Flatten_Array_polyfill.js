function flattenArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // Skip sparse array holes
    if (i in arr) {
      const value = arr[i];

      if (Array.isArray(value)) {
        result.push(...flattenArray(value));
      } else {
        result.push(value);
      }
    }
  }

  return result;
}
