<template>
  <div class="museum-highlight" :style="{ color: theme.mainColor }">
    <div class="museum-highlight__card">
      <div class="card-header">
        <div v-if="partner" class="card-header__partner">
          {{ partner }}
        </div>
        <div class="card-header__badge">
          <slot name="badge">
            <VueFontawesome
              icon="star"
              :color="badgeColor"
              style="font-size: 45px"
            />
          </slot>
        </div>
        <div class="card-header__image">
          <CardImage :url="image" :alt="name" />
        </div>
      </div>
      <div class="card-info">
        <h3 class="card-info__name">{{ name }}</h3>
        <div class="card-info__date">
          <span>Posted:</span><span>{{ date | dd_mm_yy }}</span>
        </div>
        <p class="card-info__description">{{ description }}</p>

        <div class="card-info__extra">
          <slot name="extra"></slot>
        </div>

        <div v-if="news" class="card-info__news">
          <p>
            <strong>Updates:</strong><br />
            <span>{{ newsDate }}</span>
            {{ news.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardImage from "./CardImage.vue";
import { highlightMixin } from "../mixins/highlightMixin.js";
export default {
  name: "MuseumHighlight",
  components: { CardImage },
  mixins: [highlightMixin],
  props: {
    partner: String,
    theme: {
      type: Object,
      default() {
        return {
          mainColor: "#2c3791",
          partnerColor: "#00adf2",
        };
      },
    },
  },
  computed: {
    badgeColor() {
      return this.partner ? this.theme.partnerColor : this.theme.mainColor;
    },
  },
};
</script>

<style lang="scss" scoped>
$textColor: #304455;

@mixin text {
  text-align: left;
  margin: 20px 0px;
  color: $textColor;
}

.museum-highlight {
  line-height: 1.4;
  font-size: 16px;

  &__card {
    width: 380px;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    height: 100%;
  }
  .card-header {
    &__image {
      height: 190px;
      overflow: hidden;
      border-radius: 20px 20px 0px 0px;
    }
    &__partner {
      color: white;
      font-size: 18px;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 20px;
      left: 20px;
    }
    &__badge {
      position: absolute;
      display: flex;
      top: -20px;
      right: -20px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
      background-color: white;
      align-content: space-around;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      img {
        max-width: 60px;
      }
    }
  }
  .card-info {
    background-color: white;
    padding: 20px 25px;
    margin-top: -20px;
    position: relative;
    border-radius: 20px;
    min-height: 250px;
    &__name {
      font-size: 24px;
      line-height: 1.4;
      text-align: left;
      letter-spacing: 0;
      margin: 0px 0px 20px;
    }
    &__date {
      display: flex;
      justify-content: space-between;
      color: $textColor;
    }
    &__description {
      @include text;
    }
    &__news {
      @include text;
    }
    &__extra {
      @include text;
    }
  }
}
</style>
