import { AxiosRequestConfig } from './commonfig/commonfig'
import { buildURl } from './utils/utils'
import { sendRequestData } from './utils/sendData'
import setHeader from './utils/setHeader'
import xhr from './xhr'

export default function(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = fixUrl(config)
  config.header = fixHeader(config)
  config.data = fixData(config)
}

function fixUrl(config: AxiosRequestConfig): string {
  return buildURl(config.url, config.params)
}

function fixData(config: AxiosRequestConfig) {
  return sendRequestData(config.data)
}

function fixHeader(config: AxiosRequestConfig) {
  let { header = {}, data } = config
  return setHeader(header, data)
}
