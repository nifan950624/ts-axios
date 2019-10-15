import { AxiosRequestConfig } from './commonfig/commonfig'

export default function(config: AxiosRequestConfig): void {
  let { data = null, params = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  if (params) {
    url += (deCodeUrlParams(params).indexOf('?') !== 1 ? '?' : '&') + deCodeUrlParams(params)
  }

  request.open(method.toUpperCase(), url, true)
  request.send(data)
}


function deCodeUrlParams(data: any): string {
  let arr: string[] = []
  if (data) {
    for (let key in data) {
      let str: string = key + '=' + data[key]
      arr.push(str)
    }
  }
  return arr.join('&')
}
