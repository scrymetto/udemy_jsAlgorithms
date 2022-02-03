class Node {
  constructor(val) {
    this.val = val;
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

  set(ind, val) {
    if (ind >= this.length || ind < 0) {
      return false
    }
    const newNode = new Node(val);
    if (ind === this.length - 1) {
      this.tail = newNode
    } else {
      newNode.next = this.get(ind + 1);
    }
    if (ind === 0) {
      this.head = newNode;
      return true
    }
    const prev = this.get(ind - 1);
    prev.next = newNode;
    return true

    // solution from course
    // const node = this.get(ind);
    // if (!node) return false;
    // node.val = val;
    // return true
  }
}

const List = new SinglyLinkedList();
List.push(5).push(10).push(15).push(20);
console.log(List.set(0, '123'))
console.log(List)
console.log('------')
console.log(List.set(3, '123'))
console.log(List)
console.log('------')
console.log(List.set(2, '1234'))
console.log(List.get(2).next)
console.log(List)
console.log('------')
