import { createRouter, createWebHashHistory , createWebHistory } from 'vue-router';

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
    meta: {
      title: '捷匠專業汽車美容 - 淡水旗艦店',
      keywords: '淡水汽車美容, 淡水洗車',
      description: '淡水汽車美容最頂的拉'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '捷匠專業汽車美容 - 關於捷匠',
      keywords: '捷匠汽車美容, 關於捷匠',
      description: '了解捷匠專業汽車美容的服务和历史'
    }
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
    meta: {
      title: '捷匠專業汽車美容 - 项目展示',
      keywords: '汽車项目, 汽車美容案例',
      description: '查看捷匠汽車美容的精选项目'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: '捷匠專業汽車美容 - 服务列表',
      keywords: '汽車美容服务, 高品质汽車保养',
      description: '探索捷匠提供的各种汽車美容服务'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: '捷匠專業汽車美容 - 联系方式',
      keywords: '联系捷匠, 汽車美容联系',
      description: '如何联系到捷匠專業汽車美容'
    }
  },
];


const router = createRouter({
  // history: createWebHashHistory('/JJWEB/'),
  history: createWebHistory('/JJWEB/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const defaultTitle = '捷匠專業汽車美容';
  const defaultDescription = '提供最专业的汽车美容服务。';
  const defaultKeywords = '汽车美容, 淡水, 洗车';

  document.title = to.meta.title || defaultTitle;
  updateMeta('description', to.meta.description || defaultDescription);
  updateMeta('keywords', to.meta.keywords || defaultKeywords);

  next();
});

function updateMeta(name, content) {
  let meta = document.head.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export default router;
