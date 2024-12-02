export class TreeNode<T> {
  private _data: T;
  private _left: TreeNode<T> | null;
  private _right: TreeNode<T> | null;

  constructor(data: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
    this._data = data;
    this._left = left;
    this._right = right;
  }

  public get data(): T {
    return this._data;
  }

  public set data(value: T) {
    this._data = value;
  }

  public get left(): TreeNode<T> | null {
    return this._left;
  }

  public set left(value: TreeNode<T> | null) {
    this._left = value;
  }

  public get right(): TreeNode<T> | null {
    return this._right;
  }

  public set right(value: TreeNode<T> | null) {
    this._right = value;
  }
}
