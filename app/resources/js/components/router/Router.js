import Dashboard from "../views/Dashboard";
import OpenItems from "../views/OpenItems";
import Temp from "../views/Temp";
import PageNotFound from "../views/PageNotFound";

const routes = [
    {
        path: '/',
        redirect: { name: 'dashboard' }
    },
    {
        path: '*',
        redirect: { name: 'pageNotFound' }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/open-items',
        name: 'openItems',
        component: OpenItems,
    },
    {
        path: '/temp',
        name: 'temporary',
        component: Temp,
    },
    {
        path: '/page-not-found',
        name: 'pageNotFound',
        component: PageNotFound,
    },
];

export default routes;