import firebase from '../firebase'

const state = {
    user: null,
    isLoggedIn: false,
    idToken: null,
}
const getters = {
    isLoggedIn: (state) => state.isLoggedIn,
}
const actions = {
    async register(_, { email, password }) {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(res);
        } catch ({ code, message }) {
            console.error(code, message);
        }

    },
    async login(_, { email, password }) {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch ({ code, message }) {
            console.error(code, message);
        }

    },

    async getIdToken({ commit }) {
        try {
            const token = await firebase.auth().currentUser.getIdToken();
            console.log(token);
            commit('setIdToken', token)
        } catch ({ code, message }) {
            console.error(code, message);
        }

    },

    async logout() {
        try {
            const res = await firebase.auth().signOut();
            console.log(res);
        } catch ({ code, message }) {
            console.error(code, message);
        }

    }
}

const mutations = {
    setLoggedInUser(_, data) {
        state.user = data
        state.isLoggedIn = !! data

    },

    setIdToken: (state, token) => {state.idToken = token}
}

export default {
    namespaced: true,
    actions,
    state,
    mutations,
    getters,
}