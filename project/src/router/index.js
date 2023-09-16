import {createRouter, createWebHistory} from 'vue-router'

import StartPage from '../components/start/StartPage.vue'
import StoryPage from '../components/page/page.vue'

const routes = [
    {
        path: '/',
        name: 'Start',
        component: StartPage
    },
    {
        path: '/story',
        name: 'Story',
        component: StoryPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router