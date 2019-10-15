import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//Standar import 
import PageNotFoundPage from './pages/PageNotFound.vue'; 

//Dinamic import 

const Survey = () =>
  import('./pages/Survey.vue');
const FirstPage = () =>
  import('./pages/FirstPage.vue');
const SecondPage = () =>
  import('./pages/SecondPage.vue');

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/',
    component: Survey},
    {
    path: '/firstPage',
    component: FirstPage}, 
    {
    path: '/secondPage',
    component: SecondPage}, 
    {
    path: '*',
    component: PageNotFoundPage,
  }]
})