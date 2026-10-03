function objectMap(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      callback(value, key, obj)
    ])
  );
}
