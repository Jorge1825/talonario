import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export const useUi = () => {
    const store = useStore()


    return{
        getBodyClass: computed({
            get() {
                console.log('entre a getBodyClass')
                return store.getters['ui/getBodyClass']
            },

            set(value) {
                store.commit('ui/changeBodyClass', value)
            }
        }),

        getLinkActive: computed({
            get() {
                return store.getters['ui/getLinkActive']
            },

            set(value) {
                store.commit('ui/changeLinkActive', value)
            }
        }),


        getUserAuth: computed({
            get() {
                return store.getters['ui/getUserAuth']
            },

            set(value) {
                store.commit('ui/changeUserAuth', value)
            }
        }),


        //cambiar el valor de la variable tab
        /* changeTab: (value,link) => {

            link.startsWith('http') ? window.open(link, '_blank') : router.push({ name: link })
            store.commit('ui/changeTab', value)
        }, */



        //mutaciones

        changeBodyClass: (value) => {
            store.commit('ui/changeBodyClass', value)
        },

        changeLinkActive: (value) => {
            store.commit('ui/changeLinkActive', value)
        },

        changeUserAuth: (value) => {
            store.commit('ui/changeUserAuth', value)
        }


    }
}

