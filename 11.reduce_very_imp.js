Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const hasInitialValue = arguments.length >= 2;
  const len = this.length;

  let accumulator;
  let startIndex;

  if (hasInitialValue) {
    // If initialValue is provided, iteration starts at index 0
    accumulator = initialValue;
    startIndex = 0;
  } else {
    // Find the first existing element
    let firstIndex = 0;

    while (firstIndex < len && !(firstIndex in this)) {
      firstIndex++;
    }

    // No element exists
    if (firstIndex >= len) {
      throw new TypeError(
        "Reduce of empty array with no initial value"
      );
    }

    accumulator = this[firstIndex];
    startIndex = firstIndex + 1;
  }

  // Process remaining elements
  for (let i = startIndex; i < len; i++) {
    if (i in this) {
      accumulator = callback(
        accumulator,
        this[i],
        i,
        this
      );
    }
  }

  return accumulator;
};
