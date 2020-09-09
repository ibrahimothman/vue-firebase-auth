<template>
  <div>
    Looged in
    <span>{{ isLoggedIn }}</span>
    <div>
      <button v-if="isLoggedIn" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('auth', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('auth', ['logout'],)
  },
}
</script>

