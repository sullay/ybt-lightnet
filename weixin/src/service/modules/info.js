import axios from '../../plugins/axios'

export default {
  getInfo: () => axios.get('/getInfo')
}
