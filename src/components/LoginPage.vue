<template>
  <div class="login">
    <div class="login-form">
      <div class="login-form__emailWrap">
        <label for="email">이메일(아이디)</label><br/>
        <input type="text" placeholder="example@yusinsa.com" id="email">
        <span class="check"></span>
        <p class="alert">잘못된 이메일 형식입니다.</p>
      </div>
      <div class="login-form__passwordWrap">
        <label for="password">비밀번호</label><br/>
        <input type="password" placeholder="비밀번호를 입력하세요." id="password">
        <button>눈알</button>
      </div>
      <div class="login-buttonWrap">
        <a class="login-buttonWrap__google" href="#">Sign in with Google</a>
        <a class="login-buttonWrap__findPassword" href="#">비밀번호를 잊으셨나요?</a>
        <button type="submit" class="login-buttonWrap__login">LOGIN</button>
        <router-link to="/signup/0" class="login-buttonWrap__signUp">SIGN UP</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>