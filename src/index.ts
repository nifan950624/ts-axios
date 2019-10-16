import { AxiosRequestConfig } from './commonfig/commonfig'
import { buildURl } from './utils/utils'
import xhr from './xhr'

export default function(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = fixUrl(config)
}

function fixUrl(config: AxiosRequestConfig): string {
  return buildURl(config.url, config.params)
}
