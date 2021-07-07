<template>
  <div class="space-page">
    <h1 class="space-page__title">Space</h1>
    <p>Explore our space page highlights</p>
    <div class="space-page__highlights">
      <MuseumHighlight
        v-for="(highlight, index) in highlights"
        :key="index"
        :name="highlight.name"
        :image="highlight.image"
        :date="highlight.date"
        :description="highlight.description"
        :news="highlight.news"
        :partner="highlight.partner"
        :theme="theme"
      >
        <template v-slot:badge>
          <img
            v-if="highlight.partner"
            src="../assets/space-partner-badge.svg"
          />
          <img v-else src="../assets/space-badge.svg" />
        </template>
        <template v-if="highlight.quiz" v-slot:extra>
          <p>
            <strong>Quiz:</strong><br /><a
              href="highlight.quiz"
              target="_blank"
              >{{ highlight.quiz }}</a
            >
          </p>
        </template>
      </MuseumHighlight>
    </div>
    <button
      v-if="load < combinedSpaceHighlights.length"
      @click="loadMore"
      class="button-load"
      :style="{ color: theme.mainColor }"
    >
      more...
    </button>
  </div>
</template>

<script>
import MuseumHighlight from "../components/MuseumHighlight.vue";
import formatSpacePartnersData from "../functions/formatSpacePartnersData.js";

export default {
  name: "Space",
  components: {
    MuseumHighlight,
  },
  data() {
    return {
      theme: {
        mainColor: "#2c3791",
        partnerColor: "#00adf2",
      },
      combinedSpaceHighlights: [],
      load: 3,
      spaceHighlights: [
        {
          date: "2020-04-20 12:20:00",
          description:
            "Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.",
          id: 1,
          image: "",
          name: "Asteroids",
        },
        {
          date: "2020-05-20 15:50:00",
          description:
            "A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.",
          id: 9,
          image: "",
          name: "Comets",
        },
        {
          date: "2020-05-01 9:22:00",
          description:
            "The term planet is ancient, with ties to history, astrology, science, mythology, and religion.",
          id: 7,
          image: "",
          name: "Planets",
          news: {
            date: "2020-08-18 18:00:00",
            title: "Attend our talk about Jupiter with Dr. Hogarth",
          },
          quiz: "https://planetquiz.space",
        },
        {
          date: "2020-07-05 4:10:00",
          description:
            "A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.",
          id: 12,
          image: "",
          name: "Meteor showers",
          news: {
            title: "The Lyrids will peak at on April 21-22 2021, at night",
          },
        },
      ],
      spacePartners: {
        observatory: {
          createdAt: "2020-06-01 11:45:00",
          info: "The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.",
          image: "",
          name: "Mauna Kea Observatories",
        },
      },
    };
  },
  computed: {
    highlights() {
      return this.combinedSpaceHighlights.slice(0, this.load);
    },
  },
  methods: {
    loadMore() {
      this.load += this.load;
    },
  },
  created() {
    // fetch("https://server.out/space/highlights", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.combinedSpaceHighlights = json;
    //   })
    //   .catch();

    // or
    this.combinedSpaceHighlights = this.spaceHighlights.concat(
      formatSpacePartnersData(this.spacePartners)
    );
    this.combinedSpaceHighlights.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  },
};
</script>

<style lang="scss" scoped>
.space-page {
  &__title {
    color: #2c3791;
    font-size: 36px;
    font-weight: 600;
  }
  &__highlights {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    align-items: stretch;
    gap: 50px;
  }
}
.button-load {
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  background-color: white;
  border: none;
  padding: 20px;
  width: 200px;
  margin: 40px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
