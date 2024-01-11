class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  
  function reconstructBstHelper(arr, i, min = -Infinity, max = +Infinity) {
    if (i >= arr.length) return null;
    if (arr[i] >= max) return null; // no left node
    const node = new BST(arr[i]);
    
    node.left = reconstructBstHelper(arr, i + 1, min, node.value);

    let j = i + 1;
    while (arr[j] < node.value) j++;
    node.right = reconstructBstHelper(arr, j, node.value, max);
    return node;
  }

  return reconstructBstHelper(preOrderTraversalValues, 0);
  
}