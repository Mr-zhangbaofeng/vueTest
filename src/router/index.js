import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const constRoutes = [
  {
    path: "/login",
    component: () => import("@/views/user/userLogin"),
  },
  {
    path: "/",
    component: () => import("@/views/user/userHome.vue"),
    name: "home"
  },
  {
    path: "/about",
    component: () => import("@/views/user/userAbout.vue"),
    name: "about"
  },{
    path: "/hello",
    component: () => import("@/views/helloWorld.vue"),
    name: "hello"
  }
];

export default new Router({
  mode: "history",
  routes: constRoutes
});