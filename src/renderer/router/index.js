import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/All'
import Index from '@/components/Index'
import RecVideo from '@/components/index/RecVideo'
import ChoiceVideo from '@/components/index/ChoiceVideo'
import SoftVideo from '@/components/index/SoftVideo'
import FontUi from '@/components/index/FontUi'
import CourseC4D from '@/components/index/CourseC4D'
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
      path: '/components/Index',
      name: 'Index',
      component: Index
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
      path: '/components/index/FontUi',
      name: 'FontUi',
      component: FontUi
    },
    {
      path: '/components/index/UiDesign',
      name: 'UiDesign',
      component: UiDesign
    },
    {
      path: '/components/index/CourseC4D',
      name: 'CourseC4D',
      component: CourseC4D
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
