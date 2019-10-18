import { AxiosRequestConfig } from './commonfig/commonfig'

export default function(config: AxiosRequestConfig): void {
  let { url, method = 'get', data, header } = config,

    request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)

  Object.keys(header).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete header[name]
    }
    request.setRequestHeader(name, header[name])
  })
  request.send(data)
}
