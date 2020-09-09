<template>
    <div>
        <div v-if="error" class="error">{{ error.message }}</div>
        <form @submit.prevent="submit">
            <div class="email">
                <input type="text" v-model="email" placeholder="Email">
            </div>

            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>

            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            error: '',
            email: '',
            password: '',
        }
    },
    mounted() {
        if (this.isLoggedIn) {
            this.$router.push({name: 'secrets'})
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        ...mapState('auth',['isLoggedIn']),
        async submit() {
            await this.login({email: this.email, password: this.password})
            this.$router.replace({name: 'secrets'})
        }
    }
}
</script>

<style scoped>

    .error {
        color: red;
        font-size: 18px;
    }
    input {
        width: 400px;
        margin: 20px;
        padding: 10px;
        font-size: 21px;
    }

    button {
        width: 400px;
        height: 75px;
        font-size: 100%;
    }
</style>
