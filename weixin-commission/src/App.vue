<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'PingFang SC';
  text-align: center;
  color: #313233;
  font-size: vw(26);
  width: 100vw;
  min-height: 100vh;
}
</style>
