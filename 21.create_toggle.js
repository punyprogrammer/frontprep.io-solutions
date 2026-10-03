function createToggle(...values) {
  const size = values.length;

  let index = 0;

  return function () {
    const state = values[index % size];
    index += 1;

    return state;
  };
}
