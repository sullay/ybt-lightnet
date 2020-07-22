<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
body{
  background:linear-gradient(180deg,rgba(250,251,252,1),rgba(242,243,245,1));
}
#app {
  font-family: 'PingFang SC' 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  min-height: 100vh;
}
</style>
