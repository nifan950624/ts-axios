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
  url?: string
  method?: MixMethods
  params?: any
  data?: any
  header?: any
  responseType?: XMLHttpRequestResponseType,
  timeout?: number
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  header: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  request?: any
  code?: string | null
  response?: AxiosResponse
}

export interface AxiosPromise extends Promise <AxiosResponse> {
}

export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise

  get(url: string, config?: AxiosRequestConfig): AxiosPromise

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise

  head(url: string, config?: AxiosRequestConfig): AxiosPromise

  options(url: string, config?: AxiosRequestConfig): AxiosPromise

  post(url: string, config?: AxiosRequestConfig, data?: any): AxiosPromise

  put(url: string, config?: AxiosRequestConfig, data?: any): AxiosPromise

  patch(url: string, config?: AxiosRequestConfig, data?: any): AxiosPromise

}


export interface AxiosMixin extends Axios {
  (config: AxiosRequestConfig): AxiosPromise
}
