import { isPlaneObject } from './handle'

function transformHeader(header: any, setHeaderName: string): void {
  if (!header) {
    return
  }
  Object.keys(header).forEach((name) => {
    if (name !== setHeaderName && name.toUpperCase() === setHeaderName.toUpperCase()) {
      header[setHeaderName] = header[name]
      delete header[name]
    }
  })
}

export default function(header: any, data: any): any {
  transformHeader(header, 'Content-Type')
  if (isPlaneObject(data)) {
    if (header && !header['Content-Type']) {
      header['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return header
}
