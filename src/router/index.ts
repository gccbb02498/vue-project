import { createRouter, createWebHashHistory, createWebHistory, routerKey } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    {
        path: "/class/:name",
        name: "Class",
        component: () => import(/* webpackChunkName: "home" */ "../views/Class.vue"),
    },
    {
        path: "/book/:id",
        name: "Book",
        component: () => import(/* webpackChunkName: "Book" */ "../views/Book.vue"),
    },
    {
        path: "/404",
        component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
    }
    // {
    //     path: "/:pathMatch(.*)",
    //     redirect: '/404'
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;