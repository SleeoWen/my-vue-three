/*
 * @Description: 使用的三方库如果没有d.ts声明文件，可以在此处自行添加
 * @Author: wenyuhan
 * @Date: 2020-07-23 10:43:06
 * @LastEditTime: 2020-08-05 11:05:21
 * @LastEditors: wenyuhan
 */
declare module '*.vue' {
    import { Component } from "vue";
    const component: Component;
    export default component;
}