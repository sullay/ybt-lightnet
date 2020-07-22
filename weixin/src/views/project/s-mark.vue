<template>
  <div class="s-mark">
    <div v-if="join" class="s-mark-join"></div>
  </div>
</template>
<script>
export default {
  props: {
    join: Boolean
  }
}
</script>
<style lang="scss" scoped>
.s-mark{
  width: vw(14);
  height: vw(26);
  background:rgba(236,237,239,1);
  position: absolute;
  &::before{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: vw(-8);
    top: 0;
    border-right: vw(8) solid rgba(236,237,239,1);
    border-top: vw(13) solid transparent;
    border-bottom: vw(13) solid transparent;
  }
  &::after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: vw(-8);
    top: 0;
    border-left: vw(8) solid rgba(236,237,239,1);
    border-top: vw(13) solid transparent;
    border-bottom: vw(13) solid transparent;
  }
}
.s-mark-join{
  position: relative;
  top: vw(-63);
  left: vw(3);
  width: vw(8);
  height: vw(76);
  background:linear-gradient(0deg,rgba(207,209,215,1),rgba(250,250,250,1),rgba(205,207,213,1));
  border-radius: vw(4);
  z-index: 999;
}
</style>
