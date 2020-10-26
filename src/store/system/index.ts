import { createStore, createNamespacedHelpers } from 'vuex';
import getter from "./getter";
import state from "./state";
import mutation from "./mutation";

let tem = createNamespacedHelpers('system');
debugger
export default createStore({
    getters: getter,
    state: state,
    mutations: mutation
})


