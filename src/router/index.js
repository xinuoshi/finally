import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Forget from '@/components/forget/Forget'
import NavMenu from '@/components/main/Navmenu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/NavMenu',
      name: 'NavMenu',
      component: NavMenu
    }
  ]
})
