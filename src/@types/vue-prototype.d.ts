/*
 * @Description: Vue上的挂载对象的声明文件
 * @Author: wenyuhan
 * @Date: 2020-07-23 10:43:06
 * @LastEditTime: 2020-08-03 16:19:12
 * @LastEditors: wenyuhan
 */

import { Store } from 'vuex';
import VueRouter from 'vue-router';
import { Route } from 'vue-router';

declare module 'vue/types/vue' {
    interface Vue {
        $store: Store<any>;
        $router: VueRouter;
        $route: Route;
    }
}
