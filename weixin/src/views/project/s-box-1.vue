<template>
  <div class="s-box s-box-1">
    <h1>施工信息</h1>
    <div>服务名称：{{data.name}}</div>
    <div>所属行业：{{data.industry}}</div>
    <div>施工地点：{{data.address}}</div>
    <div>施工时间：{{data.time}}</div>
    <div class="img-box">
      <label>施工环境：</label>
      <div class="img-list">
        <img v-for="(img,index) in data.imgList" :key="index" :src="filterImgUrl(img)" :alt="data.name">
      </div>
    </div>
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
.s-box.s-box-1{
  margin-top: vw(42);
  padding: vw(32) vw(40) vw(82) vw(32);
}
</style>
