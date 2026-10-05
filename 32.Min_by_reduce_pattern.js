function minBy(array, iteratee) {
  let minValue;

  return array.reduce((acc, item) => {
    const value = iteratee(item);

    if (value === null || value === undefined) {
      return acc;
    }

    if (minValue === undefined || value < minValue) {
      minValue = value;
      return item;
    }

    return acc;
  }, undefined);
}
