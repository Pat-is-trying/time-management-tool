import Dashboard from "../views/Dashboard";
import OpenItems from "../views/OpenItems";
import VueRouter from "vue-router";

const router = new VueRouter({
    routes: [
        {
            path: '/dashboard',
            component: Dashboard,
        },
        {
            path: '/open-items',
            component: OpenItems,
        },
    ]
});

export default router;