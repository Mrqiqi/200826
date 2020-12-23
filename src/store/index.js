/* 
    vuex的最核心的 管理对象  store  仓库
*/

import Vue from 'vue'
import Vuex from 'vuex'

import home from './moudles/home'
import user from './moudles/user'
Vue.use(Vuex)

//向外暴露store对象
export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        home,
        user,
    }
})