import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './commonfig/commonfig'
import creatError from './utils/error'
import { parseHeader } from './utils/handle'

export default function(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    let { url, method = 'get', data, header, responseType, timeout } = config,

      request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url!, true)

    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
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
      handleParseRequest(response)
    }

    request.onerror = function() {
      reject(creatError('request error', config, null, request))
    }

    request.ontimeout = function() {
      reject(creatError(`request fail for ${request.timeout}ms`, config, 'ECONNABORTED', request))
    }
    Object.keys(header).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete header[name]
      }
      request.setRequestHeader(name, header[name])
    })
    request.send(data)

    function handleParseRequest(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(creatError(`request error for ${response.status}`, config, null, request, response))
      }
    }
  })
}
