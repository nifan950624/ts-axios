import { AxiosRequestConfig, AxiosResponse } from '../commonfig/commonfig'

class AxiosParseError extends Error {
  config: AxiosRequestConfig
  isAxiosError: boolean
  request?: any
  code?: string | null
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.request = request
    this.response = response
    this.code = code
    this.config = config
    this.isAxiosError = true
    Object.setPrototypeOf(this, AxiosParseError.prototype)
  }
}


export default function(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): any {
  const error = new AxiosParseError(message, config, code, request, response)
  return error
}
