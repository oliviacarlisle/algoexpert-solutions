function iterativeInOrderTraversal(tree, callback) {
  let p = tree;
  let previous;
  let next;

  while (p) {
    if (!previous || previous === p.parent) { // coming from top; explore left
      if (p.left) next = p.left;
      else {
        callback(p); 
        if (p.right) next = p.right;
        else next = p.parent;
      }
    } else if (previous === p.left) { // have already explored left subtree
      callback(p);
      if (p.right) next = p.right;
      else next = p.parent;
    } else { // if we have explored right subtree
      next = p.parent;
    }
    previous = p;
    p = next;
  }  

}