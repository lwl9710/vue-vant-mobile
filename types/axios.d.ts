import "axios";

declare module "axios" {
  export interface RawAxiosRequestConfig<any> {
    meta?: StringObject
  }
  export interface AxiosRequestConfig<any>{
    meta?: StringObject
  }
}