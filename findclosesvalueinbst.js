// Averag :O(log(n)) time | O(log(n)) space
// worst O(n) time | O(n) space
function findClosestValueInBst(tree, target) {
  // Write your code here.
  //helper method to find out the value we are looking ro
  //here we are passing the tree the target ane the tree value as well
  return findClosestValueInBstHelper(tree, target, tree.value);
}
//this helper method will evaluate
function findClosestValueInBstHelper(tree, target, closest) {
  //if the tree has a value of null then return the closest
  if (tree === null) return closest;
  //if the absolute value of the difference the target minus the closest is greater than
  //the absolute difference between the target minu the tree value then
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    //return the closes as the tree value
    closest = tree.value;
  }
  //if the target is less then that tree value
  if (target < tree.value) {
    // we will use the helper method to explore the left side of the binary search tree
    return findClosestValueInBstHelper(tree.left, target, closest);
    //else if the target is greter than the tree value
  } else if (target > tree.value) {
    //we will return explore the right side of the BST
    return findClosestValueInBstHelper(tree.right, target, closest);
    //in the event we got to the end of the branch and there are not more leaves
  } else {
    //we will return the closes
    return closest;
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

console.log(
  findClosestValueInBst({
    tree: {
      nodes: [
        { id: "10", left: "5", right: "15", value: 10 },
        { id: "15", left: "13", right: "22", value: 15 },
        { id: "22", left: null, right: null, value: 22 },
        { id: "13", left: null, right: "14", value: 13 },
        { id: "14", left: null, right: null, value: 14 },
        { id: "5", left: "2", right: "5-2", value: 5 },
        { id: "5-2", left: null, right: null, value: 5 },
        { id: "2", left: "1", right: null, value: 2 },
        { id: "1", left: null, right: null, value: 1 },
      ],
      root: "10",
    },
  })
);
