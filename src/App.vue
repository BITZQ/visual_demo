<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <header>
      <router-link to="/migrateGraph">迁徙模拟图</router-link>
      <router-link to="/barGraph">走势图</router-link>
    </header>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
