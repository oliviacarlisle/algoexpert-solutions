function invertBinaryTree(tree) {

  function invertBinaryTreeHelper(node) {
    if (!node) return null;
    const right = node.right;
    node.right = node.left;
    node.left = right;
    invertBinaryTreeHelper(node.left);
    invertBinaryTreeHelper(node.right);
  } 

  invertBinaryTreeHelper(tree);
  return tree;
}