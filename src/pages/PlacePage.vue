<template>
    <v-container>
      <div>
        <!-- <h2 class="article__title">{{ article.name }}</h2>
      <img class="article__image" :src="'images/' + article.full_image" :alt="article.name" /> -->
        <v-img
          class="white--text align-end article__image"
          :src="'images/' + article.full_image"
          max-height="400"
        >
          <p
            class="card__title text-center text-h3 font-weight-medium"
            style="background-color: rgb(0, 0, 0, 0.4)"
          >
            {{ article.name }}
          </p>
        </v-img>
        <p class="article__date">{{ article.date }}</p>
        <p class="article__desc">{{ article.desc }}</p>
      </div>
  
      <v-list three-line>
        <div v-for="comment in comments" :key="comment.id">
          <!-- <v-subheader :key="comment.author.name">{{
            comment.author.name
          }}</v-subheader> -->
  
          <!-- <v-divider :key="comment.id" inset></v-divider> -->
          <v-divider :key="comment.id" inset></v-divider>
  
          <v-list-item :key="comment.title">
            <v-list-item-avatar>
              <v-img :src="comment.author.avatar"></v-img>
            </v-list-item-avatar>
  
            <v-list-item-content>
              <v-list-item-title>{{ comment.author.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ comment.text }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
      <v-divider></v-divider>
      <v-form class="mt-6" ref="commentForm" v-model="commentFormValid" lazy-validation>
        <v-textarea
          counter
          name="inputTextComment"
          :rules="commentRules"
          outlined
          label="Введите текст комментария"
          auto-grow
          clearable
          clear-icon="mdi-delete"
        ></v-textarea>
  
        <v-btn :disabled="!commentFormValid" color="teal lighten-2" class="mr-4 white--text" @click="validate">
        Отправить комментарий
      </v-btn>
  
      </v-form>
    </v-container>
  </template>
  
  <script>
  const axios = require("axios");
  
  export default {
    name: "ArticlePage",
    // props: {
    //   // msg: String
    // },
    // props: ['article'],
    created: function () {
      this.getArticle();
    },
    data: function () {
      return {
        articleId: this.$route.params.id,
        article: {},
        commentFormValid: false,
        commentRules: [
          (v) =>
            (v && v.length >= 10) ||
            "Текст комментария должен быть больше 10 символов",
          (v) =>
            (v && v.length <= 500) ||
            "Текст комментария должен быть меньше 500 символов",
        ],
        comments: [
          {
            id: 0,
            author: {
              name: "Димон",
              avatar: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
            },
            text: "Удобное расположение. Тихо и малолюдно.",
          },
          {
            id: 1,
            author: {
              name: "Виктор",
              avatar:
                "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
            },
            text: "График работы идеально подходит. Тарифы по доступной цене.",
          },
        ],
      };
    },
    methods: {
      getArticle: function () {
        axios
          .get("/articles.json")
          .then((response) => {
            // for(let i=0;i<response.data.length;i++)
            // console.log(response.data);
            response.data.forEach((element) => {
              if (element.id == this.articleId) {
                this.article = element;
              }
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      validate() {
        this.$refs.commentForm.validate();
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .article {
    width: 65%;
    margin: 0 auto;
    //&__title {
    //font-size: 3rem;
    //text-align: center;
    //}
    &__date {
      text-align: right;
      color: rgba(0, 0, 0, 0.386);
    }
    &__image {
      width: 100%;
      margin: 1rem 0;
    }
  }
  </style>
  