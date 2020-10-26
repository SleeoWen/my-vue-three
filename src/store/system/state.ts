import { createStore } from 'vuex';

interface State {
    userName: string;
}

export default createStore({
    state(): any {
        return {
            userInfo: {
                name: 'renkq'
            }
        };
    },
});
