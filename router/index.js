import { createRouter, createWebHashHistory } from 'vue-router';
import Week7 from '../src/components/Week7.vue';
import resultCard from '../src/components/searchCard.vue';
import Week6 from '../src/components/Week6.vue';
let history = createWebHashHistory();
let routes = [
  {
    path: '/',
    name: 'resultCard',
    component: resultCard,
  },
  {
    path: '/week6',
    name: 'week6',
    component: Week6,
  },
  {
    path: '/week7',
    name: 'week7',
    component: Week7,
  },
];

export default createRouter({ history, routes })