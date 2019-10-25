import Vue from 'vue'
import VueRouter from 'vue-router'
import step1 from '../views/step1.vue'
import step2 from '../views/step2.vue'
import step3 from '../views/step3.vue'
import success from '../views/success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/step1',
    name: 'step1',
    component: step1
  },
  {
    path: '/step2',
    name: 'step2',
    component: step2
  },
  {
    path: '/step3',
    name: 'step3',
    component: step3
  },
  {
    path: '/success',
    name: 'success',
    component: success
  }
]

const router = new VueRouter({
  routes
})

export default router
