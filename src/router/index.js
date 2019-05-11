import Vue from 'vue'
import Router from 'vue-router'
import Dapp from '@/components/Dapp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dapp',
      component: Dapp
    }
  ]
})
