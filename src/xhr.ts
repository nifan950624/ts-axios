import { AxiosRequestConfig } from './commonfig/commonfig'

export default function(config: AxiosRequestConfig): void {
  console.log(config)
  let { url, method = 'get', data } = config,

    request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)
  console.log(data)
  request.send(data)
}
