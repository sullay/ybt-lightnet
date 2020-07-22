<template>
  <div class="s-timeline">
    <div class="s-timeline-item" v-for="(item,i) in list" :key="i" @click="toProject(item.id)">
      <div v-if="i!==list.length-1" class="s-timeline-item-tail"></div>
      <div class="s-timeline-item-node"></div>
      <div class="s-timeline-item-wrapper">
        <span class="time">{{item.time}}</span>
        <div class="content">
          <img :src="filterImgUrl(item.icon)" :alt="item.title">
          <div class="info">
            <h1>{{item.title}}</h1>
            <p><i class="iconfont iconmianji"/>施工面积：{{item.area}}</p>
            <p><i class="iconfont icondizhi"/>{{item.address}}</p>
            <p><i class="iconfont iconqukuailian"/>{{item.cerNum}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../../router'
import { filterImgUrl } from '../../hooks/useImgUrl'
export default {
  props: {
    list: Array
  },
  setup () {
    return { toProject, filterImgUrl }
  }
}
function toProject (id) {
  router.push(`project/${id}`)
}
</script>
<style lang="scss" scoped>
.s-timeline{
  .s-timeline-item{
    position: relative;
    padding-bottom: vw(40);
    .s-timeline-item-tail{
      position: absolute;
      left: vw(16);
      top: vw(18);
      height: calc(100% - 9px);
      border-left: vw(2) solid #e4e7ed;
    }
    .s-timeline-item-node{
      position: absolute;
      background-image: url("./img/node.png");
      background-position: center;
      background-size: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      left: vw(-1);
      width: vw(36);
      height: vw(36);
    }
    .s-timeline-item-wrapper{
      position: relative;
      padding-left: vw(65);
      top: vw(-3);
      text-align: left;
      .time{
        font-size: vw(25);
        font-family: DINPro;
        font-weight: 500;
        color:rgba(196,209,205,1);
      }
      .content{
        width: 100%;
        margin-top: vw(20);
        display: grid;
        grid-template-columns: vw(140) 1fr;
        grid-template-rows: vw(168);
        column-gap: vw(38);
        img {
          width: 100%;
          height: 100%;
          border-radius: vw(10);
        }
        .info{
          h1{
            margin-bottom: vw(25);
            font-size: vw(28);
            font-weight: 600;
            color:rgba(27,30,29,1);
            line-height: 1;
          }
          p{
            max-width: vw(400);
            font-size:vw(20);
            font-weight:400;
            color:rgba(70,81,78,1);
            opacity:0.8;
            line-height: 1;
            margin-bottom: vw(20);
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          i{
            color: #C4D1CD;
            margin-right: vw(8);
          }
        }
      }
    }
    &:first-of-type{
      .s-timeline-item-node{
        background-image: url("./img/node-active.png");
      }
    }
  }
}
</style>
