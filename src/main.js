import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});

// 配置路由
router.map({
  '/goods': {
    name: 'goods',
    title: '饿了吗-商品',
    component: goods
  },
  '/ratings': {
    name: 'ratings',
    title: '饿了吗-评论',
    component: ratings
  },
  '/seller': {
    name: 'seller',
    title: '饿了吗-商家',
    component: seller
  }
});

router.afterEach(function (transition) {
  if (transition.to.title) {
    document.title = transition.to.title;
  }
});

// 启动路由
router.start(app, 'app');

// 默认打开goods
router.go('/goods');
