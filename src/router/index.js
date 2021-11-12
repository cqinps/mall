import Vue from 'vue'
import VueRouter from 'vue-router'

const  Home = () => import("views/home/Home")
const  Profile = () => import("views/profile/Profile")
const  Category = () => import("views/category/Category")
const  Cars = () => import("views/cars/Cars")
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: Home,
    component: Home
  },
  {
    path: '/Profile',
    name: Profile,
    component: Profile
  },
  {
    path: '/Category',
    name: Category,
    component: Category
  },
  {
    path: '/Cars',
    name: Cars,
    component: Cars
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
