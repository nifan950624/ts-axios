export type MixMethods =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'put'
  | 'PUT'
  | 'patch'
  | ' PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: MixMethods
  params?: any
  data?: any
  header?: any
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  header: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise <AxiosResponse> {
}
