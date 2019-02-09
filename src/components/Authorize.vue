<template>
    <button class="btn" v-on:click="authorize">Authorize me please!</button>
</template>

<script>
import { store } from '../store.js'

export default {
    name: "Authorize",
    methods: {
        authorize() {
            store.authorizeAction()
        }
    }
}
</script>

<style scoped>
    .btn {
        background: olive;
        color: aliceblue;
        padding: 8px 5px;
    }
</style>
