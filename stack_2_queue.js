class Node {
  constructor(val) {
    this.value = val
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val)
    this.size++;
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return this.size;
  }

  dequeue() {
    if (!this.first) return undefined;
    const result = this.first;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) this.last = null
    return result;
  }
}

class Stack {
  constructor() {
    this.emptyQueue = new Queue();
    this.nodesQueue = new Queue();
    this.size = 0;
  }

  push(val) {
    this.size++;
    if (this.size === 1) {
      this.nodesQueue.enqueue(val);
      return this;
    } else {
      this.emptyQueue.enqueue(val);
      while (this.nodesQueue.size > 0)
        this.emptyQueue.enqueue(this.nodesQueue.dequeue().value);
    }
    const temp = this.nodesQueue;
    this.nodesQueue = this.emptyQueue;
    this.emptyQueue = temp;
    return this;
  }

  pop() {
    if (!this.size) return null;
    this.size--;
    return this.nodesQueue.dequeue().value
  }
}

const stack = new Stack();
stack.push(10).push(20).push(30).push(40).push(50);
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())