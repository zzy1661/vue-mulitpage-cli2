<template>
  <div id="app">
    <img src="./assets/logo.png">
    test
    <hr />
    <!--<router-link :to="{name: 'Test'}" class="mr">name Test</router-link>
    <router-link to="/test">to /test</router-link>-->
    <router-view/>
    <!--<router-view name="footer"></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: #ccc;
}
.mr {
	margin-right: 20px;
}
</style>
