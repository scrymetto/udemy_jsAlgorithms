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

  shift() {
    if (!this.head) return undefined;
    const result = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null
    return result;
  }
}

const List = new SinglyLinkedList();
List.push("Hello");
List.push("Hello1");
List.push("Hello2");
List.push("Hello3");
console.log(List.shift())
console.log(List.head)
console.log(List)
console.log("-------")
console.log(List.shift())
console.log(List.head)
console.log(List)
console.log("-------")
console.log(List.shift())
console.log(List.head)
console.log(List);
console.log("-------")
console.log(List.shift())
console.log(List.head)
console.log(List)