<template>
  <div id="app">
    <div id="nav">
      <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path:'/about'}">登录</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path:'/hello'}">详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style>
html,body{
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}
</style>
