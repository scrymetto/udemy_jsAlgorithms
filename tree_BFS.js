class Node {
  constructor(value) {
    this.count = 1;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertRecursive(root, newNode) {
    if (newNode.value === root.value) {
      root.count++;
      return
    }
    if (newNode.value > root.value) {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertRecursive(root.right, newNode)
      }
    } else {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertRecursive(root.left, newNode)
      }
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertRecursive(this.root, newNode);
    }
    return this
  }

  traversal() {
    if (!this.root) return null;
    const visited = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      let count = node.count;
      while (count !== 0) {
        visited.push(node.value);
        count--;
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }
}

const Tree = new BST();
Tree.insert(10).insert(5).insert(15).insert(12).insert(2).insert(12);
console.log(Tree.traversal());
