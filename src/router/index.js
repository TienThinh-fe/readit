import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Read from "../views/Read.vue";
import Result from "../views/Result.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/login", component: Login },
    { path: "/read", component: Read },
    { path: "/result", component: Result },
  ],
});

export default router;
