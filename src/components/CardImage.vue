<template>
  <div class="image-block">
    <div
      v-if="!url || !loaded"
      class="image-block__place-holder"
      :style="{ backgroundColor: color }"
    ></div>
    <img
      v-show ="url && loaded"
      class="image-block__image"
      @load="loaded = true"
      :src="url"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: "CardImage",
  props: {
    color: {
      type: String,
      default: "#d7d7d7",
    },
    url: {
      type: String,
      default: "",
    },
     alt: {
      type: String,
      default: "museum highlights",
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.image-block {
  &__place-holder {
    display: block;
    padding-bottom: 50%;
    width: 100%;
  }
  &__image {
    width: 100%;
  }
}
</style>