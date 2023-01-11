<template>
    <v-container>
    <section class="section-place">
    <div class="container section-about__container">
        <h1 class="section-about__title section-title">{{ coworking.title }}</h1>
        <div>
        <p class="text--primary" style="margin-bottom:30px">{{ coworking.description }}</p>
      </div>
        <v-row class="g-3" rows="3">    
                <v-card
                    class="mx-auto card d-flex"
                    width="25rem"
                    v-for="rate in place"
                    :key="rate.id"
                    style="margin-bottom: 14px"
                >
                <v-col class="sm p-3 g-3">
                    <v-img class="white--text align-end" height="250" :src="rate.photo" alt="rate.title" >
                    </v-img>
                    <v-card-title class="card__title">{{ rate.title }}</v-card-title>
                    <v-card-subtitle class="card__subtitle text--secondary" >{{ rate.type }}</v-card-subtitle>
                </v-col>
                </v-card>
           
        </v-row>
        </div>        
        
    </section> 
  
      <v-list three-line>
        <div v-for="comment in coworking.comments" :key="comment.id">
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
    name: "PlacePage",

    created: function () {
      this.getCoworking();
      this.getRate();
    },
    data: function () {
      return {
        placeId: this.$route.params.id,
        coworking: {},
        place:[],
        commentFormValid: false,
        commentRules: [
          (v) =>
            (v && v.length >= 10) ||
            "Текст комментария должен быть больше 10 символов",
          (v) =>
            (v && v.length <= 500) ||
            "Текст комментария должен быть меньше 500 символов",
        ]
      };
    },
    methods: {
      getCoworking: function () {
        axios
          .get("/coworking.json")
          .then((response) => {
            response.data.forEach((element) => {
              if (element.id == this.placeId) {
                this.coworking = element;
              }
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getRate: function () {
        axios
          .get("/rate.json")
          .then((response) => {
            response.data.forEach((element) => {
              if (element.place_id == this.placeId) {
                this.place = response.data;
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
  
  