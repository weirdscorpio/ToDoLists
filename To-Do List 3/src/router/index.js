import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import ToDo from "../views/ToDo.vue"
import Info from "../views/Info.vue"
import store from "../store/index.js"
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/todo",
    name: "ToDo",
    component: ToDo,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:"/info",
    name: "Info",
    component: Info
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
  const loggedIn = store.state.logged;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(!loggedIn && requiresAuth)
    next("/login")
  else
    next()
  
})

export default router;
