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

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
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

  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false;
    if (ind === 0) return !!this.unshift(val);
    if (ind === this.length) return !!this.push(val);

    const prev = this.get(ind - 1);
    const next = prev.next;
    if (!prev) return false;
    const newNode = new Node(val);
    newNode.prev = prev;
    newNode.next = next;
    prev.next = newNode;
    next.prev = newNode;
    this.length++;
    return true
  }
}

const List = new DoublyLinkedList();
List.push("Hello").push('Hello1').push("Hello2").push("Hello3").push("Hello4").push("Hello5").push("Hello6");
console.log(List);
// console.log(List.insert(0, 1))
console.log(List);
console.log(List.insert(8, 8))
console.log(List);
console.log(List.insert(3, 3))
console.log(List.get(3));

