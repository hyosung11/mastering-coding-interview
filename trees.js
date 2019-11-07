// Binary Tree
// function BinaryTreeNode(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

// Binary Search Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    // create a new node and instantiate it with the class Node
    const newNode = new Node(value);
    // if root node is empty make the new node the root node
    if (this.root === null) {
      this.root = newNode;
    } else {
      // if root node is already filled - need to traverse the node
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // left
          // if no node on the left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          // if there is a current node on the left
          currentNode = currentNode.left;
        } else {
          // go to the right
          // if no node on the right make the new node the right node
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          // if already current node on the right
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    // check to see if there's a root value
    if (!this.root) {
      return false; // nothing to find
    }
    // root value exists
    let currentNode = this.root;
    // traverse the tree until the current node no longer exists
    while (currentNode) {
      if (value < currentNode.value) {
        // go left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    // if we don't find anything
    return false;
  }
  remove() {
    // check for value in the root
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // we have a match, get to work!

        // Option 1: no right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            // if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              // if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // Option 2: Right child which doesn't have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {

            // if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

             //if parent < current, make right child a right child of the parent
           } else if (currentNode.value > parentNode.value) {
             parentNode.right = currentNode.right;
           }
          }
          // Option 3: Right child that has a left child
        } else {

          // find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
          return true;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.remove(15));
// console.log(tree.lookup(20));
// console.log(JSON.stringify(traverse(tree.root)));

//      9
//  4     20
// 1  6 15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
