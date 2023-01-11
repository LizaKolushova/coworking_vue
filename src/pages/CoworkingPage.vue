<template>
    <section class="section-place">
    <div class="container section-about__container">
        <v-row >
            <v-col
                class="d-flex"
            >
           <v-select
                :items="sortRules"
                item-text="title"
                item-value="key"
                label="Сортировка"
                solo
                l-large
                > </v-select>
            </v-col>
            <v-col
                class="d-flex"
            >
                <v-select
                :items="items"
                label="Станции метро"
                solo
                l-large
                ></v-select>
            </v-col>
            <v-col
                class="d-flex"
            >
             <v-btn color="teal lighten-2" x-large class="white--text" @click="clear"> Сбросить фильтры</v-btn>
            </v-col>

        </v-row>
        <h1 class="section-about__title section-title">Коворкинги в Москве</h1>
        <v-row class="g-3" rows="3">    
                <v-card
                    class="mx-auto card d-flex"
                    width="25rem"
                    v-for="place in coworkings"
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
  import _ from 'lodash'
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
        coworkings: [],
        metro: [],
        sortRules: [
            { key :'good_id:asc', title: 'По порядку' },
            { key :'price:asc', title: 'По цене, сначала дешевые' },
            { key :'price:desc', title: 'По цене, сначала дорогие' }
        ],
        items: ['Кунцевская', 'Калужская', 'Ботанический Сад', 'Белорусская'],
        selectMetro: 0,
        minPrice: 0,
        maxPrice: 0,
        selectSort: 'good_id:asc'
      };
    },
    computed: {
        filteredCoworking: function() {
            // Фильтруем товары
            var filtered = this.coworkings
                // По Метро
                .filter(coworking => {
                    return this.selectMetro == 0 || coworking.metro== this.selectMetro;
                })

                // По ценам
                .filter(coworking => {
                    return Number(coworking.price) >= this.minPrice && Number(coworking.price) <= this.maxPrice;
                })

            // Сортируем
            var sorted = _.sortBy(filtered, coworking => {
                return Number(coworking[this.sortKey]);
            });

            // При необходимости сортируем в обратном направлении
            if (this.sortDir === 'desc') {
                sorted = sorted.reverse();
            }

            return sorted;
        },
        sortKey: function() {
            return this.selectSort.split(':')[0];
        },
        sortDir: function() {
            return this.selectSort.split(':')[1];
        }
    },
    mounted: function() {
        axios
            .get("/coworking.json")
            .then(response => {
                this.coworkings = response.data;
                this.metro = response.data.metro;
                this.minPrice = this.getMinPrice();
                this.maxPrice = this.getMaxPrice();
            });
    },
    methods: {
        coworkingList: function () {
        axios
          .get("/coworking.json")
          .then((response) => {
            this.coworkings = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
        getMinPrice: function() {
            return Number(_.minBy(this.coworkings, 'price').price);
        },
        getMaxPrice: function() {
            return Number(_.maxBy(this.coworkings, 'price').price);
        },
        clear: function() {
            this.selectMetro = 0;
            this.minPrice = this.getMinPrice();
            this.maxPrice = this.getMaxPrice();
            this.selectSort = 'good_id:asc';
        }
    },

  };
  </script>
