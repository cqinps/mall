<template>

    <div class="tab-bar-item" @click="activeClick(path)">
      <div>
        <div  class="img" v-show="!isActive"><slot name="item-img"></slot></div>
        <div  class="img" v-show="isActive"><slot name="item-img-active"></slot></div>
        <div class="text" :style="isColor"><slot name="item-text"></slot></div>
      </div>
    </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default() {
        return '/Home'
      }
    },
    activeColor: {
      type: String,
      default() {
        return 'red';
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return  this.$route.path.indexOf(this.path) ? 0 : 1
    },
    isColor () {
      return  this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    activeClick(path) {
      if (this.$route.path !== path){
        this.$router.replace(path)
      }
    }
  }
}
</script>

<style scoped>

.tab-bar-item{
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  flex: 1;
  margin-top: 7px;
  overflow: hidden;
}
.tab-bar-item .img {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently not supported by any browser */
}
.tab-bar-item .img img{
  height: 20px;
  width: 20px;
}
.tab-bar-item  .text{
  font-size: 11px;
}
/*.active {*/
/*  color: red;*/
/*}*/
</style>
