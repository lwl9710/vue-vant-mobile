declare type StringNumber = string | number;

declare interface StringObject<V = any> {
  [propName: string]: V
}

declare module "nprogress" {
  interface NProgress {
    start(): void;
    done(): void;
  }
  const instance: NProgress;
  export default instance;
}