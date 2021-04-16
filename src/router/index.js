import Vue from "vue";
import VueRouter from "vue-router";
import Visites from "../components/PageVisites/IndexVisites"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Visites",
    component: Visites,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
