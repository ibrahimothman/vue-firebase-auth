import axios from 'axios'

const state = {
    secrets: [],
}

const actions = {
    async getSecrets({ commit }, idToken) {
       try {
            const { data: secrets } = await axios.get('http://localhost:3000/data', {
                headers: {
                    authorization: `Bearer ${idToken}`
                }
            })
            commit('setSecrets', secrets)
       } catch (error) {
           console.error(error);
       }
    }
}

const mutations = {
    setSecrets: (state, secrets) => {state.secrets = secrets}
}

export default {
    namespaced: true,
    mutations,
    actions,
    state,
}