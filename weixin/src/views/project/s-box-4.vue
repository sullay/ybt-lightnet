<!--
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-22 16:23:05
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-26 18:57:26
-->
<template>
  <div class="s-box s-box-4">
    <h1>合同信息</h1>
    <div>签署方：{{data.signatory}}</div>
    <!-- <div>签署日期：{{data.time}}</div> -->
    <div class="img-box">
      <label>附件合同：</label>
      <div class="img-list">
        <img v-for="(img,index) in data.annexList" :key="index" :src="filterImgUrl(img)" :alt="data.signatory">
      </div>
    </div>
    <s-mark class="s-mark-1" join></s-mark>
    <s-mark class="s-mark-2" join></s-mark>
    <s-mark class="s-mark-3"></s-mark>
    <s-mark class="s-mark-4"></s-mark>
  </div>
</template>

<script>
import sMark from './s-mark'
import { filterImgUrl } from '../../hooks/useImgUrl'

export default {
  components: {
    sMark
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup () {
    return { filterImgUrl }
  }
}
</script>

<style lang="scss" scoped>
.s-box.s-box-4{
  padding: vw(69) vw(40) vw(81) vw(33);
}
</style>
