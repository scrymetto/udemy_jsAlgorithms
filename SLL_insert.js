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

  unshift(val) {
    const node = new Node(val)
    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
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

  insert(ind, val) {
    if (ind > this.length || ind < 0) return false
    if (ind === this.length) return !!this.push(val);
    if (ind === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(ind - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true
  }
}

const List = new SinglyLinkedList();
List.push(5).push(10).push(15).push(20);
List.insert(0, '123')
console.log(List)
console.log('------')
List.insert(3, '123')
console.log(List.get(3))
console.log(List)
console.log('------')
List.insert(6, '123')
console.log(List)
console.log('------')
