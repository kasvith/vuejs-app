import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'
import Home from '@/components/Management/home'
import Vehicle from '@/components/Management/vehicle'
import Driver from '@/components/Management/driver'
import Login from '@/components/MainPage/login'
import Signup from '@/components/MainPage/Signup'
import About from '@/components/MainPage/about'
import Toolbar1 from '@/components/toolbar1'
import Details from '@/components/Management/details'
import Income_chart from '@/components/Management/charts/income_chart'
import Profit_chart from '@/components/Management/charts/profit_chart'
import Fuel_chart from '@/components/Management/charts/fuel_chart'
import Map from '@/components/map'
import Odometer from '@/components/Management/odometer'
import Settings from '@/components/Management/settings'
import TimeTable from '@/components/timetable'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/vehicle',
      name: 'Vehicle',
      component: Vehicle
    },
    {
      path: '/driver',
      name: 'Driver',
      component: Driver
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path:'',
      name: 'About',
      component: About
    },
    {
      path:'',
      name: 'Toolbar1',
      component: Toolbar1
    },
    {
      path:'/details',
      name: 'Details',
      component: Details
    },
    {
      path:'/income',
      name: 'Income_chart',
      component: Income_chart
    },
    {
      path:'/profit',
      name: 'Profit_chart',
      component: Profit_chart
    },
    {
      path:'/fuel',
      name: 'Fuel_chart',
      component: Fuel_chart
    },
    {
      path:'/map',
      name: 'Map',
      component: Map
    },
    {
      path:'/odo',
      name: 'Odometer',
      component: Odometer
    },
    {
      path:'/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path:'/timetable',
      name: 'TimeTable',
      component: TimeTable
    },
  ],
  mode:'history'
})
