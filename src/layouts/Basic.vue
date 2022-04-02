<template>
  <div class="basic">
    <Navbar />
    <div class="content"> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../views/Navbar/Navbar";
export default {
  components: { Navbar },
  name: "Basic",
};
</script>

<style scoped>
  .basic{
    box-sizing: border-box;
    margin: 0 auto;
    top: 0;
  }
</style>
