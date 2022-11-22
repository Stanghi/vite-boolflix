<script>
import axios from 'axios';
import { store } from './data/store';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppTranding from './components/AppTranding.vue';

export default {
    name: 'App',
    data() {
        return {
            store,
            apiDataMovie: '',
            apiDataTv: '',
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppTranding,
    },
    methods: {
        nextPagesMovie() {
            if (store.pageMovie < this.apiDataMovie.total_pages) {
                store.pageMovie++;
                this.getApi();
            } else {
                alert('no page found');
            }
        },
        prevPagesMovie() {
            store.pageMovie--;
            this.getApi();
        },

        nextPagesTv() {
            if (store.pageTv < this.apiDataTv.total_pages) {
                store.pageTv++;
                this.getApi();
            } else {
                alert('no page found');
            }
        },
        prevPagesTv() {
            store.pageTv--;
            this.getApi();
        },

        reset() {
            store.showTranding = true;
            store.inputSearch = '';
            store.resultsFoundMovie = [];
            store.numberFoundMovie = 0;
            store.resultsFoundTv = [];
            store.numberFoundTv = 0;
            this.getApiTranding();
        },

        getApiTranding() {
            store.isLoaded = false;
            axios
                .get(store.apiUrlTranding, {
                    params: {
                        api_key: store.apiKey,
                    },
                })
                .then((result) => {
                    store.resultsTranding = result.data.results;
                    store.isLoaded = true;
                })
                .catch((error) => {
                    store.resultsTranding = [];
                    store.isLoaded = true;
                    console.log('error', error);
                });
        },

        getApi(event = 'default') {
            if (event === 'search') {
                store.pageMovie = 1;
                store.pageTv = 1;
            }
            store.showTranding = false;
            store.isLoaded = false;

            axios
                .get(store.apiUrlMovie, {
                    params: {
                        api_key: store.apiKey,
                        query: store.inputSearch,
                        page: store.pageMovie,
                        language: 'it-IT',
                    },
                })
                .then((result) => {
                    store.resultsFoundMovie = result.data.results;
                    this.apiDataMovie = result.data;
                    store.isLoaded = true;
                    store.numberFoundMovie = result.data.total_results;
                    store.numberPageMovie = result.data.total_pages;
                })
                .catch((error) => {
                    store.resultsFoundMovie = [];
                    store.isLoaded = true;
                    console.log('error', error);
                });

            axios
                .get(store.apiUrlTv, {
                    params: {
                        api_key: store.apiKey,
                        query: store.inputSearch,
                        page: store.pageTv,
                        language: 'it-IT',
                    },
                })
                .then((result) => {
                    store.resultsFoundTv = result.data.results;
                    this.apiDataTv = result.data;
                    store.isLoaded = true;
                    store.numberFoundTv = result.data.total_results;
                    store.numberPageTv = result.data.total_pages;
                })
                .catch((error) => {
                    store.resultsFoundTv = [];
                    store.isLoaded = true;
                    console.log('error', error);
                });
        },
    },
    mounted() {
        this.getApiTranding();
    },
};
</script>

<template>
    <AppHeader @startSearch="getApi('search')" @reset="reset()" />
    <main>
        <AppTranding v-if="store.showTranding" />
        <AppMain
            v-else
            @nextPageMovie="nextPagesMovie()"
            @prevPageMovie="prevPagesMovie()"
            @nextPageTv="nextPagesTv()"
            @prevPageTv="prevPagesTv()"
        />
    </main>
</template>

<style lang="scss">
@use './style/general';
</style>
