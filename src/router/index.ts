import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import( "../views/Login.vue")
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import( "../views/Register.vue")
  },
  {
    path: "/Dashboard",
    name: "Register",
    component: () => import( "../views/Dashboard.vue")
  },
  {
    path: "/CommitHistory",
    name: "CommitHistory",
    component: () => import( "../views/CommitHistory.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;