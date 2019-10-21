import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './commonfig/commonfig'
import { parseHeader } from './utils/handle'

export default function(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve) => {
    let { url, method = 'get', data, header, responseType } = config,

      request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)

    if (responseType) {
      request.responseType = responseType
    }

    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }
      const responseHeader = parseHeader(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        header: responseHeader,
        config,
        request
      }
      resolve(response)
    }
    Object.keys(header).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete header[name]
      }
      request.setRequestHeader(name, header[name])
    })
    request.send(data)
  })

}
