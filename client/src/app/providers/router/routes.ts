import MainLayout from "@shared/ui/layout/TheMainLayout.vue";
import {RouteRecordRaw} from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/:pathMatch(.*)*",
        redirect: "/profile"
    },
    {
        path: '/login',
        component: () => import("@/pages/auth/TheLoginView.vue")
    },
    {
        path: '/profile',
        component: () => import('@/pages/profile/TheProfileView.vue'),
        meta: {
            layout: MainLayout,
            menuItemKey: "profile"
        }
    },
    {
        path: "/process",
        component: () => import("@/pages/process/TheProcessView.vue"),
        meta: {
            layout: MainLayout,
            menuItemKey: "process"
        }
    },
    {
        path: "/planned",
        component: () => import("@/pages/planned/ThePlanningView.vue"),
        meta: {
            layout: MainLayout,
            menuItemKey: "planned"
        }
    }
]