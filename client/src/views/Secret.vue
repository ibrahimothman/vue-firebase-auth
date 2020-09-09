<template>
    <div>Secrets
        <div class="error" v-if="error">{{ error.message }}</div>
        <h1 v-for="secret in secrets" :key="secret.char_id">{{ secret.name }}</h1>
    </div>
</template>

<script>
import { mapActions, mapState} from "vuex";
import firebase from '../firebase'
export default {
    data(){
        return {
            error: '',
        }
    },
    computed: {
        ...mapState('secrets', ['secrets']),
    },

    async mounted() {
        // get token
        try {
            const token = await firebase.auth().currentUser.getIdToken();
            await this.getSecrets(token)
        } catch ({ code, message }) {
            console.log(code, message);
            this.error = {code, message}
        }


    },
    methods: {
        ...mapActions('secrets', ['getSecrets']),
    }

}
</script>

<style scoped>
    .error {
        color: red;
        font-size: 18px;
    }
</style>
