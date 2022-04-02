<template>
  <nav class="nav">
    <ul class="menu">
      <router-link  to="/"><img src="@/assets/logos.png" alt="logo" /></router-link> 
      <router-link  to="/tours" class="menu-item">Туры</router-link>
      <router-link  to="/special" class="menu-item">Специальные предложения</router-link>
      <router-link  to="/about" class="menu-item">О нас</router-link>
      <li class="menu-item"><my-button class="my-btn">Свяжитесь с нами</my-button></li>
    </ul>
    <div>
      <img class="menu-icons" src="@/assets/searchicon.png" alt="searchicon">
      <img class="menu-icons" src="@/assets/worldicon.png" alt="worldicon">
      <img class="menu-icons" src="@/assets/usericon.png" alt="userhicon">
    </div>
  </nav>
</template>

<script>
import MyButton from "../../components/ui/MyButton.vue";
export default {
  components: { MyButton },
  name: "Navbar",
};
</script>
<style lang="scss" scoped>
.nav {
  position: relative;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}
.menu {
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 80px;
  margin: 0 ;
  padding: 0  10px;
  background: transparent;
}

.menu .menu-item {
  font-weight: 500;
  color: $text-color;
  font-style: normal;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px;
  font-size: 16px;
  border-bottom: 4px solid transparent;
}
.menu img{
  padding-right: 20px;
}
.menu .menu-item.active {
  border-bottom: 4px solid #3e8407;
}
.my-btn {
  margin: 0 15px;
  font-size: 16px;
}
.menu-icons{
  margin: 0 10px;
}

</style>
