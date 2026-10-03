/**
 * @param {*} value - Any JavaScript value
 * @returns {string} A lowercase string representing the type
 */
function getType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (Number.isNaN(value)) return "number";

  const type = Object.prototype.toString.call(value);

  switch (type) {
    case "[object Date]":
      return "date";

    case "[object Set]":
      return "set";

    case "[object Map]":
      return "map";

    case "[object RegExp]":
      return "regexp";

    default:
      return typeof value;
  }
}
