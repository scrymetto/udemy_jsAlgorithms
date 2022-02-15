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
      // while (true) {
      //   if (value > temp.value) {
      //     if (!temp.right) {
      //       temp.right = newNode;
      //       return this;
      //     } else {
      //       temp = temp.right;
      //     }
      //   } else {
      //     if (!temp.left) {
      //       temp.left = newNode;
      //       return this;
      //     } else {
      //       temp = temp.left;
      //     }
      //   }
      // }
    }
    return this
  }
}

const Tree = new BST();
Tree.insert(10).insert(5).insert(15).insert(12).insert(2).insert(12);
console.log(Tree)
console.log(Tree.root.left)
console.log(Tree.root.right)