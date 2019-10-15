import {AxiosRequestConfig} from './commonfig/commonfig'
import xhr from './xhr'

export function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

