import Main from '../components/Main'

const routes = [
  {
    path: '/main',
    component: Main,
    name: 'main'
  },
  {
    path: '/',
    redirect: '/main',
  }
];

export default routes;
