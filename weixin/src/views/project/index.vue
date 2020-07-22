<!--
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-21 15:58:00
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-27 17:23:26
-->
<template>
  <div class="project">
    <img :src="filterImgUrl(data.headerImg)" :alt="data.title">
    <div class="content">
      {{data.content}}
    </div>
    <button @click="toDetails">详情</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive } from 'vue'
import router from '../../router'
import { filterImgUrl } from '../../hooks/useImgUrl'
export default {
  setup () {
    const { data } = useData()
    return { data, toDetails, filterImgUrl }
  }
}
function toDetails () {
  router.push(`${router.currentRoute.value.fullPath}/details`)
}
function useData () {
  const { dispatch } = useStore()
  const data = reactive({})
  dispatch('getProjectById', router.currentRoute.value.params.id).then(res => {
    data.headerImg = res.data.headerImg
    data.title = res.data.title
    data.content = res.data.content
  })
  return { data }
}
</script>
<style lang="scss" scoped>
.project{
  img{
    width: 100%;
    height: vw(400);
  }
  .content{
    margin: vw(20) vw(37) 0 vw(49);
    text-align: left;
    word-break: break-all;
    white-space: pre-line;
    font-size: vw(25);
    line-height: vw(56);
  }
  button{
    width: vw(291);
    height: vw(77);
    background: linear-gradient(90deg,rgba(41,241,156,1),rgba(2,161,249,1));
    border-radius: vw(39);
    font-size: vw(30);
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: vw(56);
    border: none;
    outline: none;
    margin-top: vw(79);
  }
}
</style>
