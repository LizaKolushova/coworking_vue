<template>
  <v-container>
    <v-card class="mx-auto" max-width="750" tile>
      <v-img
        height="100%"
        src="https://source.unsplash.com/random/750x250?sig=1"
      >
        <v-row
          align="end"
          class="fill-height ma-0"
        >
          <v-col align-self="start" class="pa-0" cols="4">
            <v-avatar class="profile" color="teal lighten-2"  size="250" tile>
              <v-img :src="user.avatar"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item dark>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>

                <v-dialog v-model="dialogEditProfile" max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="mt-14 white--text"
                      color="teal lighten-2"
                      white
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon left>mdi-pencil</v-icon> Изменить
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Профиль пользователя</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              filled
                              label="Имя пользователя"
                              v-model="user.name"
                              type="text"
                              :rules="[rules.loginLength]"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              filled
                              label="Электронная почта"
                              v-model="user.email"
                              type="email"
                              :rules="[rules.email]"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="teal lighten-2"  text @click="dialogEditProfile = false">
                        Закрыть
                      </v-btn>
                      <v-btn color="teal lighten-2"  text @click="dialogEditProfile = false">
                        Сохранить
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
// const axios = require("axios");

export default {
  name: "ArticlePage",
  data: function () {
    return {
      user: {
        name: "Виктор",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        email: "victor@gmail.com",
      },
      dialogEditProfile: false,
      rules: {
        email: (v) =>
          !!(v || "").match(/@/) ||
          "Пожалуйста введите верный адрес электронной почты",
        loginLength: (v) =>
          (v || "").length >= 3 ||
          `Недостаточно символов, должно быть больше 3`,
        required: (v) => !!v || "Это поле обязательно",
        avatar: (v) =>
          !v || v.size < 2000000 || "Размер аватара должен быть меньше 2 МБ",
      },
    };
  },

};
</script>

