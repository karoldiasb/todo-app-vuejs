import Vue from 'vue'
import App from './App.vue'
import VueMobileDetection from 'vue-mobile-detection'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(VueMobileDetection)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    items: [
      { id: 0, title: 'Complete online JavaScript course', isActive: true, isCompleted: false },
      { id: 1, title: 'Jag around the park 3x', isActive: false, isCompleted: true },
      { id: 2, title: '10 minutes meditation', isActive: false, isCompleted: false },
      { id: 3, title: 'Read for 1 hour', isActive: true, isCompleted: false },
      { id: 4, title: 'Pick up groceries', isActive: true, isCompleted: false },
      { id: 5, title: 'Complete Todo App on Frontend Mentor', isActive: true, isCompleted: true }
    ],
    isThemeLight: true,
    isFilterAll: true,
    isfilterActive: false,
    isfilterCompleted: false,
  },
  mutations: {
    resetAllFilters(state) {
      state.isFilterAll = false;
      state.isfilterActive = false;
      state.isfilterCompleted = false;
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
