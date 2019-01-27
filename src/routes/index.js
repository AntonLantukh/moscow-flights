import Body from '../components/Body'

const routes = [
  {
    path: '/main',
    component: Body,
    name: 'body'
  },
  {
    path: '/',
    redirect: '/main',
  }
];

export default routes;
