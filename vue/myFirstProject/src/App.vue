<template>
  <div id="app">
    <h2>我是app组件</h2>
    <!--使用路由-->
    <!-- <router-link to = '/home'  tag = 'button' replace router-link-active>首页</router-link>
    <router-link to = '/about' tag = 'button' replace router-link-active>关于</router-link>
    -->
    <!-- <router-link to = '/home'  tag = 'button' active-class = 'active'>首页</router-link>
    <router-link to = '/about' tag = 'button' active-class = 'active'>关于</router-link>
    -->
    <!-- 手动更改路径.但一般不会这么做 -->
    <button @click="btn">首页</button>
    <button @click="about">关于</button>
    <!-- 决定要渲染的位置  -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    btn() {
      this.$router.push("/home");
      // this.$router.replace('/home')
    },
    about() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
/* .router-link-active {
    color : red;
  } */

.active {
  color: orangered;
}
</style>
