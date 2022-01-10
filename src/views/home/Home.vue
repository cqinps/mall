<template>
  <div>
    <NavBar id="home">
      <template v-slot:left>
        <div>asd</div>
      </template>
      <template v-slot:center>
        <div>hhhh</div>
      </template>
      <template v-slot:right>
        <div>asd</div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navvar/NavBar"


export default {
  name: "Home",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  #home{
    background-color: var(--color-tint);
    color: #ffffff;
    box-shadow: 0 1px 2px rgba(183,183,183,.3);
  }
</style>
