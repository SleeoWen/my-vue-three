export default {
    path: '/',
    name: 'main',
    // redirect: { name: 'dashboard' },
    component: () => import(/* webpackChunkName: "main-chunk" */ '/@/views/main.vue')
};
