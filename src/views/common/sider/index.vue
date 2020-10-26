<template>
    <div style="width: 256px">
        <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
            <MenuUnfoldOutlined v-if="collapsed" />
            <MenuFoldOutlined v-else />
        </a-button>
        <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="dark" :inline-collapsed="collapsed">
            <a-menu-item key="1">
                <PieChartOutlined />
                <span>Option 1</span>
            </a-menu-item>
            <a-menu-item key="2">
                <DesktopOutlined />
                <span>Option 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <InboxOutlined />
                <span>Option 3</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template v-slot:title>
                    <span><MailOutlined /><span>Navigation One</span></span>
                </template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <template v-slot:title>
                    <span><AppstoreOutlined /><span>Navigation Two</span></span>
                </template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11"> Option 11 </a-menu-item>
                    <a-menu-item key="12"> Option 12 </a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
export default {
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
        return {
            state,
            add,
            min,
            update,
        };
    },
};
</script>

<style scoped></style>
