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

  unshift(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length ++;
    return this;
  }
}

const List = new SinglyLinkedList();
List.push("Hello");
List.push("Hello1");
List.push("Hello2");
console.log(List.unshift("hello3"))
console.log(List.head)
console.log("-------")
console.log(List.unshift("hello4"))
console.log(List.head)
console.log("-------")