import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";


//  scriviamo tutte le apgine che router puo instradare
const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,//questo arriva dalla riga 2, che lo importiamo, mentre con about lo scriviamo direttamente in linea
  },
  {
    path: "/about",
    name: "About",
    // importantissimo
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
// creazione del router e della history mode
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
