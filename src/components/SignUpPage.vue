<template>
  <div class="signUp">
      <h2>가입하실 계정의 타입을 선택해주세요.</h2>
      <div class="signUp-select">
        <button class="signUp-select__typeButton" v-for="type in selectedType" :key="type">
          {{ type }}
          <img :src="`../assets/${type}.svg`"/>
        </button>
      </div>

      <ul class="signUp-typeInfo">
        <li v-if="selectedType === 'user'">
          유저 계정은 패션 테러리스트를 위한 계정입니다.<br/>
          나와 친구 맺기를 한 관리자(=스타일리스트)가 지정해준 스타일 목록을 추천 받을 수 있습니다.<br/>
          유저 계정에서는 내 스타일을 직접 지정할 수 없습니다. 내 스타일리스트에게 오늘의 ootd를 맡겨보세요 :)
        </li>
        <li v-if="selectedType === 'admin'">
          관리자 계정은 패션 테러리스트를 위한 계정입니다.<br/>
          나와 친구 맺기를 한 관리자(=스타일리스트)가 지정해준 스타일 목록을 추천 받을 수 있습니다.<br/>
          유저 계정에서는 내 스타일을 직접 지정할 수 없습니다. 내 스타일리스트에게 오늘의 ootd를 맡겨보세요 :)
        </li>
      </ul>
      <button>NEXT</button>
    </div>
</template>

<script>
import {computed} from 'vue'
export default {
  setup() {
    const selectedType = ['USER', 'ADMIN'];
    const signUpStep = computed(() => { return this.$route.params.id });

    return {
      signUpStep,
      selectedType,
    }
  }

}
</script>

<style>
</style>