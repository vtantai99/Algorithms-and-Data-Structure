import { TreeNode } from "./TreeNode";
import { TreeADT } from "./types";

class BinarySearchTree<T> implements TreeADT<T> {
  private _size: number = 0;
  private _root: TreeNode<T> | null = null;

  isEmpty(): boolean {
    return this._size === 0;
  }

  size(): number {
    return this._size;
  }

  height(): number {
    return this.heightRecursive(this._root);
  }

  contains(element: T): boolean {
    return this.containsRecursive(this._root, element);
  }

  add(element: T): boolean {}

  remove(element: T): boolean {}

  // Private methods
  private heightRecursive(node: TreeNode<T> | null): number {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.heightRecursive(node.left);
    const rightHeight = this.heightRecursive(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  private containsRecursive(node: TreeNode<T> | null, element: T): boolean {
    if (node === null) return false;

    if (node.data < element) {
      return this.containsRecursive(node.left, element);
    } else if (node.data > element) {
      return this.containsRecursive(node.right, element);
    } else {
      return true;
    }
  }
}
