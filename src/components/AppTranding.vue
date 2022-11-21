<script>
import { store } from '../data/store';
import AppLoading from './AppLoading.vue';
export default {
    name: 'AppTranding',
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
    <h3>Di tendenza</h3>
    <ul v-for="(el, index) in store.resultsTranding" :key="index">
        <li v-if="el.title">
            <span>FILM</span><br />
            <strong>title = </strong>
            {{ el.title }}
        </li>
        <li v-else>
            <span>TV</span><br />
            <strong>title = </strong>
            {{ el.name }}
        </li>

        <li v-if="el.original_title"><strong>original_title = </strong>{{ el.original_title }}</li>
        <li v-else><strong>original_title = </strong>{{ el.original_name }}</li>

        <li>
            <span v-if="el.original_language === 'en'" class="fi fi-us"></span>
            <span v-else-if="el.original_language === 'ja'" class="fi fi-jp"></span>
            <span v-else-if="el.original_language" :class="'fi fi-' + el.original_language"></span>
            <span v-else class="fi fi-xx"></span>
        </li>
        <li><strong>vote_average = </strong>{{ el.vote_average }}</li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    padding: 10px;
    border: 1px solid black;
}
h2,
h3 {
    text-align: center;
}
p {
    display: inline-block;
}
</style>
