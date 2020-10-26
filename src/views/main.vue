<template>
    <a-layout>
        <a-layout-sider>
            <sider></sider>
        </a-layout-sider>
        <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { Vue, Options } from 'vue-class-component'
// import {onMounted} from 'vue';
import Sider from './common/sider/index.vue';

@Options({
    components: {
        Sider
    }
})
export default class Main extends Vue {

    setup() {
        // vuex4 通过 useStore 在组合API入口内声明获取全局状态实例 store
        const store = useStore();
        // 所有的状态变量都在 state 内
        const state = store.state;
        const add = () => {
            store.commit('add', {
                count: state.count + 1,
            });
        };
        const min = () => {
            store.commit('min', {
                count: state.count - 1,
            });
        };
        const update = () => {
            store.dispatch('add'); // 直接加到100
        };
        debugger;
        return {
            state,
            add,
            min,
            update,
        };
    }

};
</script>

<style scoped></style>
