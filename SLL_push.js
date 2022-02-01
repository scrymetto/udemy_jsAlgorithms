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
}

const List = new SinglyLinkedList();
List.push("Hello");
console.log(List);
List.push("Hello1");
console.log(List);
List.push("Hello2");
console.log(List);
List.push("Hello3");
console.log(List);
List.push("Hello4");
console.log(List);
List.push("Hello5");
console.log(List);
List.push("Hello6");
console.log(List);
List.push("Hello7");
console.log(List);
