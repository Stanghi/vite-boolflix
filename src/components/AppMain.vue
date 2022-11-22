<script>
import { store } from '../data/store';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
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
        <!-- MOVIE -->
        <div v-if="store.resultsFoundMovie.length > 0">
            <h3>Movie: {{ store.numberFoundMovie }} found in {{ store.numberPageMovie }} pag</h3>

            <button @click="$emit('prevPageMovie')" :disabled="store.pageMovie < 2">
                Prev page
            </button>
            <button @click="$emit('nextPageMovie')">Next page</button>
            <p>Page: {{ store.pageMovie }}</p>

            <ul v-for="(el, index) in store.resultsFoundMovie" :key="index">
                <img
                    :src="'https://image.tmdb.org/t/p/w92/' + el.poster_path"
                    :alt="el.title || el.name"
                />
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
                <li>
                    <p v-for="(x, index) in Math.ceil(el.vote_average / 2)" :key="index">
                        <i class="fa-solid fa-star"></i>
                    </p>
                </li>
            </ul>
        </div>

        <!-- TV -->
        <div v-if="store.resultsFoundTv.length > 0">
            <h3>Series: {{ store.numberFoundTv }} found in {{ store.numberPageTv }} pag</h3>

            <button @click="$emit('prevPageTv')" :disabled="store.pageTv < 2">Prev page</button>
            <button @click="$emit('nextPageTv')">Next page</button>
            <p>Page: {{ store.pageTv }}</p>

            <ul v-for="(el, index) in store.resultsFoundTv" :key="index">
                <img
                    :src="'https://image.tmdb.org/t/p/w92/' + el.poster_path"
                    :alt="el.title || el.name"
                />
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
                <li>
                    <p v-for="(x, index) in Math.ceil(el.vote_average / 2)" :key="index">
                        <i class="fa-solid fa-star"></i>
                    </p>
                </li>
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
