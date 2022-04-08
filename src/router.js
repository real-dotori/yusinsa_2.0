import { createWebHistory, createRouter } from "vue-router";
import SplashPage from "./components/SplashPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

const routes = [
  {
    path: "/",
    component: SplashPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignUpPage, 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;