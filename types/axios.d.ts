import "axios";

declare module "axios" {
  export interface AxiosRequestConfig<any>{
    meta?: StringObject
  }
}