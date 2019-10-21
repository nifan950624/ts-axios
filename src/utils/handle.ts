const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlaneObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function parseHeader(header: any): any {
  if (!header) {
    return
  }
  let parse = Object.create(null)
  header.split('\r\n').forEach((line: string) => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parse[key] = val
  })

  return parse
}

export function transformObject(data: string): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // 什么都不做
    }
  }
  return data
}

export function enCodeURI(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
