
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./components/pages/Home.vue');

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {path: '/', component: Home, name: 'Home', },
    ]
});

export default router;