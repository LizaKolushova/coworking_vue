<template>
  <div class="hello">
    <h1 class="text-h3 font-weight-medium text-center my-10">Приветсвую Вас на моём сайте!</h1>
    <v-carousel>
      <v-carousel-item v-for="article in articles" :key="article.id">
        <img
          :src="'images/' + article.preview_image"
          style="width: 100%; height: auto"
          :alt="article.name"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "HelloWorld",
  // props: {
  //   msg: String
  // }
  created: function () {
    this.articlesListForSlider();
  },
  data: function () {
    return {
      articles: [],
    };
  },
  methods: {
    articlesListForSlider: function () {
      axios
        .get("/articles.json")
        .then((response) => {
          response.data.forEach((article) => {
            if (article.slider == true) {
              this.articles.push(article);
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.v-carousel {
  width: 60%;
  margin: 0 auto;
}
</style>