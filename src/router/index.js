import Vue from 'vue'
import Router from 'vue-router'

import Info from '../components/Info';
import ServicePoint from '../components/ServicePoint';

Vue.use(Router);

const routes = [
  { path: '/', redirect: { name: 'servicePointTable' } },
  { path: '/', component: ServicePoint, name: 'servicePointTable' },
  { path: '/info/:id', component: Info, name: 'infoDetails' },
];

export default new Router({
  mode: 'history',
  routes, 
});
