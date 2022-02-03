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

  reverse() {
    let prev = this.head
    this.head = this.tail;
    this.tail = prev;
    let counter = 0;
    let current = this.tail.next;
    let next = this.tail.next.next;
    prev.next = null;
    while (counter < this.length - 1) {
      current.next = prev;
      prev = current;
      current = next;
      if (next.next) {
        next = next.next ? next.next : null
      }
      counter++
    }

    //solution from course
    // let node = this.head;
    // this.head = this.tail;
    // this.tail = node;
    // let next;
    // let prev = null;
    // for (let i = 0; i < this.length; i++) {
    //   next = node.next;
    //   node.next = prev;
    //   prev = node;
    //   node = next;
    // }

    return this;
  }
}

const List = new SinglyLinkedList();
List.push(5).push(10).push(15).push(20);
console.log(List)
console.log(List.reverse())