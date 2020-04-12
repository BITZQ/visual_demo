import Vue from 'vue'
import Router from 'vue-router'
import migrate from '@/components/migrate'
import bar from '@/components/bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/migrateGraph',
      name: 'migrateGraph',
      component: migrate
    },
    {
      path: '/barGraph',
      name: 'barGraph',
      component: bar
    }
  ]
})
