class Node {
  constructor(val) {
    this.val = val
    this.next = null;
  }
}

class SinglyLinkedList {

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
      this.tail = node;
    }
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const result = this.tail;
    let prev = this.head;
    let last = this.head.next;
    while (last.next !== null) {
      prev = last;
      last = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    // refactor from course
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return result;
  }
}

const List = new SinglyLinkedList();
List.push("Hello");
List.push("Hello1");
List.push("Hello2");
List.push("Hello3");
console.log(List.pop())
console.log(List.tail)