<template>
  <div>
    <tab-bar>
      <h2>2</h2>
      <tab-bar-item>
        321
      </tab-bar-item>
    </tab-bar>
    <tab-bar>
      <tab-bar-item path='/Home' activeColor="pink">
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/home.svg" alt="01">
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="01">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/Cars' activeColor="pink">
        <template v-slot:item-img >
          <img src="~assets/img/tabbar/category.svg" alt="01">
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="01">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/Profile" activeColor="pink">
        <template v-slot:item-img >
          <img src="~assets/img/tabbar/shopcart.svg" alt="01">
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="01">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/Category" activeColor="pink">
        <template v-slot:item-img >
          <img src="~assets/img/tabbar/profile.svg" alt="01">
        </template>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="01">
        </template>
        <template v-slot:item-text>
          <div>购物</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: "mainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
