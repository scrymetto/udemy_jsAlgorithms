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

  pop() {
    if (!this.head) return undefined;
    const result = this.tail;
    let prev = this.head;
    let last = this.head.next;
    while (last.next !== null) {
      prev = last;
      last = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    // refactor from course
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return result;
  }

  shift() {
    if (!this.head) return undefined;
    const result = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null
    return result;
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

  remove(ind) {
    if (ind > this.length || ind < 0) return undefined
    if (ind === this.length) return this.pop();
    if (ind === 0) return this.shift();

    const prev = this.get(ind - 1);
    //solution from course
    // const node = prev.next;
    const node = this.get(ind);
    prev.next = node.next;
    this.length--;
    return node
  }
}

const List = new SinglyLinkedList();
List.push(5).push(10).push(15).push(20);
List.remove(0)
console.log(List)
console.log('------')
List.remove(3)
console.log(List)
console.log('------')
List.push(5).push(10).push(15).push(20);
List.remove(6)
console.log(List)
console.log('------')
