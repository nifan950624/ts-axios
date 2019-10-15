import {AxiosRequestConfig} from './commonfig/commonfig'
import xhr from './xhr'

export default function (config: AxiosRequestConfig): void {
  xhr(config)
}

