import {} from 'vuex';

let mutation: any = {
    getUserInfo(state: any, name: any) {
        state.userInfo.name = name
    }
}
export default mutation;
