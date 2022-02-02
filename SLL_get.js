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
}

const List = new SinglyLinkedList();
List.push(5).push(10).push(15).push(20);
console.log(List.get(0).val)
console.log(List.get(1).val)
console.log(List.get(2).val)
console.log(List.get(3).val)
console.log(List.get(4))