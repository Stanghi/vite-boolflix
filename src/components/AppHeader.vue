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
        <input
            v-model.trim="store.inputSearch"
            @keyup.enter="$emit('startSearch')"
            type="text"
            placeholder="Search"
        />

        <button @click="$emit('startSearch')">Search</button>
        <button @click="$emit('reset')">Reset</button>
    </header>
</template>

<style lang="scss" scoped></style>
