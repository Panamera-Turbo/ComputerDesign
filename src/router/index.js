import { createRouter, createWebHashHistory } from 'vue-router'

//导入需要的组件
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Preface from '../views/Preface.vue'
import Enroll from '../views/Enroll.vue'
import _Main from 'element-plus/lib/el-main'
import MainPage from '../views/MainPage.vue'

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
  {
    path: '/mainpage',
    name: 'MainPage',
    component: MainPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
