'use strict';

class BinaryTreeNode {
  constructor(val=null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node = new BinaryTreeNode();

class BinaryTree {
  constructor(node) {
    this.root = node;
  }

  preOrder() {
    let results = [];

    let recursive = node => {
      results.push(node.val);
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
    };
    recursive(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let recursive = node => {
      if (node.left) recursive(node.left);
      results.push(node.val);
      if (node.right) recursive(node.right);
    };
    recursive(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let recursive = node => {
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
      results.push(node.val);
    };
    recursive(this.root);
    return results;
  }

}
