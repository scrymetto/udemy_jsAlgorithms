class Node {
  constructor(val) {
    this.val = val
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

const q = new Queue();
q.enqueue("Hello");
q.enqueue("Hello1");
q.enqueue("Hello2");
q.enqueue("Hello3");
console.log(q.dequeue())
console.log(q.first)
console.log(q)
console.log("-------")
console.log(q.dequeue())
console.log(q.first)
console.log(q)
console.log("-------")
console.log(q.dequeue())
console.log(q.first)
console.log(q);
console.log("-------")
console.log(q.dequeue())
console.log(q.first)
console.log(q)