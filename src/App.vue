<template>
  <div id="app">
    <v-app>
      <header class="header">
        <div class="header__container container">

          <router-link to="/" class="header__logo logo">
              <img src="images/logo/logo.svg" alt="Logo coworking" class="header__logo img-fluid">
          </router-link>

            <nav class="header__menu menu">
               
                <ul class="menu__list_flex-line menu__list">
                    <li class="menu__item">
                      <router-link to="/" class="menu__link black--text">Главная</router-link>
                    </li>
                    <li class="menu__item">
                      <router-link to="/coworking" class="menu__link black--text">Коворгинги</router-link>
                    </li>
                    <li class="menu__item">
                      <router-link to="/about" class="menu__link black--text" >О нас</router-link>
                    </li>
                    <li class="menu__item">
                      <router-link to="/profile" class="menu__link black--text" >Профиль</router-link>
                    </li>
                </ul>


            </nav>
            <v-form>
              <v-text-field
                label="Поиск по сайту"
                append-icon="mdi-magnify"
              ></v-text-field>
            </v-form>
            <button class="header-toggler" type="button" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            <div class="header__group-button">
              <router-link to="/register" class="button header__button button--mode_orange white--text">Регистрация</router-link>
              <router-link to="/login " class="button header__button button--mode_green white--text" >Войти</router-link>
            </div>
            
        </div>
    </header>
      <main class="main">
        <router-view class="pb-10 mb-16"></router-view>
        <section class="section-contacts">
            <div class="container section-contacts__container">
                <h2 class="section-title section-contacts__title">Наши контакты</h2>
                <p class="section-contacts__link-wrapper">
                    <a class="section-contacts__link black--text" href="info@officeflex.ru">Email  info@officeflex.ru</a>
                </p>
                <p class="section-contacts__link-wrapper">
                    <a class="section-contacts__link black--text" href="tel:+74991109610">Телефон  +7 (499) 110-96-10</a>
                </p>
                <p class="section-contacts__link-wrapper">
                    <a class="section-contacts__link black--text" href="https://yandex.ru/maps/-/CCUNiDToCB">Aдрес  г. Москва, Лесная улица, д. 43, офис 525</a>
                </p>
            </div>
        </section>
      </main>
      
      <footer class="footer" >
        <div class="container">
            <div class="footer__container">
                <div class="footer-info">
                    <h2 class="footer-info__title">Coworking</h2>
                    <p class="footer-info__description" >Данный сайт предоставляет информацию о коворкинг в Москве</p>
                    <div class="social-media-links">
                        <a class="social-media" href="#">
                            <img class="social-media__icon img-fluid" src="images/logo/Twitter.svg" alt="Twitter">
                        </a>
                        <a class="social-media" href="#">
                            <img class="social-media__icon img-fluid" src="images/logo/telegram.svg" alt="telegram">
                        </a> 
                    </div>
                </div>
                <div class="footer__header-copy" >
                    <nav class="footer__menu menu" >
                        <ul class="menu__list menu__list_flex-column" style='display: flex;
                        flex-direction: column;
                        align-items: flex-start;'> 
                            <li class="menu__item">
                              <router-link to="/" class="nav__link black--text menu__link">Главная</router-link>
                            </li>
                            <li class="menu__item">
                              <router-link to="/coworking" class="nav__link black--text menu__link">Коворгинги</router-link>
                            </li>
                            <li class="menu__item">
                              <router-link to="/about" class="nav__link black--text menu__link">О нас</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="footer__privacy-policy">
                <p class="copyright">© 2022 Coworking</p>
                <div class="footer__links">
                    <a href="#" class="footer__link black--text">Политика конфиденциальности</a>
                    <a href="#" class="footer__link black--text">Договора</a>
                </div>
            </div>
        </div>
      </footer>
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ArticlesPage from './pages/ArticlesPage.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
    // ArticlesPage,
  },
};





</script>

<style media="print">
@page {
    size: A4;
    margin: 1cm;
}

@media print {
    *,
    *::before,
    *::after {
      background: #fff !important;
      color: #000 !important;
      /* Black prints faster */
      box-shadow: none !important;
      text-shadow: none !important;
    }

    img, .card {
        page-break-inside: avoid;
    }  
    .img-fluid{
        display: none;
    }
    body>*:not(main) {
        display: none;
    }

    a,
    a:visited {
        text-decoration: underline;
    }

    a[href]::after {
        content: "(" attr(href) ")";
    }
}
</style> 
