<template>
    <div>
    <section class="section-banner">
      <div class="container section-banner__container">
        <div class="section-banner__action">
          <h1 class="section-banner__title"><span class="section-banner__title-break">Забронируй коворкинг </span>
              <span class="section-banner__title-break">более 10 локаций </span>
              в Москве</h1>
          <div class="section-banner__call-action">
              <div class="section-banner__phrase">
                  <p class="section-banner__description">Удобное пространство</p>
                  <p class="section-banner__text">Коворкинг</p>
              </div>
              <router-link to="/coworking" class="button section-banner__button button--mode_orange  white--text">Забронировать</router-link>
          </div> 
        </div> 
          <img class="section-banner__img img-fluid" src="images/banner.jpg" alt="banner in a coworking "> 
      </div>  
      
  </section>
  <section class="section-projects">
      <div class="container section-projects__container">
          <div class="section-projects__our"> 
              <h2 class="section-projects__title"> Наши проекты </h2>
              <p class="section-projects__description"> База смарт-офисов и коворкингов со специальными условиями для вас </p>
              <ul class="section-projects__quantity quantity">
                  <li class="quantity__item">
                      <p class="quantity__number"> 100+ </p>
                      <p class="quantity__text"> Комфортных рабочих мест </p>
                  </li>
                  <li class="quantity__item">
                      <p class="quantity__number"> 10+ </p>
                      <p class="quantity__text"> Коворкингов в Москве </p>
                  </li>
              </ul>
          </div>
          <div class="section-projects__pluses"> 
              <ul class="section-projects__enum enum">
                  <li class="enum__item">
                      <img class="enum__img img-fluid" src="images/logo/todo.svg" alt="To do">
                      <div class="enum__card">
                          <p class="enum__title">Подберем локации </p>
                          <p class="enum__text"> В соответствие с вашей задачей. Закрепленные рабочие места, open space, отдельную переговорную. </p>
                      </div>
                  </li>
                  <li class="enum__item">
                      <img class="enum__img img-fluid" src="images/logo/alarm.svg" alt="Alarm">
                      <div class="enum__card">
                          <p class="enum__title"> Гибкий график </p>
                          <p class="enum__text"> Процесс бронирования рабочего пространства занимает менее 2 минут.. </p>
                      </div>
                  </li>
                  <li class="enum__item">
                      <img class="enum__img img-fluid" src="images/logo/home.svg" alt="Home">
                      <div class="enum__card">
                          <p class="enum__title"> Согласуем условия </p>
                          <p class="enum__text"> Наилучшие условия для наших клиентов. </p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </section>
  <v-container>
    <v-list three-line>
      <div v-for="comment in comments" :key="comment.id">
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
  
</div>
</template>

<script>
// const axios = require("axios");

export default {
  name: "MainPage",
  data: function () {
    return {
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
    validate() {
      this.$refs.commentForm.validate();
    },
  },
};
</script>