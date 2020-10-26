/*
 * @Description: tsx的声明文件，可以在项目中使用tsx语法开发
 * @Author: wenyuhan
 * @Date: 2020-07-23 10:43:06
 * @LastEditTime: 2020-07-23 10:45:00
 * @LastEditors: wenyuhan
 */ 
import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {
        }

        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {
        }

        interface IntrinsicElements {
            [elem: string]: any;
        }
    } 
}
