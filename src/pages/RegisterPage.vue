<template>
    <v-container>
        <h1 class="section-about__title section-title">Регистрация</h1>
          <v-form
            ref="registerForm"
            v-model="registerFormValid"
            class="pa-4 pt-6 text-center"
            action="https://httpbin.org/post" method="post"
          >
            <v-text-field
            background-color="transparent"
              v-model="loginRegister"
              :rules="[rules.loginLength]"
              filled
              label="Логин"
              type="text"
            ></v-text-field
            ><v-text-field
            background-color="transparent"
              v-model="emailRegister"
              :rules="[rules.email]"
              filled
              label="Адрес электронной почты"
              type="email"
            ></v-text-field>
            <v-text-field
            background-color="transparent"
              v-model="passwordRegister"
              :rules="[rules.password, rules.passwordLength]"
              filled
              counter
              label="Пароль"
              style="min-height: 96px"
              type="password"
            ></v-text-field>
            <v-file-input
            background-color="transparent"
              filled
              :rules="[rules.avatar]"
              accept="image/png, image/jpeg, image/jpg"
              placeholder="Загрузите аватар"
              prepend-icon="mdi-camera"
              label="Аватар"
            ></v-file-input>
  
            <v-btn
              :disabled="!registerFormValid"
              color="teal lighten-2" block elevation="1" x-large
              class="mr-4 white--text"
              @click="validateRegister"
            >
              Зарегестрироваться
            </v-btn>
          </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "RegisterPage",
    data: function () {
      return {
        tab: null,
        login: "",
        password: "",
        loginFormValid: false,
        loginRegister: "",
        passwordRegister: "",
        emailRegister: "",
        registerFormValid: false,
        rules: {
          email: (v) =>
            !!(v || "").match(/@/) ||
            "Пожалуйста введите верный адрес электронной почты",
          loginLength: (v) =>
            (v || "").length >= 3 ||
            `Недостаточно символов, должно быть больше 3`,
          passwordLength: (v) =>
            (v || "").length >= 8 ||
            `Недостаточно символов, должно быть больше 8`,
          password: (v) =>
            !!(v || "").match(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
            ) ||
            "Пароль должен содержать букву в верхнем регистре, цифру и спец. символ",
          required: (v) => !!v || "Это поле обязательно",
          avatar: (v) =>
            !v || v.size < 2000000 || "Размер аватара должен быть меньше 2 МБ",
        },
      };
    },
    methods: {
      validateRegister() {
        this.$refs.registerForm.validate();
      },
      
    },
  };
  </script>
  
  