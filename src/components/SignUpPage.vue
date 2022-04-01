<template>
  <div class="signUp">
    <div v-if="$route.params.id == 0">
      <h2>가입하실 계정의 타입을 선택해주세요.</h2>
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
          나와 친구 맺기를 한 관리자(=스타일리스트)가 지정해준 스타일 목록을
          추천 받을 수 있습니다.<br />
          유저 계정에서는 내 스타일을 직접 지정할 수 없습니다. 내
          스타일리스트에게 오늘의 ootd를 맡겨보세요.
        </li>
        <li v-if="userTypes[1].active == true">
          관리자 계정은 스타일리스트가 사용하는 계정입니다.<br />
          나와 친구 맺기를 한 유저(=패션 테러리스트)에게 알맞은 패션 스타일들을
          추천해줄 수 있습니다.<br />
          패션 테러리스트에게 새 인생을 선물해주세요.
        </li>
      </ul>
    </div>

    <div v-if="$route.params.id == 1">
      <h2>가입하실 이메일을 입력해주세요.</h2>
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

    <div v-if="$route.params.id == 2">
      <h2>이름을 입력해주세요.</h2>
      <input type="text" placeholder="ex. 홍길동" class="login-form__input" />
    </div>

    <div v-if="$route.params.id == 3">
      <h2>비밀번호를 입력해주세요.</h2>
      <input
        type="password"
        placeholder="영문 + 숫자 조합 8~12자리"
        class="login-form__input"
      />
    </div>

    <div v-if="$route.params.id == 4">
      <h2>비밀번호를 한번 더 입력해주세요.</h2>
      <input
        type="password"
        placeholder="영문 + 숫자 조합 8~12자리"
        class="login-form__input"
      />
    </div>

    <div v-if="$route.params.id == 5">
      <h2>가입이 완료되었습니다! 🎉</h2>
    </div>

    <div class="signUp-progressBar">
      <div class="signUp-progressBar__container"></div>
      <div
        class="signUp-progressBar__progress"
        :style="
          'width:' + currentProgress + '%; transition: .2s all ease-in-out'
        "
      ></div>
    </div>

    <div class="signUp-pageLink">
      <router-link
        class="signUp-pageLink__next"
        :class="{ active: true == true }"
        :to="`/signUp/` + signUpStep"
        @click="nextStep()"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const userTypes = ref([
      {
        label: "user",
        active: true,
      },
      {
        label: "admin",
        active: false,
      },
    ]);

    const emailInput = ref("");
    const correctEmail = ref(true);
    // const signUpStep = this.$route.params.id ;
    // const currentProgress = signUpStep.value * 15;

    // function nextStep() {
    //   if ( this.signUpStep < 6 ) {
    //     this.signUpStep++;
    //   return this.currentStep;
    // }

    function activeCheck() {
      userTypes.value[0].active = !userTypes.value[0].active;
      userTypes.value[1].active = !userTypes.value[1].active;
    }

    function checkEmail(myValue) {
      var email = myValue;
      var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; //eslint-disable-line

      correctEmail.value = exptext.test(email);
    }

    return {
      userTypes,
      activeCheck,
      checkEmail,
      correctEmail,
      emailInput,
      // nextStep,
      // currentStep,
      // currentProgress,
      // signUpStep,
    };
  },
};
</script>

<style></style>
