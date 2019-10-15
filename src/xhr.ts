import {AxiosRequestConfig} from './commonfig/commonfig'

export default function (config: AxiosRequestConfig): void {
  const {data = null, parma = null, url, method = 'get'} = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
