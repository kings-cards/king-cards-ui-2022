// NAVIGATION ROUTES

import Home from '../../pages/landing';
import About from '../../pages/about';
import Blog from '../../pages/blog';
import Contact from '../../pages/contact';
import Privacy from '../../pages/privacy';
import Terms from '../../pages/terms';
import Faq from '../../pages/faq';
import HowToTade from '../../pages/how-to';
import Rates from '../../pages/rates';
import Login from '../../pages/login';
import Register from '../../pages/register';
import NotFound from '../../pages/not-found';
import AccessDenied from '../../pages/access-denied'


const routes = [
  /* COMMON ROUTES */
  {
    name: 'home',
    component: Home,
    path: '/',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'about',
    component: About,
    path: '/about',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'blog',
    component: Blog,
    path: '/blog',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'contact',
    component: Contact,
    path: '/contact',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'privacy',
    component: Privacy,
    path: '/privacy-policy',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'terms',
    component: Terms,
    path: '/terms-of-use',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'faq',
    component: Faq,
    path: '/faq',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'how-to-trade',
    component: HowToTade,
    path: '/how-to-trade',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'rates',
    component: Rates,
    path: '/rates',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'login',
    component: Login,
    path: '/login',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'register',
    component: Register,
    path: '/register',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'not-found',
    component: NotFound,
    path: '/not-found',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  },
  {
    name: 'access-denied',
    component: AccessDenied,
    path: '/access-denied',
    access: 'common',
    icon: '',
    navLink: true,
    children: []
  }
];

export default routes;
