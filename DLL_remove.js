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

  shift() {
    if (this.length === 0) return undefined;
    const result = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    result.next = null;
    return result
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

  get(ind) {
    if (ind < 0 || ind >= this.length) return null;
    let result = this.head;
    let counter = 0;
    if (ind < Math.floor(this.length / ind)) {
      while (counter < ind) {
        result = result.next;
        counter++;
      }
    } else {
      result = this.tail;
      counter = this.length - 1;
      while (counter > ind) {
        result = result.prev;
        counter--;
      }
    }
    return result;
  }

  remove(ind) {
    if (ind < 0 || ind >= this.length) return undefined
    if (ind === 0) return this.shift();
    if (ind === this.length - 1) return this.pop();
    const node = this.get(ind);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }
}

const List = new DoublyLinkedList();
List.push("Hello").push('Hello1').push("Hello2").push("Hello3").push("Hello4").push("Hello5").push("Hello6");
console.log(List);
console.log(List.remove(0));
console.log(List);
console.log(List.remove(5));
console.log(List);
console.log(List.remove(2))
console.log(List.get(2))
