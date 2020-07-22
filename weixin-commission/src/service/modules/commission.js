/*
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-06-05 14:10:43
 * @LastEditors: sullay
 * @LastEditTime: 2020-06-05 14:11:19
 */
import axios from '../../plugins/axios'
const getList = (options) => axios.get('/bidRecordFeeLog/commission/monthly', { params: options })
const getChain = (options) => axios.get('/bidRecordFeeLog/commission/monthly/chain', { params: options })
export default {
  getList,
  getChain
}
