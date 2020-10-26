import { Router, createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Mutation } from 'vuex';
import main from './map/main';

// @ts-ignore
export declare interface IVueRouterConfig extends RouteRecordRaw{
    icon?: string; // 路由icon（iconfont的className）
    sort?: number; // 路由排序
    hasSaved?: boolean; // 是否被收藏
    isRecord?: boolean; // 是否记录访问记录
    text?: string; // 路由显示文本
    parentName?: string; // 父级路由名称
    hideSubMenu?: boolean; // 是否隐藏子菜单
    isInvented?: boolean; // 是否是虚拟路径（没有实际业务，在子菜单中不可选中）
    parent?: IVueRouterConfig; // 父级路由配置（不可配置，自动生成）
    hide?: boolean; // 是否在菜单中显示（默认为false）
    isMainModule?: boolean; // 是否是主要模块目录（不可配置，自动生成）
    inProductList?: boolean; // 是否在产品列表中显示（不可配置，自动生成）
    path: string;
    redirect?: any;
    children?: RouteRecordRaw[];
    alias?: string | string[];
    name?: any;
    beforeEnter?: any;
    meta?: Record<string | number | symbol, any>;
}
// 在 Vue-router新版本中，需要使用createRouter来创建路由
const routerHistory = createWebHistory();
class RouterBuilder {
    constructor() {
        this.routerList = [main];

        this.router = createRouter({
            // 指定路由的模式,此处使用的是hash模式
            history: routerHistory,
            // 路由地址
            routes: this.formatRouters() as any,
        });

    }
    // Vue路由实例
    public router: any;
    private routerList: any[] = [];
    // 格式化路由配置项
    private formatRouters() {
        const result: IVueRouterConfig[] = [];
        // 按照路由sort从小到大排序，默认sort为0
        this.routerList.sort((a, b) => {
            return Number(a.sort || 0) - Number(b.sort || 0) > 0 || a.hide ? 1 : -1;
        });
        this.routerList.forEach((router: IVueRouterConfig) => {
            // 如果没有parentName添加到根路由中
            if (!router.parentName) {
                const hasChildren = this.routerList.some(item => item.parentName === router.name);
                if (hasChildren) {
                    // 有子路由则增加children
                    router.children = [];
                    this.formatChildrenRouters(router.children, router);
                }
                // store.commit('addRouterConfig', router);
                result.push(router);
            }
        });
        return result;
    }

    // 添加子路由
    private formatChildrenRouters(result: IVueRouterConfig[], parent: IVueRouterConfig) {
        this.routerList.forEach(router => {
            if (router.parentName === parent.name) {
                router.isMainModule = parent.name === 'main';
                router.inProductList = parent.isMainModule;
                router.parent = parent;
                result.push(router);
            }
        });
        result.forEach(router => {
            const hasChildren = this.routerList.some(item => item.parentName === router.name);
            if (hasChildren) {
                router.children = [];
                this.formatChildrenRouters(router.children, router);
            }
        });
    }
}
const router = createRouter({
    // 指定路由的模式,此处使用的是hash模式
    history: routerHistory,
    // 路由地址
    routes: [
        {
            path: '/',
            // 必须添加.vue后缀
            // redirect: {
            //    path:'/vueTwo'
            // },
            component: () => import('../views/main.vue'),
        },
    ],
});
export default new RouterBuilder().router;
// export default router;
