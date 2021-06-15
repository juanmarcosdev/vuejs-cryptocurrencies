import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vuejs-cryptocurrencies/',
      name: 'home',
      component: Home
    },
    {
      path: '/vuejs-cryptocurrencies/about',
      name: 'about',
      component: About
    },
    {
      path: '/vuejs-cryptocurrencies/coin/:id',
      name: 'coin-detail',
      component: CoinDetail
    },
    {
      path: '/vuejs-cryptocurrencies/error',
      name: 'Error',
      component: Error
    }
  ]
})
