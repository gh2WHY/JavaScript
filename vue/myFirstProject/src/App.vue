<template>
  <div id="app">
    <h2>我是app组件</h2>
    <!--使用路由-->
    <!-- <router-link to = '/home'  tag = 'button' replace router-link-active>首页</router-link>
    <router-link to = '/about' tag = 'button' replace router-link-active>关于</router-link>
    -->
    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link>
    <router-link to="/user/123" tag="button" active-class="active">用户</router-link>
    <!-- <router-link 
      :to="{path: '/profile', query: {name: 'why', age: 18, height: 1.88}}"
      tag="button" 
      active-class="active"
      >我的</router-link> -->

    <!-- 手动更改路径.但一般不会这么做 -->
    <!-- <button @click="btn">首页</button>
    <button @click="about">关于</button>-->
    <button @click= "profileClick">我的</button>

    <!-- 决定要渲染的位置  -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
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
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.87
        }
      })
    }
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
