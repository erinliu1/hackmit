import {createRouter, createWebHistory} from 'vue-router'

import Start from '../components/start/StartPage.vue'
import Story from '../components/page/Story.vue'
import End from '../components/end/EndPage.vue'

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/story',
        name: 'Story',
        component: Story
    },
    {
        path: '/end',
        name: 'End',
        component: End
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router