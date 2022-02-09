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

  reverse() {
    let node = this.tail;
    let counter = this.length;
    while (counter > 0) {
      const next = node.next;
      node.next = node.prev;
      node.prev = next;
      node = node.next;
      counter--;
    }
    const newHead = this.tail;
    this.tail = this.head;
    this.head = newHead;
    return this;
  }
}

const List = new DoublyLinkedList();
List.push("Hello").push('Hello1').push("Hello2").push("Hello3").push("Hello4").push("Hello5").push("Hello6");
console.log(List.reverse())