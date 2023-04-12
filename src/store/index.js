import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import ui from './ui'

export default createStore({
  modules: {
    ui
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
})
