<!--
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-21 15:56:16
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-27 17:44:57
-->
<template>
  <div class="index">
    <img  src="../assets/img/banner.png" alt="banner">
    <div class="project-list">
      <h1>施工项目</h1>
      <div class="info-list">
        <div class="info-item area">
          <div class="number">{{info.area}}</div>
          <div class="label">总施工面积</div>
        </div>
        <div class="info-item height">
          <div class="number">{{info.height}}</div>
          <div class="label">区块高度</div>
        </div>
        <div class="info-item cerNum">
          <div class="number">{{info.cerNum}}</div>
          <div class="label">存证次数</div>
        </div>
        <!-- <div class="info-item codeNum">
          <div class="number">{{info.codeNum}}</div>
          <div class="label">扫码次数</div>
        </div> -->
        <div class="info-item projectNum">
          <div class="number">{{info.projectNum}}</div>
          <div class="label">项目数量</div>
        </div>
      </div>
      <s-timeline :list="projectList"></s-timeline>
    </div>
    <div class="map-distribution">
      <h1>施工分布</h1>
      <!-- <img src="../assets/img/map.png" alt="施工分布"> -->
      <s-map></s-map>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import sTimeline from '../components/timeline/Main.vue'
import sMap from '../components/map/Main.vue'
import { useStore } from 'vuex'

export default {
  components: {
    sTimeline,
    sMap
  },
  setup () {
    const { info } = useInfo()
    const { projectList } = useProject()
    return { info, projectList }
  }
}
function useInfo () {
  const { dispatch } = useStore()
  const info = ref({
    // 总施工面积
    area: 0,
    // 区块高度
    height: 0,
    // 存证次数
    cerNum: 0,
    // 扫码次数
    // codeNum: 0,
    // 项目数量
    projectNum: 0
  })
  dispatch('getInfo').then(res => {
    info.value = res.data
  })
  return { info }
}
function useProject () {
  const { dispatch } = useStore()
  const projectList = ref([])
  dispatch('getProjectList').then(res => {
    projectList.value = res.data
  })
  return { projectList }
}
</script>

<style lang="scss" scoped>
.index {
  img[alt='banner']{
    width: vw(746);
    height: vw(392);
    margin: vw(32) auto 0;
  }
  h1{
    position: relative;
    left: vw(-10);
    font-size: vw(36);
    font-weight: 600;
    color: rgba(27,30,29,1);
  }
  .project-list{
    margin: vw(44) auto 0;
    width: vw(670);
    text-align: left;
    .info-list{
      margin-top: vw(33);
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, vw(320));
      grid-template-rows: repeat(2, vw(160));
      gap: vw(30);
      .info-item{
        background:rgba(255,255,255,1);
        box-shadow:0 vw(15) vw(30) 0 rgba(57,68,67,0.08);
        border-radius:vw(10);
        text-align: center;
        .number{
          display: inline-block;
          position: relative;
          font-size: vw(56);
          margin-top: vw(35);
          font-family:DINPro;
          font-weight:bold;
          line-height: 1;
        }
        .label{
          margin-top: vw(15);
          font-size:vw(26);
          font-weight:500;
          color:rgba(70,81,78,1);
          opacity:0.8;
        }
        &.area{
          .number{
            color:rgba(196,215,1,1);
            text-shadow:0px 4px 8px rgba(196,215,1,0.5);
            &::before{
              content: 'm²';
              font-size: vw(20);
              font-family:PingFang SC;
              font-weight:400;
              color:rgba(196,209,205,1);
              position: absolute;
              right: vw(-56);
            }
          }
        }
        &.height{
          .number{
            color:rgba(0,129,204,1);
            text-shadow:0px 4px 8px rgba(0,129,204,0.3);
          }
        }
        &.cerNum{
          .number{
            color:rgba(1,160,235,1);
            text-shadow:0px 4px 8px rgba(1,160,235,0.3);
            &::before{
              content: '次';
              font-size: vw(20);
              font-family:PingFang SC;
              font-weight:400;
              color:rgba(196,209,205,1);
              position: absolute;
              right: vw(-46);
            }
          }
        }
        &.codeNum{
          .number{
            color:rgba(46,182,170,1);
            text-shadow:0px 4px 8px rgba(46,182,170,0.3);
            &::before{
              content: '次';
              font-size: vw(20);
              font-family:PingFang SC;
              font-weight:400;
              color:rgba(196,209,205,1);
              position: absolute;
              right: vw(-26);
            }
          }
        }
        &.projectNum{
          .number{
            color:rgba(46,182,170,1);
            text-shadow:0px 4px 8px rgba(46,182,170,0.3);
            &::before{
              content: '个';
              font-size: vw(20);
              font-family:PingFang SC;
              font-weight:400;
              color:rgba(196,209,205,1);
              position: absolute;
              right: vw(-26);
            }
          }
        }
      }
    }
    .s-timeline{
      margin-top: vw(64);
    }
  }
  .map-distribution{
    margin: vw(83) auto vw(41);
    width: vw(633);
    text-align: left;
    .s-map ,img{
      margin-top: vw(29);
      width: 100%;
      height: vw(480);
    }
  }

}
</style>
