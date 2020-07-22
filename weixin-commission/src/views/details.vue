<template>
  <div class="details">
    <div class="title">存证信息</div>
    <h1 class="chain-title">唯一标识</h1>
    <div class="hash">{{chainInfo.hash}}</div>
    <div class="info">
      <div class="info-item">
        <label>区块号:</label>
        <p>{{chainInfo.blockHeight}}</p>
      </div>
      <div class="info-item">
        <label>上链日期:</label>
        <p>{{chainInfo.createTime}}</p>
      </div>
      <div class="info-item">
        <label>所属分组:</label>
        <p>{{chainInfo.head}}</p>
      </div>
      <div class="info-item">
        <label>唯一标识:</label>
        <p>{{chainInfo.hash}}</p>
      </div>
      <div class="info-item">
        <label>验证者:</label>
        <p>{{chainInfo.validator}}</p>
      </div>
      <div class="info-item">
        <label>上链数据CRC:</label>
        <p>{{chainInfo.data}}</p>
      </div>
      <div class="info-item">
        <label>上链数据:</label>
        <p>{{chainInfo.data}}</p>
      </div>
      <div class="info-item">
        <label>上链地址:</label>
        <p>{{chainInfo.sourceAddress}}</p>
      </div>
      <div class="info-item">
        <label>上链账号Nonce:</label>
        <p>{{chainInfo.from}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      chainInfo: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions(['getChain']),
    init () {
      console.log(this.$route)
      this.getChain({ month: this.$route.query.month }).then(res => {
        if (res.data.code === 0) {
          this.chainInfo = res.data.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.details{
  min-height: 100vh;
  background-image: url('../assets/img/back.png');
  background-repeat: no-repeat;
  background-size: 100% vw(554);
  padding-top: vw(64);
  .title{
    font-size:vw(36);
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: 1;
  }
  .chain-title{
    margin-top: vw(76);
    margin-left: vw(28);
    font-size: vw(32);
    font-weight:600;
    color:rgba(255,255,255,1);
    text-align: left;
    line-height: 1;
  }
  .hash{
    width: vw(694);
    background:rgba(255,255,255,1);
    box-shadow:0px vw(10) vw(20) 0px rgba(0, 233, 160, 0.35);
    border-radius: vw(12);
    margin: vw(32) auto;
    padding: vw(43) vw(40);
    line-height: 1.25;
    font-size: vw(24);
    font-family:DINPro;
    font-weight:500;
    overflow: hidden;
    word-break: break-all;
    text-align: left;
  }
  .info{
    margin-top: vw(52);
    width: 100%;
    background:rgba(255,255,255,1);
    border-radius:vw(28) vw(28) 0 0;
    padding: vw(114) vw(37) vw(95) vw(29);
    .info-item{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: vw(72);
      font-size: vw(24);
      font-weight:400;
      &:first-of-type{
        margin-top: 0;
      }
      label{
        text-align: right;
        color:rgba(159,156,155,1);
        width: vw(177);
      }
      p{
        width: vw(473);
        text-align: left;
        color:rgba(49,50,51,1);
        overflow: hidden;
        word-break: break-all;
      }
    }
  }
}
</style>
