<template lang="pug">
.app 
  .fullscreen-section.container-login
    .fullscreen-section.layer-login
      .login-block
        form(@submit.prevent="login").login-block__content
          span.title-name Авторизация
          .auth-block
            app-input(
              title="Login"
              icon="user"
              v-model="user.name"
              :errorText="validation.firstError('user.name')"
            )
          .auth-block
            app-input(
              title="Password"
              icon="password"
              v-model="user.password"
              :errorText="validation.firstError('user.password')"
            )
          button(type="submit" :disabled="disableSubmit").login-block__content-button Отправить
        button.login-block__content-button-close
</template>

<script>
import { Validator } from "simple-vue-validator"

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name":value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password":value => {
      return Validator.value(value).required("Введите пароль");
    }
  },
  data() {
    return {
      disableSubmit: false,
      user: {
        name: "",
        password: ""
      }
    };
  },
  components: {
    appInput: () => import ("./components/input.vue")
  },
  methods: {
    login() {
      this.disableSubmit=true;
      setTimeout(function() {
        this.disableSubmit=false;
        console.log('работает')}, 2000);
      
    }
  }
}

</script>

<style lang="pcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import '../styles/blocks/*.pcss';
</style>