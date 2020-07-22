import axios from '../../plugins/axios'

export default {
  getProjectList: () => axios.get('/projectList'),
  getProjectById: (id) => axios.get(`/project/${id}`)
}
