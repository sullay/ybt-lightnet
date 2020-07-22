/*
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-06-05 14:11:31
 * @LastEditors: sullay
 * @LastEditTime: 2020-06-05 14:12:00
 */
import api from '../../service'
const actions = {
  async getList ({ commit }, { month }) {
    const result = await api.commission.getList({ month })
    return result
  },
  async getChain ({ commit }, { month }) {
    const result = await api.commission.getChain({ month })
    return result
  }
}

export default {
  actions
}
