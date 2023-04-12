import { ref,computed } from 'vue';

import Home from '../views/Home.vue';
import Informes from '../views/Informes.vue';
import Login from '../views/Login.vue';
import PageNotFound from '../views/PageNotFound.vue';

/* //composables
import { useUi } from "../composables/useUI.js";

const { getUserAuth } = useUi()

const userAuth = ref(getUserAuth) */


//usar la variable userAuth para verficar si el usuario esta logueado, de ser asi, redireccionar a la vista solcitada de lo contrario redireccionar a la vista de login
// beforeEnter: (to, from, next) => { userAuth.value ? next() : next('/') }

export const routes= [

    { path: '/', component: Login},
    { path: '/home', component: Home, },
    { path: '/informes', component: Informes},
    { path: '/:pathMatch(.*)*', component: PageNotFound }
    
];