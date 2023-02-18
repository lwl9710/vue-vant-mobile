import "axios";

declare module "axios" {
  export interface InternalAxiosRequestConfig<any> {
    meta?: StringObject
  }

  export interface AxiosRequestConfig<any> {
    meta?: StringObject
  }
}