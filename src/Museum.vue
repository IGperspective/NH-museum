<template>
  <div class="museum">
    <header class="header">
      <div class="header__logo">
        <span> <b>N</b>atural </span><span ><b>H</b>ystory </span><span> <b>M</b>useum </span>
      </div>
      <Nav></Nav>
    </header>
    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";

export default {
  name: "Museum",
  components: {
    Nav,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
body{
  margin:0px;
  padding:0px;
}
.museum {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #304455;
}
.header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #f7f7f7;
  box-shadow: 1px 1px 3px 2px #80808026;
  @media (max-width: 760px) {
      justify-content: center;
    }
  &__logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    @media (max-width: 760px) {
      flex-direction: row;
    }
  }
}
</style>
