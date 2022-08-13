import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  meta: {
    title: '主页'
  },
  // component: HelloWorld
  component: () => import('../components/HelloWorld.vue')
},
{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录'
  },
  // component: HelloWorld
  component: () => import('../components/Login.vue'),
  props: true
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
