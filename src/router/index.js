import {
  createRouter,
  createWebHistory
} from 'vue-router'

// import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'

// import Views
// Frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Contract from '@/views/frontend/Contract.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import Login from '@/views/frontend/Login.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Register from '@/views/frontend/Register.vue'
import Service from '@/views/frontend/Service.vue'
import Notfound404 from '@/views/frontend/Notfound404.vue'

// Backend
const routes = [{
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children: [{
      path: '',
      component: Home
    }],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: FrontendLayout,
    children: [{
      path: '',
      component: About
    }],
    meta: {
      title: 'เกี่ยวกับเรา',
      description: 'หน้าเกี่ยวกับเรา'
    }
  },
  {
    path: '/contract',
    name: 'Contract',
    component: FrontendLayout,
    children: [{
      path: '',
      component: Contract
    }],
    meta: {
      title: 'ติดต่อเรา',
      description: 'หน้าติดต่อเรา'
    }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: FrontendLayout,
    children: [{
      path: '',
      component: ForgotPassword
    }],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'หน้าลืมรหัสผ่าน'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: FrontendLayout,
    children: [{
      path: '',
      component: Login
    }],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'หน้าเข้าสู่ระบบ'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: FrontendLayout,
    children: [{
      path: '',
      component: Portfolio
    }],
    meta: {
      title: 'ผลงานของเรา',
      description: 'หน้าผลงานของเรา'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: FrontendLayout,
    children: [{
      path: '',
      component: Register
    }],
    meta: {
      title: 'สมัครสมาชิก',
      description: 'หน้าสมัครสมาชิก'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: FrontendLayout,
    children: [{
      path: '',
      component: Service
    }],
    meta: {
      title: 'บริการ',
      description: 'หน้าบริการของเรา'
    }
  },
  // Error 404
  {
    path: '/:catchAll(.*)',
    component: Notfound404,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router