function getNumberFrequency(arr) {
  const freqCount = {};

  function traverse(items) {
    for (const item of items) {
      if (Array.isArray(item)) {
        traverse(item);
      } else {
        freqCount[item] = (freqCount[item] ?? 0) + 1;
      }
    }
  }

  traverse(arr);

  return freqCount;
}
