import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('../views/index.vue')
},
// vue-router  子路由返回父路由bug
// {
//   path: '/project/:id',
//   component: () => import('../views/project.vue'),
//   children: [{
//     path: '',
//     component: () => import('../views/project/index.vue')
//   }, {
//     path: 'details',
//     component: () => import('../views/project/details.vue')
//   }]
// },
{
  path: '/project/:id',
  component: () => import('../views/project/index.vue')
}, {
  path: '/project/:id/details',
  component: () => import('../views/project/details.vue')
}, {
  path: '/:catchAll(.*)',
  redirect: '/'
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
