declare type StringNumber = string | number;
declare interface StringObject<V = any> {
  [propName: string]: V
}