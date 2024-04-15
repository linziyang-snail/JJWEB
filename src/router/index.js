import { createRouter, createWebHashHistory } from 'vue-router';

// 使用动态导入来定义路由组件
const Home = () => import(/* webpackChunkName: "home" */'../views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */'../views/About.vue');
const Services = () => import(/* webpackChunkName: "services" */'../views/Services.vue');
const Project = () => import(/* webpackChunkName: "project" */'../views/Project.vue');
const Contact = () => import(/* webpackChunkName: "contact" */'../views/Contact.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory('/JJWEB/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
