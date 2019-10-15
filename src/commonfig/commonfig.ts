export type MixMethods =
  'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'put' | 'PUT'
  | 'patch' | ' PATCH'


export interface AxiosRequestConfig {
  url: string
  method?: MixMethods
  parma?: any
  data?: any
}
