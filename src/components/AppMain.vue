<script>
import { store } from '../data/store';
import '/node_modules/flag-icons/css/flag-icons.min.css';
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
    <hr />
    <div v-if="store.isLoaded">
        <div>
            <h3>{{ store.numberFound }} found</h3>

            <button @click="$emit('prevPage')" :disabled="store.page < 2">Prev page</button>
            <button @click="$emit('nextPage')">Next page</button>

            <p>Page: {{ store.page }}</p>
            <ul v-for="(el, index) in store.resultsFound" :key="index">
                <img :src="'https://image.tmdb.org/t/p/w92/' + el.poster_path" />
                <li><strong>title = </strong>{{ el.title || el.name }}</li>
                <li>
                    <strong>original_title = </strong>{{ el.original_title || el.original_name }}
                </li>
                <li>
                    <span v-if="el.original_language === 'en'" class="fi fi-us"></span>
                    <span v-else-if="el.original_language === 'ja'" class="fi fi-jp"></span>
                    <span
                        v-else-if="el.original_language"
                        :class="'fi fi-' + el.original_language"
                    ></span>
                    <span v-else class="fi fi-xx"></span>
                </li>
                <li><strong>vote_average = </strong>{{ el.vote_average }}</li>
            </ul>
        </div>
    </div>
    <AppLoading v-else />
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
img {
    display: block;
}
</style>
