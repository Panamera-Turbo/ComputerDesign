import { createRouter, createWebHashHistory } from 'vue-router'

//导入需要的组件
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Preface from '../views/Preface.vue'
import Enroll from '../views/Enroll.vue'

const routes = [
  {
    path: '/',
    name: 'Preface',
    component: Preface,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/enroll',
    name: 'Enroll',
    component: Enroll,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
