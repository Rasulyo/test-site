<template>
  <div class="tours">
    <div class="tours__list" >
      <ul class="list-menu" v-for="tour in tours" :key="tour.id">
        <li class="menu-item-last" v-if="tour.data >= 18">{{ tour.tour }}</li>
        <li class="menu-item" v-else>{{ tour.tour }}</li>
        <li class="menu-item-location">
          <router-link class="link" to="/about"> {{ tour.location }}</router-link>
          <span>05/04</span>
        </li>
      </ul>
    <div class="content-bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NearTours",
  data() {
    return {
      tours: [
        { tour: "КАРАКОЛ", location: "горнолыжка", data: 15 },
        { tour: "БАРСКООН", location: "водопад" , data: 16},
        { tour: "КОЛТОР", location: "озеро" ,data: 17},
        { tour: "АЛАМЕДИН", location: "ушелье" ,data: 18},
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.tours {
  display: flex;
  /* height: 100%; */
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 50px;
}

.tours__list {
  display: flex;
  padding-top: 10%;
  margin-top: 500px;
}
.list-menu {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  list-style: none;
  margin: 0 auto;
  justify-content: flex-end;
  padding: 0 auto;
  z-index: 10;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin: 0;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 36px;
  padding: 0;
  position: relative;
  font-weight: 800;
}
.menu-item-last{
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 74px;
  position: relative;
  font-weight: 800;
}
  @media screen and (max-width: 1024px){
    .menu-item-last{
      font-size: 54px;
    }
    .menu-item{
      font-size: 28px;
      margin: 0;
      padding: 0;
    }
  }

.menu-item-location{
  display: flex;
  justify-content: space-between;
  margin: 0;
  position: relative;
  color: white;
  /* padding: 5px 0; */
  /* width: 250px; */
}
.link,  .menu-item-location> span{
  text-decoration: none;
  font-weight: 800;
  color: white;
  font-size: 16px;
}
/* .menu-item:nth-child(1) {
  font-size: 60px;
  margin: 0 0 0 -5px;
} */
.content-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  right: 0;
  width: 100%;
  max-height: 450px;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
}
</style>
