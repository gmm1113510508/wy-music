import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//组件引入
import Recommend from 'pages/Recommend/Recommend'
import Rank from 'pages/Rank/Rank'
import Search from 'pages/Search/Search'
import Hotsong from 'pages/Recommend/Hotsong'

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
       children:[{
         		path:'Hotsong',
         		name: 'Hotsong',
         		component:Hotsong
      }]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },   
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/',
      redirect:'/recommend'
    }
  ]
})
