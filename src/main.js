import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO59jBOfSuOc7ZsfOZkRInx3OIgeVUclM",
  authDomain: "yusinsa-9db18.firebaseapp.com",
  projectId: "yusinsa-9db18",
  storageBucket: "yusinsa-9db18.appspot.com",
  messagingSenderId: "175373260274",
  appId: "1:175373260274:web:ab287cfb81c10b6d11076b",
  measurementId: "G-DZVF6C5QLX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

createApp(App).use(router).mount("#app");