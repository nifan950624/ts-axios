import { isDate, isObject, enCodeURI, isPlaneObject } from './handle'

export function buildURl(url: string, pramas: any): string {
  if (!pramas) {
    return url
  }

  let parts: string[] = []
  Object.keys(pramas).forEach(key => {
    const val = pramas[key]
    if (val === null || typeof val === undefined) {
      return
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlaneObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${enCodeURI(key)}=${enCodeURI(val)}`)
    })
  })

  let str = parts.join('&')
  if (url.indexOf('#') !== -1) {
    url = url.substring(0, url.indexOf('#'))
  }

  return url + (url.indexOf('?') === -1 ? '?' : '&') + str
}
