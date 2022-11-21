<script>
import { store } from '../data/store';

import AppLoading from './AppLoading.vue';

export default {
    name: 'AppMain',
    components: {
        AppLoading,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <main>
        <div v-if="store.isLoaded">
            <ul v-for="(el, index) in store.resultsFound" :key="index">
                <li><strong>title = </strong>{{ el.title }}</li>
                <li><strong>original_title = </strong>{{ el.original_title }}</li>
                <li><strong>original_language = </strong>{{ el.original_language }}</li>
                <li><strong>vote_average = </strong>{{ el.vote_average }}</li>
            </ul>
        </div>
        <AppLoading v-else />
    </main>
</template>

<style lang="scss" scoped>
ul {
    padding: 10px;
    border: 1px solid black;
}
</style>
