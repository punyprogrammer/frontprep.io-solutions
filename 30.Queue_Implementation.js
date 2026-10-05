class Queue {
  // Your code here
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.isEmpty() ? null : this.queue.shift();
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.queue.length;
  }
  peek() {
    return this.isEmpty() ? null : this.queue[0];
  }
}
