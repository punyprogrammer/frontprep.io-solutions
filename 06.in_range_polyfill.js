function inRange(value, start, end) {
  // Your code here
  min = Math.min(start,end)
  max = Math.max(start,end)
  return value >= min && value <=max
}
