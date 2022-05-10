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

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode
    } else {
      let temp = this.root;
      while (true) {
        if (value > temp.value) {
          if (!temp.right) {
            temp.right = newNode;
            return this;
          } else {
            temp = temp.right;
          }
        } else {
          if (!temp.left) {
            temp.left = newNode;
            return this;
          } else {
            temp = temp.left;
          }
        }
      }
    }
    return this
  }

  findRecursive(node, valueMin = node.value, valueMax = node.value) {
    let minValue = valueMin;
    let resultNode = null;
    let leftResultNode = null;
    let rightResultNode = null;
    if (node.value > valueMax) {
      if (valueMin === valueMax) {
        resultNode = node;
        minValue = node.value;
      } else {
        if (node.value < valueMin) {
          minValue = node.value;
          resultNode = node;
        }
      }
    }

    if (node.left) {
      leftResultNode = this.findRecursive(node.left, minValue, valueMax)
    }
    if (node.right) {
      rightResultNode = this.findRecursive(node.right, minValue, valueMax)
    }
    return resultNode || leftResultNode || rightResultNode;
  }

  remove(value) {

    if (!this.root) return null;
    let resultNode = this.root;
    let parentNode = null;
    let replacedChildProp = null;
    while (true) {
      if (resultNode.value === value) {
        // no children
        if (!resultNode.left && !resultNode.right) {
          parentNode[replacedChildProp] = null;
          resultNode.left = null;
          resultNode.right = null;
        }
        // one child
        if (!resultNode.left || !resultNode.right) {
          const replacedProp = resultNode.right ? 'right' : 'left';
          let replacedNode = replacedProp === 'right' ? resultNode.right : resultNode.left;
          while (replacedNode) {
            if (parentNode) {
              if (replacedChildProp) {
                parentNode[replacedChildProp] = resultNode[replacedProp];
                replacedChildProp = null;
              } else {
                parentNode[replacedProp] = resultNode[replacedProp];
              }
              parentNode = replacedNode;
              replacedNode = replacedNode[replacedProp];
            }
          }
          resultNode.left = null;
          resultNode.right = null;
        }
        // two children
        if (resultNode.left && resultNode.right) {
          const replaced = this.findRecursive(resultNode);
          this.remove(replaced.value);
          parentNode[replacedChildProp].value = replaced.value;
        }
        return resultNode;
      } else {
        parentNode = resultNode;
        if (value > resultNode.value) {
          resultNode = resultNode.right;
          replacedChildProp = 'right'
        } else {
          resultNode = resultNode.left;
          replacedChildProp = 'left'
        }
      }
    }

  }
}

const Tree = new BST();
Tree.insert(22)
    .insert(49)
    .insert(85)
    .insert(66)
    .insert(95)
    .insert(90)
    .insert(100)
    .insert(88)
    .insert(93)
    .insert(89)
Tree.remove(85)
console.log(Tree.root.right.right.value)
console.log(Tree.root.right.right.right.left.left.value)
