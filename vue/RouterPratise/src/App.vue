<template>
  <div id="app">
    <h1>我是网站标题</h1>
    <!-- <router-link to ='/home'  tag = 'button' active-class ="active">首页</router-link>
    <router-link to ='/about' tag = 'button' active-class ="active">关于</router-link>
    <router-view></router-view> -->
    <button @click = 'linkToHome'>首页</button>
    <button @click = 'linkToAbout'>关于</button>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods : {
    linkToHome() {
      console.log(111);
      this.$router.push('/home');
    },
    linkToAbout() {
      this.$router.push('/about');
    }
  }
}
</script>

<style>
  .active {
    color : red;
  }
  /* .router-link-active {
    color : red;
  } */
</style>
