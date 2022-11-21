<script>
import { store } from '../data/store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <header>
        <input v-model.trim="store.inputSearch" @keyup.enter="$emit('startSearch')" type="text" placeholder="Search" />

        <button @click="$emit('startSearch')">Search</button>
        <span>{{ store.resultsFound.length }}</span>

        <button @click="$emit('prevPage')" v-if="store.page > 1">Prev page</button>
        <button @click="$emit('nextPage')">Next page</button>
        <button @click="$emit('reset')">Reset</button>
        <span>{{ store.page }}</span>
    </header>
</template>

<style lang="scss" scoped></style>
