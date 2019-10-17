import { isPlaneObject } from './handle'

export function sendRequestData(data: any): any {
  if (isPlaneObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
