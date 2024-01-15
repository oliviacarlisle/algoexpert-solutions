class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if (node.right) {
    let p = node.right;
    while (p.left) p = p.left;
    return p;
  } else {
    let count = 0;
    let p = node.parent;
    let prev = node;
    while (p) {
      if (p.left === prev) count++;
      else count--;
      if (count >= 0) return p;
      prev = p;
      p = p.parent;
    }
  }
  return null;
}