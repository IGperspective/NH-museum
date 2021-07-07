<template>
  <div class="nav" id="nav">
    <router-link class="nav-link" to="/dinosaur"><img class="nav-link__icon" src="../assets/dino.svg" />Dinosaur</router-link>
    <router-link class="nav-link" to="/space"><img class="nav-link__icon" src="../assets/space-badge.svg" />Space</router-link>
    <router-link class="nav-link" to="/ocean"><img class="nav-link__icon" src="../assets/ocean.svg" />Ocean</router-link>
    <router-link class="nav-link" to="/wildlife"><img class="nav-link__icon" src="../assets/wild.svg" />Wildlife</router-link>
  </div>
</template>
<script>
/*
could pass props with available pages and generate nav
*/
export default {
  name: "Nav",
};
</script>
<style lang="scss">
.nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.nav-link {
      display: flex;
      margin: 5px 15px;
      padding:10px 0px;
      align-items: center;
      color:#304455;
      text-decoration:none;
      text-transform: uppercase;
      
  &.router-link-exact-active {
      border-bottom:1px solid #304455
    }    
  &__icon {
      height:28px;
      margin-right:8px
    }
}
</style>
