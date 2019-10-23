import { AxiosPromise, AxiosRequestConfig } from '../commonfig/commonfig'
import depatch from './patch'

export default class Axios {
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    return depatch(config)
  }

  get(url: string, config: AxiosRequestConfig): AxiosPromise {
    return this.parseRequest(url, 'get', config)
  }

  delete(url: string, config: AxiosRequestConfig): AxiosPromise {
    return this.parseRequest(url, 'delete', config)
  }

  head(url: string, config: AxiosRequestConfig): AxiosPromise {
    return this.parseRequest(url, 'head', config)
  }

  options(url: string, config: AxiosRequestConfig): AxiosPromise {
    return this.parseRequest(url, 'options', config)
  }

  post(url: string, config: AxiosRequestConfig, data?: any): AxiosPromise {
    return this.parseSpeRequest(url, 'post', config, data)
  }

  put(url: string, config: AxiosRequestConfig, data?: any): AxiosPromise {
    return this.parseSpeRequest(url, 'put', config, data)
  }

  patch(url: string, config: AxiosRequestConfig, data?: any): AxiosPromise {
    return this.parseSpeRequest(url, 'patch', config, data)
  }


  parseRequest(url: string, method: string, config: AxiosRequestConfig) {
    return this.request(Object.assign(config || {}, { url, method }))
  }

  parseSpeRequest(url: string, method: string, config: AxiosRequestConfig, data?: any) {
    return this.request(Object.assign(config || {}, { url, method, data }))
  }
}
