import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true, //para que no se confunda con el store principal
  getters,
  mutations,
  actions,
  state
}
