<!--
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-21 15:58:01
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-26 16:54:41
-->
<template>
  <div class="details">
    <s-box-1 :data="data.constructionInfo"></s-box-1>
    <s-box-2 :data="data.testInfo"></s-box-2>
    <s-box-3 :data="data.serviceProvider"></s-box-3>
    <s-box-4 :data="data.contract"></s-box-4>
    <s-box-5 :data="data.blockchain"></s-box-5>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import router from '../../router'
import sBox1 from './s-box-1'
import sBox2 from './s-box-2'
import sBox3 from './s-box-3'
import sBox4 from './s-box-4'
import sBox5 from './s-box-5'
export default {
  components: {
    sBox1, sBox2, sBox3, sBox4, sBox5
  },
  setup () {
    const { data } = useData()
    return { data }
  }
}
function useData () {
  const { dispatch } = useStore()
  const data = reactive({})
  dispatch('getProjectById', router.currentRoute.value.params.id).then(res => {
    data.constructionInfo = res.data.constructionInfo
    data.testInfo = res.data.testInfo
    data.serviceProvider = res.data.serviceProvider
    data.contract = res.data.contract
    data.blockchain = res.data.blockchain
  })
  return { data }
}
</script>

<style lang="scss" scoped>
@import url('./box.scss');

</style>
