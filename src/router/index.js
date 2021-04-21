import { createRouter, createWebHashHistory } from 'vue-router'

//导入需要的组件
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Preface from '../views/Preface.vue'
import Enroll from '../views/Enroll.vue'
import _Main from 'element-plus/lib/el-main'
import MainPage from '../views/MainPage.vue'
import Hardware from '../views/Hardware.vue'
import Predict from '../views/Predict.vue'
import Advice from '../views/Advice.vue'
import Import from '../views/Import.vue'

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
  },
  {
    path: '/hardware',
    name: 'Hardware',
    component: Hardware,
  },
  {
    path: '/predict',
    name: 'Predict',
    component: Predict,
  },
  {
    path: '/advice',
    name: 'Advice',
    component: Advice,
  },
  {
    path: '/import',
    name: 'Import',
    component: Import,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
