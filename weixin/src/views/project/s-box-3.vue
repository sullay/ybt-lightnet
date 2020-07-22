<template>
  <div class="s-box s-box-3">
    <h1>服务商信息</h1>
    <div>服务商：{{data.name}}</div>
    <div class="cer-img">
      <label>资质证书：</label>
      <img :src="filterImgUrl(data.certificateImg)" :alt="data.name">
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
.s-box.s-box-3{
  padding: vw(69) vw(33) vw(82);
  .cer-img{
    display: flex;
    img{
      width: vw(264);
      height: vw(317);
    }
  }
}
</style>
