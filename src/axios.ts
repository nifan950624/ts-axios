import { AxiosMixin } from './commonfig/commonfig'
import { extend } from './utils/utils'
import Axios from './core/Axios'

function creatAxios(): AxiosMixin {
  const origin = new Axios()
  const instance = Axios.prototype.request.bind(origin)
  extend(instance, origin)
  return instance as AxiosMixin
}

const axios = creatAxios()
export default axios
