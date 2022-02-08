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

  set(ind, val) {
    const node = this.get(ind);
    if (node) {
      node.val = val;
      return true
    }
    return false;
  }
}

const List = new DoublyLinkedList();
List.push("Hello").push('Hello1').push("Hello2").push("Hello3").push("Hello4").push("Hello5").push("Hello6");
console.log(List.get(2));
List.set(2, 'HELLO2')
console.log(List.get(2));