class Node {
  constructor(val) {
    this.val = val
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val)
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const result = this.tail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    result.prev = null;
    return result;
  }
}

const List = new DoublyLinkedList();
List.push("Hello").push("Hello1").push('hello2').push("Hello3").push("Hello4");
console.log(List);
console.log(List.pop());
console.log(List);
