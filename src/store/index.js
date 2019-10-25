import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex:'',
    list:[],
    text:''
  },
  mutations: {
    addList(state,obj){
      state.list.push(obj);
    },
    addSex(state,obj){
      state.sex=obj;
    },
    addText(state,obj) {
      state.text = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
