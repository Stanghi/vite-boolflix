<script>
import { store } from '../data/store';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import AppLoading from './AppLoading.vue';
import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',
    components: {
        AppLoading,
        AppCard,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <!-- MOVIE -->
    <div v-if="store.isLoaded">
        <div class="movie">
            <h3>Movie: {{ store.numberFoundMovie }} found in {{ store.numberPageMovie }} pag</h3>
            <button @click="$emit('prevPageMovie')" :disabled="store.pageMovie < 2">
                Prev page
            </button>
            <button @click="$emit('nextPageMovie')">Next page</button>
            <p>Page: {{ store.pageMovie }}</p>

            <div v-if="store.resultsFoundMovie.length > 0" class="movie-tv-area">
                <div v-for="(el, index) in store.resultsFoundMovie" :key="index" class="ms-card">
                    <AppCard :card="store.resultsFoundMovie[index]" />
                </div>
            </div>
        </div>

        <!-- TV -->
        <div class="tv">
            <div v-if="store.resultsFoundTv.length > 0">
                <h3>Series: {{ store.numberFoundTv }} found in {{ store.numberPageTv }} pag</h3>
                <button @click="$emit('prevPageTv')" :disabled="store.pageTv < 2">Prev page</button>
                <button @click="$emit('nextPageTv')">Next page</button>
                <p>Page: {{ store.pageTv }}</p>

                <div v-if="store.resultsFoundTv.length > 0" class="movie-tv-area">
                    <div v-for="(el, index) in store.resultsFoundTv" :key="index" class="ms-card">
                        <AppCard :card="store.resultsFoundTv[index]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppLoading v-else />
</template>

<style lang="scss" scoped>
#loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.ms-card {
    width: calc(100% / 10 - 20px);
    height: 250px;
    margin-bottom: 15px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;
    box-shadow: 0px 0px 100px 1px rgba(255, 255, 255, 0.1);

    &:hover {
        scale: 1.5;
        z-index: 2;
    }
}

.movie-tv-area {
    display: flex;
    flex-wrap: wrap;
}

.movie,
.tv {
    padding: 0 100px;
    padding-top: 100px;
}

.tv {
    margin-bottom: 100px;
}
</style>
