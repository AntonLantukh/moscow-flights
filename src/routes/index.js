import Flights from '../components/Flights'

const routes = [
  {
    path: '/flights',
    component: Flights,
    name: 'flights'
  },
  {
    path: '/',
    redirect: '/flights',
  }
];

export default routes;
