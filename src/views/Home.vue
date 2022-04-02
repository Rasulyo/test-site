<template>
  <div class="home">
    <div class="content">
      <near-tours />
    </div>
    <Tours />
  </div>
</template>

<script>
import NearTours from "../components/NearTours.vue";
import Tours from "@/views/Navbar/Tours/Tours";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    NearTours,
    Tours,
  },
};
</script>

<style scoped>
.home {
  margin: 0 auto;
}
.content {
  min-height: 850px;
  /* height: 100%; */
  background-image: url("../assets/bgt.png");
  background-size: cover;
  background-repeat: no-repeat;
  position:relative;
  background-position: center;
}
</style>
