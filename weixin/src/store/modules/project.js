import api from '../../service'
const actions = {
  async getProjectList ({ commit }) {
    const result = await api.project.getProjectList()
    return result
  },
  async getProjectById ({ commit }, id) {
    const result = await api.project.getProjectById(id)
    return result
  }
}

export default {
  actions
}
