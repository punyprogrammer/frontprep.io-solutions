function intersection(...arrays) {
  if (arrays.length === 0) return [];

  const counts = new Map();

  for (const value of new Set(arrays[0])) {
    counts.set(value, 1);
  }

  for (let i = 1; i < arrays.length; i++) {
    const seen = new Set(arrays[i]);

    for (const value of counts.keys()) {
      if (seen.has(value)) {
        counts.set(value, counts.get(value) + 1);
      } else {
        counts.delete(value);
      }
    }
  }

  return [...counts.keys()];
}
