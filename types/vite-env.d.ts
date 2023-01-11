/// <reference types="vite/client" />
declare module "nprogress" {
  interface NProgress {
    start(): void;
    done(): void;
  }
  const instance: NProgress;
  export default instance;
}
