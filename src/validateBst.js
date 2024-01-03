class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, max = +Infinity, min = -Infinity) {
  if (tree === null) {
    return true;
  } else if (!(tree.value < max && tree.value >= min)) {
    return false;
  } else {
      const left = validateBst(tree.left, tree.value, min);
      const right = validateBst(tree.right, max, tree.value);
      return left && right;
  }
}