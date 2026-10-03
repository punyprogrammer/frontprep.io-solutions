/**
 * Shallow-merge source objects into a target object.
 *
 * Similar to Object.assign():
 * - Mutates the target
 * - Copies own enumerable properties
 * - Copies both string and Symbol keys
 * - Later sources overwrite earlier properties
 * - Performs a shallow copy
 *
 * @param {Object} target
 * @param {...Object} sources
 * @returns {Object} the mutated target
 */
function customAssign(target, ...sources) {
  // Native Object.assign() throws when the target is null or undefined
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  // Convert primitive targets (e.g. "hello", 123) into wrapper objects.
  // Object("hello") → String object
  // Object(123)     → Number object
  //
  // If target is already an object, Object(target) simply returns it.
  const targetObj = Object(target);

  // Process sources from left to right.
  // Later sources overwrite properties from earlier sources.
  for (const source of sources) {
    // Object.assign() ignores null and undefined sources.
    if (source === null || source === undefined) {
      continue;
    }

    // Object(source) allows primitives to be used as sources too.
    const sourceObj = Object(source);

    // Reflect.ownKeys() returns ALL own property keys:
    // - enumerable string keys
    // - non-enumerable string keys
    // - Symbol keys
    const keys = Reflect.ownKeys(sourceObj);

    for (const key of keys) {
      // Get metadata about the property instead of just its value.
      //
      // Example descriptor:
      // {
      //   value: 10,
      //   writable: true,
      //   enumerable: true,
      //   configurable: true
      // }
      const descriptor = Object.getOwnPropertyDescriptor(
        sourceObj,
        key
      );

      // Object.assign() only copies OWN ENUMERABLE properties.
      //
      // enumerable: true  → copy
      // enumerable: false → skip
      if (descriptor.enumerable) {
        // Shallow copy:
        // The value/reference itself is copied; nested objects aren't cloned.
        targetObj[key] = sourceObj[key];
      }
    }
  }

  // Object.assign() returns the same target object that it mutated.
  return targetObj;
}
