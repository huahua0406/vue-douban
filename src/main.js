// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//vuex
import store from './vuex/store'
//ajax
import axios from 'axios'
Vue.prototype.$http = axios
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
/*global=>全局常量 使用代理*/
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='
//路由
const routes = [{
  path : '/home',
  component : require('views/home.vue')
},{
  path : '/movie',
  component : require('views/movie.vue')
},{
  path : '/book',
  component : require('views/book.vue')
},{
	path : '/radio',
	component : require('views/radio.vue')
},{
  path : '/team',
  component : require('views/team.vue')
},{
  path : '*',
  redirect: '/home'
}];

const router = new VueRouter({
  routes
});


/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  store,
  router,
  ...App,
});
