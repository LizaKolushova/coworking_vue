import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import './assets/css/style.css'


Vue.use(VueRouter)
Vue.use(vuetify)



import mainPage from './pages/MainPage.vue'
import coworkingPages from './pages/CoworkingPage.vue'
import placePages from './pages/PlacePage.vue'
import registerPage from './pages/RegisterPage.vue'
import loginPage from './pages/LoginPage.vue'
import profileView from './pages/ProfileView.vue'
import aboutUs from './pages/AboutUs.vue'


Vue.config.productionTip = false

const routes = [
  { path: '/', component: mainPage },
  { path: '/coworking', component: coworkingPages },
  { path: '/coworking/:id', component: placePages, name: 'placeId', props: true  },
  { path: '/register', component: registerPage},
  { path: '/login', component: loginPage},
  { path: '/profile', component: profileView},
  { path: '/about', component: aboutUs},
]

const router = new VueRouter({
  routes
})

new Vue({ 
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
