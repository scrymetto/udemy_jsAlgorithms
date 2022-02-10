class Node {
  constructor(val) {
    this.value = val
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val)
    this.size++;
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return this.size;
  }

  pop() {
    if (!this.size) return null;
    const result = this.first;
    this.size--;
    if (!this.size) {
      this.first = null;
      this.last = null;
    } else {
      this.first = result.next;
      result.next = null
    }
    return result.value
  }
}

const stack = new Stack();
stack.push("Hello");
console.log(stack);
stack.push("Hello1");
console.log(stack);
stack.push("Hello2");
console.log(stack);
stack.push("Hello3");
console.log(stack);
console.log(stack);
console.log(stack.pop())
console.log(stack);
console.log(stack.pop())
console.log(stack);
console.log(stack.pop())
console.log(stack);
console.log(stack.pop())
console.log(stack);
console.log(stack.pop())
console.log(stack);
