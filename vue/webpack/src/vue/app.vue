<template>
  <div class="title">
    <h2>{{title}}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn ></Cpn>
  </div>
</template>

<script>
import Cpn from './cpn.vue'
export default {
  name: "App",
  data() {
    return {
      title: "我是app组件",
    };
  },
  methods: {
    btnClick() {
      alert("app组件");
    },
  },
  components : {
    Cpn
  }
};
</script>

<style>
  .title {
    font-size: 40px;
    color : purple;
  }
</style>