import firebase from './firebase'
import store from './store'
import router from './router'

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const data = {
        email: user.email
      }
      store.commit('auth/setLoggedInUser', data)
      // ...
    } else {
        store.commit('auth/setLoggedInUser', null)
        router.replace({name: 'login'})

    }
  });