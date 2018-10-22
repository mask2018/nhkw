import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import PhoneLogin from '@/components/login/PhoneLogin'
import PhoneRegister from '@/components/login/PhoneRegister'
import ChildIndex from '@/components/child/ChildIndex'
import All from '@/components/All'
import Load from '@/components/Load'
import Index from '@/components/Index'
import Head from '@/components/Head'
import NewVideo from '@/components/index/NewVideo'
import RecVideo from '@/components/index/RecVideo'
import ChoiceVideo from '@/components/index/ChoiceVideo'
import SoftVideo from '@/components/index/SoftVideo'
import Photography from '@/components/index/Photography'
import Course from '@/components/index/Course'
import UiDesign from '@/components/index/UiDesign'
import Soft from '@/components/Soft'
import Uidck from '@/components/Uidck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All',
      component: All
    },
    {
      path: '/components/login/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/components/login/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/components/All',
      name: 'All',
      component: All
    },
    {
      path: '/components/login/PhoneLogin',
      name: 'PhoneLogin',
      component: PhoneLogin
    },
    {
      path: '/components/login/PhoneRegister',
      name: 'PhoneRegister',
      component: PhoneRegister
    },
    {
      path: '/components/child/ChildIndex/:id/',
      name: 'ChildIndex',
      component: ChildIndex
    },
    {
      path: '/components/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/components/Head',
      name: 'Head',
      component: Head
    },
    {
      path: '/components/Load',
      name: 'Load',
      component: Load
    },
    {
      path: '/components/index/NewVideo',
      name: 'NewVideo',
      component: NewVideo
    },
    {
      path: '/components/index/RecVideo',
      name: 'RecVideo',
      component: RecVideo
    },
    {
      path: '/components/index/ChoiceVideo',
      name: 'ChoiceVideo',
      component: ChoiceVideo
    },
    {
      path: '/components/index/SoftVideo',
      name: 'SoftVideo',
      component: SoftVideo
    },
    {
      path: '/components/index/Photography',
      name: 'Photography',
      component: Photography
    },
    {
      path: '/components/index/UiDesign',
      name: 'UiDesign',
      component: UiDesign
    },
    {
      path: '/components/index/Course',
      name: 'Course',
      component: Course
    },
    {
      path: '/components/Soft',
      name: 'Soft',
      component: Soft
    },
    {
      path: '/components/Uidck',
      name: 'Uidck',
      component: Uidck
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
