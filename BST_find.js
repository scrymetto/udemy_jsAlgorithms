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

  find(value) {
    if (!this.root) return null;
    // let temp = this.root;
    // while (true) {
    //   if (temp.value === value) return temp;
    //   if (value > temp.value) {
    //     if (!temp.right) return null;
    //     temp = temp.right;
    //   }
    //   if (!temp.left) return null;
    //   temp = temp.left;
    // }
    return this.findRecursive(value, this.root)
  }

  findRecursive(value, node) {
    if (value === node.value) {
      return node;
    }
    if (value > node.value) {
      if (!node.right) {
        return null
      } else {
        return this.findRecursive(value, node.right)
      }
    } else {
      if (!node.left) {
        return null;
      } else {
        return this.findRecursive(value, node.left)
      }
    }
  }
}

const Tree = new BST();
Tree.insert(10).insert(5).insert(15).insert(12).insert(2).insert(12);
const node = Tree.find(5)
console.log(node)
console.log(Tree.find(7))