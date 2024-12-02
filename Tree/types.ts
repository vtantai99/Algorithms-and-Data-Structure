export interface TreeADT<T> {
  isEmpty(): boolean;
  size(): number;
  height(): number;
  contains(element: T): boolean;
  add(element: T): boolean;
  remove(element: T): boolean;
}
