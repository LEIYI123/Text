import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: About,
    children: [
      {
        path: 'home',
        component: () => import('../views/Home.vue')
      }, {
        path: 'category',
        component: () => import('../views/Category.vue')
      }, {
        path: 'spec',
        component: () => import('../views/Spec.vue')
      }, {
        path: 'user',
        component: () => import('../views/User.vue')
      }, {
        path: 'role',
        component: () => import('../views/Role.vue')
      },
    ]
  }, {
    path: '/product/addUpdateProduct',
    component: About,
    children: [
      {
        path: 'add',
        component: () => import('../views/Add.vue')
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    children: [{
      path: 'index'
    }]

  }, {
    path: '/product',
    component: About,
    children: [
      {
        path: 'productList',
        component: () => import('../views/ProductList.vue')
      }, {
        path: 'addUpdateProduct/add',
        component: () => import('../views/About.vue'),
      }, {
        path: 'productDetail/:id',
        component: () => import('../views/ProductDetail.vue'),
      }, {
        path: 'addUpdateProduct/:id',
        component: () => import('../views/AddUpdateProduct.vue'),
      },
    ]
  }, {
    path: '/order',
    component: About,
    children: [
      {
        path: 'orderList',
        component: () => import('../views/OrderList.vue')
      }, {
        path: 'orderDetail/:id',
        component: () => import('../views/OrderDetail.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
})

export default router
