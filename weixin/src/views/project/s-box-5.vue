<!--
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-22 16:23:04
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-27 15:28:20
-->
<template>
  <div class="s-box s-box-5">
    <h1>区块链证书</h1>
    <!-- <div>签署方：{{data.signatory}}</div>
    <div>签署日期：{{data.time}}</div> -->
    <div class="cer-img">
      <!-- <label>附件合同：</label> -->
      <img :src="filterImgUrl(data.annex)" alt="区块链证书">
    </div>
    <s-mark class="s-mark-1" join></s-mark>
    <s-mark class="s-mark-2" join></s-mark>
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
.s-box.s-box-5{
  padding: vw(69) vw(35) vw(81);
  margin-bottom: vw(38);
  .cer-img{
    display: flex;
    justify-content: center;
    img{
      width: vw(614);
      height: vw(870);
    }
  }
}
</style>
