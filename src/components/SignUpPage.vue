<template>
  <div class="signUp">
    <!-- <h2>회원가입</h2> -->
    <div class="signUp-form">
      <div class="signUp-form__checkbox">
        <span>계정 타입</span>
        <br />
        <label for="type_terrorist">
          <input id="type_terrorist" type="radio" name="userType" />
          <span>FASHION TERRORIST</span>
        </label>
        <label for="type_stylist">
          <input id="type_stylist" type="radio" name="userType" checked />
          <span>STYLIST</span>
        </label>
      </div>

      <div class="signUp-form__inputWrap">
        <div class="signUp-form__inputItem">
          <label for="email">이메일</label>
          <input
            type="text"
            placeholder="example@yusinsa.com"
            id="email"
            class="login-form__input"
            v-model="emailInput"
            @blur="checkEmail(emailInput)"
          />
          <p class="alert" v-if="correctEmail == false">
            잘못된 이메일 형식입니다.
          </p>
        </div>

        <div class="signUp-form__inputItem">
          <label for="pw">
            <span>비밀번호</span>
            <input
              class="login-form__input"
              type="password"
              placeholder="영문+숫자 8~12자리"
              id="pw"
              v-model="passwordInput"
              @blur="checkPassword(passwordInput)"
            />
            <i @click="showPassword()">눈알</i>
          </label>
          <p class="alert" v-show="correctPassword == false">
            영문+숫자 8~12자리로 입력하세요.
          </p>
        </div>

        <div class="signUp-form__inputItem">
          <label for="pw">비밀번호 확인</label>
          <input
            class="login-form__input"
            type="password"
            placeholder="비밀번호 확인"
            id="pw_2"
            v-model="passwordInput_2"
            @blur="comparePassword(passwordInput_2)"
          />
          <p class="alert" v-if="passwordConfirm == false">
            비밀번호가 일치하지 않습니다.
          </p>
        </div>

        <div class="signUp-form__inputItem">
          <label for="name">이름</label>
          <input
            class="login-form__input"
            type="text"
            placeholder="2자 이상 입력해주세요"
            id="name"
            v-model="nameInput"
            @blur="checkName(nameInput)"
          />
          <p class="alert" v-if="correctName == false">
            2자 이상, 20자 이하의 한글 또는 영문을 입력하세요.
          </p>
        </div>
        <div class="signUp-form__inputItem">
          <label for="phoneNumber">전화번호</label>
          <input
            class="login-form__input"
            type="text"
            placeholder="01012345678"
            id="phoneNumber"
            v-model="phoneInput"
            @blur="checkPhoneNum(phoneInput)"
          />
          <p class="alert" v-if="correctPhoneNum == false">
            9~25 자리 숫자를 입력하세요.
          </p>
        </div>
      </div>
      <button
        class="signUp-pageLink__next"
        :class="{
          active:
            emailInput !== '' &&
            passwordInput !== '' &&
            passwordInput_2 !== '' &&
            nameInput !== '' &&
            phoneInput !== '' &&
            correctEmail == true &&
            correctPassword == true &&
            passwordConfirm == true &&
            correctName == true &&
            correctPhoneNum == true,
        }"
        @click="signUp()"
      >
        SIGN UP
      </button>
    </div>
  </div>

  <!-- <h2>가입하실 계정의 타입을 선택해주세요.</h2>
    <div class="signUp-select">
      <label v-for="type in userTypes" :key="type" :for="type">
        <input
          class="signUp-select__typeBtn"
          type="radio"
          name="userTypes"
          :value="type"
          :id="type"
          :checked="type.active"
          @click="activeCheck()"
          ref="myEmail"
        />
        <span>
          {{ type.label.toUpperCase() }}
          <img src="../assets/USER.svg" />
        </span>
      </label>
    </div>
    <ul class="signUp-typeInfo">
      <li v-if="userTypes[0].active == true">
        유저 계정은 패션 테러리스트를 위한 계정입니다.<br />
        나와 친구 맺기를 한 관리자(=스타일리스트)가 지정해준 스타일 목록을 추천
        받을 수 있습니다.<br />
        유저 계정에서는 내 스타일을 직접 지정할 수 없습니다. 내 스타일리스트에게
        오늘의 ootd를 맡겨보세요.
      </li>
      <li v-if="userTypes[1].active == true">
        관리자 계정은 스타일리스트가 사용하는 계정입니다.<br />
        나와 친구 맺기를 한 유저(=패션 테러리스트)에게 알맞은 패션 스타일들을
        추천해줄 수 있습니다.<br />
        패션 테러리스트에게 새 인생을 선물해주세요.
      </li>
    </ul> -->
</template>

<script>
import { ref } from "vue";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  setup() {
    // const userTypes = ref([
    //   {
    //     label: "user",
    //     active: true,
    //   },
    //   {
    //     label: "admin",
    //     active: false,
    //   },
    // ]);

    // function activeCheck() {
    //   userTypes.value[0].active = !userTypes.value[0].active;
    //   userTypes.value[1].active = !userTypes.value[1].active;
    // }

    const emailInput = ref("");
    const correctEmail = ref(true);

    function checkEmail(email) {
      var reg_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; //eslint-disable-line

      correctEmail.value = reg_email.test(email);
    }

    const correctPassword = ref(true);

    function checkPassword(password) {
      var reg_pw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/; //eslint-disable-line

      correctPassword.value = reg_pw.test(password);

      // console.log(correctPassword.value);
    }

    const passwordInput = ref("");
    const passwordInput_2 = ref("");
    const passwordConfirm = ref(true);

    // 비밀번호, 비밀번호 확인 일치여부 점검
    function comparePassword() {
      if (passwordInput_2.value == passwordInput.value) {
        passwordConfirm.value = true;
      } else {
        passwordConfirm.value = false;
      }
    }

    // 비밀번호 보이기/숨기기 기능
    function showPassword() {
      const password = document.getElementById("pw");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    }

    const nameInput = ref("");
    const correctName = ref(true);
    function checkName(name) {
      const reg_name = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,20}$/;

      correctName.value = reg_name.test(name);
    }

    const phoneInput = ref("");
    const correctPhoneNum = ref(true);
    function checkPhoneNum(phone) {
      const reg_phone = /^[0-9]{9,25}$/;

      correctPhoneNum.value = reg_phone.test(phone);
    }

    function signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          emailInput.value,
          passwordInput.value
        )
        .then(
          function (user) {
            alert("회원가입 완료");
            console.log(user);
          },
          function (err) {
            alert("에러: " + err.message);
          }
        );
    }

    return {
      // userTypes,
      // activeCheck,
      checkEmail,
      correctEmail,

      emailInput,
      passwordInput,
      passwordInput_2,

      checkPassword,
      correctPassword,
      passwordConfirm,
      comparePassword,
      showPassword,

      nameInput,
      correctName,
      checkName,

      phoneInput,
      correctPhoneNum,
      checkPhoneNum,

      signUp,
    };
  },
};
</script>

<style></style>
