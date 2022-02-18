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

  traversalHelper(node, result = []) {
    let counter = node.count;
    while (counter) {
      result.push(node.value)
      counter--
    }
    if (node.left) this.traversalHelper(node.left, result)
    if (node.right) this.traversalHelper(node.right, result)
    return result
  }

  traversal() {
    if (!this.root) return null;
    return this.traversalHelper(this.root)

    // solution from course
    // const result = [];
    //
    // function traverse(node) {
    //   result.push(node.value);
    //   if (node.left) traverse(node.left)
    //   if (node.right) traverse(node.right)
    // }
    //
    // traverse(this.root);
    // return result;
  }
}

const Tree = new BST();
Tree.insert(10).insert(5).insert(15).insert(12).insert(2).insert(12);
console.log(Tree.traversal());
