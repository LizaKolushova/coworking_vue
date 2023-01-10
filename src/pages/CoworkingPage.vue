<template>
    <section class="section-place">
    <div class="container section-about__container">
        <v-row >
            <v-col
                class="d-flex"
            >
                <v-btn
                color="teal lighten-4"
                elevation="2"
                large
                x-large
                > Отсортировать по стоимости</v-btn>
            </v-col>
            <v-col
                class="d-flex"
            >
                <v-select
                :items="items"
                label="Станции метро"
                solo
                ></v-select>
            </v-col>

        </v-row>
        <h1 class="section-about__title section-title">Коворкинги в Москве</h1>
        <v-row class="g-3" rows="3">    
                <v-card
                    class="mx-auto card d-flex"
                    width="25rem"
                    v-for="place in coworking"
                    :key="place.id"
                    style="margin-bottom: 14px"
                >
                <v-col class="sm p-3 g-3">
                    <v-img class="white--text align-end" height="250" :src="place.photo" alt="place.title" >
                    </v-img>
                    <v-card-title class="card__title">{{ place.title }}</v-card-title>
                    <v-card-subtitle class="card__subtitle text--secondary" >{{ place.address }}</v-card-subtitle>
                    <v-card-subtitle class="card__subtitle text--secondary" >{{ place.metro }}</v-card-subtitle>
                    <v-card-text class="text--primary">Стоимость от {{place.price}} руб/час</v-card-text>
                    <v-card-text class="text--primary">Режим работы {{place.week}} {{place.start}}-{{place.end}}</v-card-text>

                    <v-card-text class="text--primary">{{place.short}}</v-card-text>
                    <v-rating
                        color="amber darken-3"
                        background-color="teal lighten-2"
                        hover
                        length="5"
                        size="40"
                        value="4"
                    ></v-rating>
                    <v-card-actions>
                    
                    <router-link 
                        :to="{
                        name: 'placeId',
                        params: { id: place.id},
                        }" 
                    > <v-btn color="teal lighten-2" block elevation="1" x-large class="white--text"> Тарифы </v-btn></router-link> 
                    </v-card-actions>
                </v-col>
                </v-card>
           
        </v-row>
        </div>        
        
    </section> 
  </template>
  
  <script>
  const axios = require("axios");
  
  export default {
    name: "CoworkingPage",
    props: {
      // msg: String
    },
    created: function () {
      this.coworkingList();
    },
    data: function () {
      return {
        coworking: [],
        items: ['Кунцевская', 'Калужская', 'Ботанический Сад', 'Белорусская'],
      };
    },
    methods: {
        coworkingList: function () {
        axios
          .get("/coworking.json")
          .then((response) => {
            this.coworking = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <!-- <style lang="scss" scoped>
  .articles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5vh;
    row-gap: 5vh;
  }
  
  .article {
    width: 30%;
    &__link {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      row-gap: 1rem;
    }
    &__title {
      font-size: 2rem;
      text-align: center;
    }
    &__image {
      width: 100%;
    }
  }
  
  .card{
    &__title {
      word-break: break-word;
    }
  }
  </style> -->
  