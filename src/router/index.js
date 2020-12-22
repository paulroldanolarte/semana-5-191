import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Servicio1',
    name: 'Servicio1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Servicio1" */ '../views/Servicio1.vue')
  },
  {
    path: '/Servicio2',
    name: 'Servicio2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Servicio2" */ '../views/Servicio2.vue')
  },
  {
    path: '/Servicio3',
    name: 'Servicio3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Servicio3" */ '../views/Servicio3.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/controlador',
    name: 'Controlador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Controlador" */ '../views/Controlador.vue')
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: () => import(/* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
    meta:{
      auth:true
    }
  },
  {
    path: '/articulo',
    name: 'Articulo',
    component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
    meta:{
      auth:true
    }
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "categoria" */ '../views/Usuario.vue'),
    meta:{
      auth:true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// prueba router 

router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('jwt')===null){
      next({
        path:'/'
      })
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
