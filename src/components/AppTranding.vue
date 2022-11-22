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
    <div v-if="store.isLoaded">
        <ul v-for="(el, index) in store.resultsTranding" :key="index">
            <img
                :src="'https://image.tmdb.org/t/p/w300/' + el.backdrop_path"
                :alt="el.title || el.name"
            />
            <li><strong>title = </strong>{{ el.title || el.name }}</li>
            <li><strong>original_title = </strong>{{ el.original_title || el.original_name }}</li>
            <li>
                <span v-if="el.original_language === 'en'" class="fi fi-us"></span>
                <span v-else-if="el.original_language === 'ja'" class="fi fi-jp"></span>
                <span
                    v-else-if="el.original_language"
                    :class="'fi fi-' + el.original_language"
                ></span>
                <span v-else class="fi fi-xx"></span>
            </li>
            <li>
                <p v-for="(x, index) in Math.ceil(el.vote_average / 2)" :key="index">
                    <i class="fa-solid fa-star"></i>
                </p>
            </li>
        </ul>
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
</style>
