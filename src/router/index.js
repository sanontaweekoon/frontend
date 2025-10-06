import {
  createRouter,
  createWebHistory
} from 'vue-router'

// import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'

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
import Dashboard from '@/views/backend/Dashboard.vue'
import Products from '@/views/backend/Products.vue'

const routes = [{
    /** FrontEnd Route */
    path: '/',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Home',
      component: Home
    }],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
  },
  {
    path: '/about',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'About',
      component: About
    }],
    meta: {
      title: 'เกี่ยวกับเรา',
      description: 'หน้าเกี่ยวกับเรา'
    }
  },
  {
    path: '/contract',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Contract',
      component: Contract
    }],
    meta: {
      title: 'ติดต่อเรา',
      description: 'หน้าติดต่อเรา'
    }
  },
  {
    path: '/forgotpassword',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'ForgotPassword',
      component: ForgotPassword
    }],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'หน้าลืมรหัสผ่าน'
    }
  },
  {
    path: '/login',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Login',
      component: Login
    }],
    meta: {
      title: 'เข้าสู่ระบบ',
      description: 'หน้าเข้าสู่ระบบ'
    }
  },
  {
    path: '/portfolio',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Portfolio',
      component: Portfolio
    }],
    meta: {
      title: 'ผลงานของเรา',
      description: 'หน้าผลงานของเรา'
    }
  },
  {
    path: '/register',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Register',
      component: Register
    }],
    meta: {
      title: 'สมัครสมาชิก',
      description: 'หน้าสมัครสมาชิก'
    }
  },
  {
    path: '/service',
    component: FrontendLayout,
    children: [{
      path: '',
      name: 'Service',
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
  },


  /** Backend Route */
  {
    path: '/backend',
    component: BackendLayout,
    children: [{
      path: '',
      name: 'Dashboard',
      component: Dashboard,
    }],
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/backend',
    component: BackendLayout,
    children: [{
      path: 'products',
      name: 'Products',
      component: Products,
      meta: {
        title: 'Products'
      }
    }]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router