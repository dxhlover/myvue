import * as types from '@/store/types';

const state = {
    // 全局弹窗的显示和隐藏
    dialog: false,
}

const getters = {
    dialog: state => state.dialog,
}

const actions = {
    DIALOG({ commit }, res) {
        commit(types.DIALOG, res);
    }
}

const mutations = {
    [types.DIALOG](state, res) {
        state.dialog = res;
    },
    // 关闭原生容器方法的调用
    [types.APP_CLOSE_PAGE] (state, res) {
        let ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.jsCall.postMessage({jsAction:'closePage',jsData:{}});
        }else if (/android/.test(ua)) {
            window.jsAction.closePage();
        } 
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
