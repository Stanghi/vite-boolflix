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
    <div v-if="store.isLoaded">
        <!-- MOVIE -->
        <div class="movie" v-if="store.resultsFoundMovie.length > 0">
            <h3>
                Movies
                <span
                    >{{ store.numberFoundMovie }} founds in {{ store.numberPageMovie }} pages</span
                >
            </h3>
            <div v-if="store.resultsFoundMovie.length > 0" class="movie-tv-area">
                <div v-for="(el, index) in store.resultsFoundMovie" :key="index" class="ms-card">
                    <AppCard :card="store.resultsFoundMovie[index]" />
                </div>
            </div>

            <div class="btn-area">
                <button @click="$emit('prevPageMovie')" :class="store.pageMovie < 2 && 'disabled'">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <p>Page {{ store.pageMovie }}</p>
                <button
                    @click="$emit('nextPageMovie')"
                    v-if="store.numberPageMovie > 1"
                    :class="store.pageMovie === store.numberPageMovie && 'disabled'"
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>

        <!-- TV -->
        <div class="tv" v-if="store.resultsFoundTv.length > 0">
            <h3>
                Series
                <span>{{ store.numberFoundTv }} founds in {{ store.numberPageTv }} pages</span>
            </h3>
            <div v-if="store.resultsFoundTv.length > 0" class="movie-tv-area">
                <div v-for="(el, index) in store.resultsFoundTv" :key="index" class="ms-card">
                    <AppCard :card="store.resultsFoundTv[index]" />
                </div>
            </div>

            <div class="btn-area">
                <button @click="$emit('prevPageTv')" :class="store.pageTv < 2 && 'disabled'">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <p>Page {{ store.pageTv }}</p>
                <button
                    @click="$emit('nextPageTv')"
                    v-if="store.numberPageTv > 1"
                    :class="store.pageTv === store.numberPageTv && 'disabled'"
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
    <AppLoading v-else />
</template>

<style lang="scss" scoped>
.ms-card {
    width: calc(100% / 10 - 30px);
    height: 250px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin: 15px;
    box-shadow: 0px 0px 35px 1px rgba(255, 255, 255, 0.1);

    &:hover {
        scale: 1.5;
        z-index: 2;
    }
}

.btn-area {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        border: none;
        margin: 5px;
        width: 80px;
        height: 35px;
        border-radius: 30px;
        box-shadow: 0px 0px 35px 1px rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(13.8px);
        -webkit-backdrop-filter: blur(13.8px);
        color: white;
        background-color: rgba(58, 56, 56, 0.3);

        &:hover {
            background-color: rgba(58, 56, 56, 0.5);
        }
    }

    p {
        margin: 10px;
    }

    .disabled {
        display: none;
    }
}

.movie-tv-area {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.movie,
.tv {
    padding: 0 100px;

    h3 {
        text-transform: uppercase;

        span {
            font-size: 1rem;
            margin-left: 10px;
            text-transform: none;
        }
    }
}

.movie {
    padding-top: 100px;
    margin-bottom: 30px;
}

.tv {
    margin-bottom: 100px;
}
</style>
