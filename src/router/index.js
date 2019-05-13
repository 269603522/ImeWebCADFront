import Vue from 'vue'
import Router from 'vue-router'
import ReadingList from '@/components/ReadingList'
import HandleList from '@/components/HandleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ReadingList',
      name: 'ReadingList',
      component: ReadingList
    },
    {
      path: '/HandleList',
      name: 'HandleList',
      component: HandleList
    }
  ]
})
