<template>
  <div class="home">
    <!-- <div class="title">佣金榜</div> -->
    <div class="date-picker" @click="openPicker">
      <i class="yimi-iconfont iconriqi"></i> {{filterDate(currentDate,'-')}}
    </div>
    <div class="blockchain-title">
      <h1>佣金榜区块存证</h1>
      <span @click="$router.push(`/details?month=${filterDate(currentDate)}`)">详细></span>
    </div>
    <div class="blockchain-info">
      <div>
        <label>Height</label>
        <span>15589782</span>
      </div>
      <div>
        <label>Time</label>
        <span>2020-05-09 11:21:14</span>
      </div>
    </div>
    <div class="list">
      <table class="table-header">
        <tr>
          <th class="t-rank">排名</th>
          <th class="t-name">用户</th>
          <th class="t-price">当月佣金额(元)</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td v-if="index<3" class="t-rank td img">
            <img :src="require(`../assets/img/0${index+1}.png`)" :alt="`第${index+1}名`">
          </td>
          <td v-else class="t-rank td">{{index+1}}</td>
          <td class="t-name td">{{item.name}}</td>
          <td class="t-price td">{{item.price}}</td>
        </tr>
      </table>
    </div>
    <m-datetimePicker
      @confirm="confirm"
      ref="picker"
      type="date"
      :endDate="new Date()"
      v-model="realDate">
    </m-datetimePicker>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'
export default {
  name: 'Home',
  data () {
    return {
      currentDate: moment(new Date()).subtract(1, 'months'),
      realDate: '',
      list: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions(['getList']),
    init () {
      this.getList({ month: this.filterDate(this.currentDate) }).then(res => {
        this.list = res.data.records.map(r => {
          return {
            customerId: r.customerId,
            name: r.customerName,
            price: r.sumFeeAmount
          }
        })
      })
    },
    confirm (val) {
      this.currentDate = val
      this.init()
    },
    openPicker () {
      this.realDate = this.currentDate
      this.$refs.picker.open()
    },
    filterDate (date, join = '') {
      return moment(date).format(`YYYY${join}MM`)
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  min-height: 100vh;
  background-image: url('../assets/img/back.png');
  background-repeat: no-repeat;
  background-size: 100% vw(554);
  padding-top: vw(32);
  .title{
    font-size:vw(36);
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height: 1;
  }
  .date-picker{
    width: vw(280);
    height: vw(68);
    line-height: vw(68);
    background:rgba(242,244,245,1);
    border-radius: vw(34);
    margin: vw(70) auto 0;
    font-size: vw(28);
    font-family:DINPro;
    font-weight:500;
    color:rgba(49,50,51,1);
    .yimi-iconfont{
      color: #9F9C9B;
      margin-right: vw(17);
    }
  }
  .blockchain-title{
    margin: vw(81) vw(28) vw(45);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1{
      font-size: vw(32);
      font-weight:600;
      color:rgba(255,255,255,1);
    }
    span{
      font-size: vw(24);
      text-decoration:underline;
      color:rgba(255,255,255,1);
    }
  }
  .blockchain-info{
    color:rgba(255,255,255,1);
    opacity:0.6;
    font-size: vw(26);
    font-family:DINPro;
    font-weight:400;
    margin: vw(45) 0 0 vw(59);
    text-align: left;
    &>div{
      margin-top: vw(18);
      label{
        display: inline-block;
        min-width: vw(124);
      }
    }
  }
  .list{
    margin-top: vw(55);
    width: 100%;
    background:rgba(255,255,255,1);
    border-radius:vw(28) vw(28) 0 0;
    table{
      padding-top: vw(30);
      th{
        height: vw(115);
        font-size:  vw(24);
        color:rgba(159,156,155,1);
      }
      td{
        height: vw(100);
      }
      width: 100%;
      .t-rank{
        width: vw(102);
        &.td{
          font-size: vw(26);
          font-weight:500;
          color:rgba(159,156,155,1);
        }
        &.img{
          img{
            width: vw(33);
            height: vw(50);
          }
        }
      }
      .t-name{
        padding-left: vw(61);
        text-align: left;
        padding-left: vw(100);
        &.td{
          font-size: vw(26);
          font-weight:500;
          color:rgba(49,50,51,1);
        }
      }
      .t-price{
        width: vw(290);
        padding-right: vw(28);
        text-align: right;
        &.td{
          font-size: vw(30);
          font-family:DINPro;
          font-weight:bold;
          color:rgba(255,0,72,1);
        }
      }
    }
  }
  /deep/ .mint-popup{
    .picker-slot{
      &:nth-of-type(3){
        display: none;
      }
    }
  }
}
</style>
