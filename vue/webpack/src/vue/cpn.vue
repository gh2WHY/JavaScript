<template>
  <div class="title">
    <h2>{{title}}</h2>
    <button @click="btnClick">子组件按钮</button>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      title: "我是cpn组件",
    };
  },
  methods: {
    btnClick() {
      alert("cpn组件");
    },
  },
};
</script>

<style>
  .title {
    font-size: 30px;
    color : white;
  }
</style>