/*
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-21 15:54:27
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-27 16:47:46
 */
import axios from 'axios'
// const baseUrl = 'http://192.168.0.159:3000/api/'
// const fileUrl = 'http://192.168.0.159:3000/data-img/'
// const baseUrl = 'http://106.52.9.182/api/'
// const fileUrl = 'http://106.52.9.182/data-img/'
const baseUrl = 'https://mass.lnwchina.com/api/'
const fileUrl = 'https://mass.lnwchina.com/data-img/'

axios.defaults.baseURL = baseUrl

export {
  baseUrl,
  fileUrl
}
