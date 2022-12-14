import { createRouter, createWebHistory, routerKey } from "vue-router";

const routes = [{
    path: "",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
        title: "首頁 - 繪師集",
        breadcrumb: [{
            name: '首頁'
        }]
    },
}]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;