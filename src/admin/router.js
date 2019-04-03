import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import admin from './components/admin.vue';
import reviews from './components/reviews.vue';
import skills from './components/skills.vue';
import works from './components/works.vue';


const routes = [
  {
    path: '/admin/skills',
    component: skills,
    name: 'skills'
  },
  {
    path: '/admin/reviews',
    component: reviews,
    name: 'reviews'
  },
  {
    path: '/admin/works',
    component: works,
    name: 'works'
  },
  {
    path: '/administrator',
    component: admin
  }
];

export default new VueRouter({ routes, mode: 'history' });