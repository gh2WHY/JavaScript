<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#FF5977">
      <img slot="item-icon" src="../../assets/img/home.svg" alt />
      <img slot="item-icon-active" src="../../assets/img//home_active.svg" alt />
      <div slot="item-content">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#FF5977">
      <img slot="item-icon" src="../../assets/img/category.svg" alt />
      <img slot="item-icon-active" src="../../assets/img/category_active.svg" alt />
      <div slot="item-content">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopCart" activeColor="#FF5977">
      <img slot="item-icon" src="../../assets/img/shopcart.svg" alt />
      <img slot="item-icon-active" src="../../assets/img/shopcart_active.svg" alt />
      <div slot="item-content">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#FF5977">
      <img slot="item-icon" src="../../assets/img/profile.svg" alt />
      <img slot="item-icon-active" src="../../assets/img/profile_active.svg" alt />
      <div slot="item-content">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../tabbar/TabBar";
import TabBarItem from "../tabbar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
