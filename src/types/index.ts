type MethodsConfig = 'get' | 'GET'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'head' | 'HEAD'
  | 'delete' | 'DELETE'
  | 'patch' | 'PATCH'


export interface AxiosRequestConfig {
  url: string
  method?: MethodsConfig
  data?: any
  params?: any
}
