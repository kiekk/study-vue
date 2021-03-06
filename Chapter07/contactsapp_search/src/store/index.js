import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        contacts: []
    },
    mutations: {
        [Constant.SEARCH_CONTACT]: (state, paylad) => {
            state.contacts = paylad.contacts
        }
    },
    actions: {
        [Constant.SEARCH_CONTACT]: (store, payload) => {
                axios.get(Constant.BASE_URL + payload.name)
                    .then((response) => {
                        store.commit(Constant.SEARCH_CONTACT, { contacts: response.data })
                    })
            }
            /*
                async ~ await
                async [Constant.SEARCH_CONTACT] (store, payload) {
                    var response = await axios.get(Constant.BASE_URL + payload.name)
                    store.commit(Constant.SEARCH_CONTACT, { contacts: response.data })
                }
            */
    }
})

export default store