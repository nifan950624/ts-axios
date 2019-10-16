import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    nifan: {
      a: 1,
      b: 2
    }
  }
})





