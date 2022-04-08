<template>
  <div class="login">
    <div class="login-form">
      <div class="login-form__emailWrap">
        <label for="email">이메일(아이디)</label><br />
        <input
          type="text"
          placeholder="example@yusinsa.com"
          id="email"
          class="login-form__input"
          v-model="emailInput"
          @blur="checkEmail(emailInput)"
        />
        <!-- <span class="check"></span> -->
        <p class="alert" v-if="correctEmail == false">
          잘못된 이메일 형식입니다.
        </p>
      </div>
      <div class="login-form__passwordWrap">
        <label for="password">비밀번호</label><br />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          class="login-form__input"
          v-model="pwInput"
          id="password"
        />
        <i @click="showPassword">눈알</i>
      </div>
      <div class="login-buttonWrap">
        <!-- <a class="login-buttonWrap__google" href="#">Sign in with Google</a> -->
        <a class="login-buttonWrap__findPassword" href="#"
          >비밀번호를 잊으셨나요?</a>
        <button type="submit" class="login-buttonWrap__login" @click="clickLogin()">LOGIN</button>
        <router-link to="/signup" class="login-buttonWrap__signUp">SIGN UP</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const pwInput = ref("");
    const emailInput = ref("");
    const correctEmail = ref(true);

    // 이메일 유효성검사 정규표현식
    function checkEmail(myValue) {
      var email = myValue;
      var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; //eslint-disable-line

      correctEmail.value = exptext.test(email)
    }

    // 비밀번호 보이기/숨기기 기능
    function showPassword() {
      const password = document.getElementById('password');
      if(password.type === "password"){
        password.type = "text"
      } else {
        password.type = "password"
      }
    }

    function clickLogin() {
      if (emailInput.value == '' || correctEmail.value == false ) {
        alert('이메일을 다시 입력해주세요.')
      } else if (pwInput.value == '') {
        alert('비밀번호를 다시 입력해주세요.')
      }
      else {
        // - submit login info
        // - 아이디 비번이 틀린경우?
      }
    }


    return {
      emailInput,
      pwInput,
      checkEmail,
      correctEmail,
      showPassword,
      clickLogin,
    };
  },
};
</script>

<style></style>
