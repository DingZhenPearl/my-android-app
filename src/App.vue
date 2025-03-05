<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.content {
  padding-bottom: 50px; /* 与底部导航栏高度相同 */
  min-height: 100%;
  box-sizing: border-box;
}
</style>
