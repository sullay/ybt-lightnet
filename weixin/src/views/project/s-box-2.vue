<!--
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-22 16:23:00
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-26 17:02:58
-->
<template>
  <div class="s-box s-box-2">
    <h1>数据检测信息</h1>
    <div class="content">
      <span>甲醛：<span class="green">{{data.HCHO}}</span>mg/m³</span>
      <span>苯：<span class="green">{{data.C6H6}}</span>mg/m³</span>
      <span>氨：<span class="green">{{data.NH3}}</span>mg/m³</span>
      <span>TVOC：<span class="green">{{data.TVOC}}</span>mg/m³</span>
      <!-- <span>检测时间：{{data.time}}</span> -->
    </div>
    <s-mark class="s-mark-1" join></s-mark>
    <s-mark class="s-mark-2" join></s-mark>
    <s-mark class="s-mark-3"></s-mark>
    <s-mark class="s-mark-4"></s-mark>
  </div>
</template>

<script>
import sMark from './s-mark'
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

  }
}
</script>

<style lang="scss" scoped>
.s-box.s-box-2{
  padding: vw(75) vw(32);
  .content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    .green{
      color: #2CB60C;
    }
  }
}
</style>
