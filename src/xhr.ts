import { AxiosRequestConfig } from './commonfig/commonfig'

export default function(config: AxiosRequestConfig): void {
  let { url, method = 'get', params, data } = config,
    request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
