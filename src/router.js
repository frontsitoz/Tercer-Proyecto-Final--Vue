import Vue from 'vue';
import router from 'vue-router'
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';
import AdminComponent from './components/AdminComponent';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import CartComponent from './components/CartComponent';

Vue.use(router);

// ! Definimos rutas
export default new router({
    // ! El mode: es guardar un historial en el navegador
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login',component: LoginComponent, props: true },
        { path: '/register', component: RegisterComponent, props: true },
        { path: '/home', component: HomeComponent, props: true },
        { path: '/home/:id', component: HomeComponent, props: true },
        { path: '/admin', component: AdminComponent, props: true },
        { path: '/admin/create', component: CreateComponent, props: true, name: 'create' },
        { path: '/admin/edit/:id', component: EditComponent, props: true },
        { path: '/cart', component: CartComponent, props: true },
        { path: '/cart/:id', component: CartComponent, props: true },
    ]
})