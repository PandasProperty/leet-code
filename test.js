/**
class Tree {
  level: number;
  hasLeft?: Tree;
  hasRight?: Tree;
}
 */

'use strict';

const tree = {
    level: 0,
    hasLeft: {
        level: 1,
        hasRight: {
            level: 2
        }
    },
    hasRight: {
        level: 1
    }
};

const findDeepestNode =  (tree) => {
    let leftNode = null;
    let rightNode = null;

    if (tree.hasLeft) {
        leftNode = findDeepestNode(tree.hasLeft);
    }

    if (tree.hasRight) {
        rightNode = findDeepestNode(tree.hasRight);
    }

    if (leftNode && rightNode) {
        return (leftNode.level > rightNode.level ? leftNode : rightNode);
    }

    if (leftNode) {
        return leftNode;
    }

    if (rightNode) {
        return rightNode;
    }
    
    return tree;
};

console.log(findDeepestNode(tree));