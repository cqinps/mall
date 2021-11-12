<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#tab-bar{
  user-select: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  text-align: center;
  display: flex;
  background-color: #f1f3f4;
  box-shadow: 0 -1px 2px rgba(183,183,183,.3);
}
</style>