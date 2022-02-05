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

  get(ind) {
    if (ind >= this.length || ind < 0) {
      return null
    }
    let counter = 0;
    let result = this.head;
    while (counter < ind) {
      result = result.next;
      counter++
    }
    return result
  }

  rotate(ind) {
    if (ind === 0) return this;
    if (ind >= this.length) return;
    const prevInd = ind < 0 ? this.length - 1 + ind : ind - 1;
    const prev = this.get(prevInd);
    const newHead = prev.next;
    prev.next = null;
    this.tail.next = this.head;
    this.head = newHead;
    this.tail = prev;
    return this;
  }

  print() {
    const array = [];
    for (let i = 0; i < this.length; i++) {
      array.push(this.get(i).val)
    }
    console.log(array)
  }
}

const List = new SinglyLinkedList();
List.push(5).push(10).push(15).push(20).push(25).push(30);
List.print()
List.rotate(-1)
console.log(List)
List.print();
