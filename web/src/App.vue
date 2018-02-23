<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <a @click="sendPost">点击发送post请求</a>
    <a @click="sendGet">点击发送get请求</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    sendPost(){
      this.$http.post('//localhost:3000/product/123', {});
    },
    sendGet(){
      this.$http.get('//localhost:3000/product/123', {});
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
