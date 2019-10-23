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

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  header: T
  config: AxiosRequestConfig
  request: T
}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  request?: any
  code?: string | null
  response?: AxiosResponse
}

export interface AxiosPromise<T = any> extends Promise <AxiosResponse<T>> {
}

export interface Axios {
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  post<T = any>(url: string, config?: AxiosRequestConfig, data?: any): AxiosPromise<T>

  put<T = any>(url: string, config?: AxiosRequestConfig, data?: any): AxiosPromise<T>

  patch<T = any>(url: string, config?: AxiosRequestConfig, data?: any): AxiosPromise<T>

}


export interface AxiosMixin extends Axios {
  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
}
