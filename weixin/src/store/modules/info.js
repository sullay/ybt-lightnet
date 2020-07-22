import api from '../../service'
const actions = {
  async getInfo ({ commit }) {
    const result = await api.info.getInfo()
    return result
  }
}

export default {
  actions
}
