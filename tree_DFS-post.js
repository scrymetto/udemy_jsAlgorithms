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
    const result = [];

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.value);
    }

    traverse(this.root);
    return result;
  }
}

const Tree = new BST();
Tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
console.log(Tree.traversal());
