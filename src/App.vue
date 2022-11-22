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
            apiData: '',
            ceiledVote: '',
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppTranding,
    },
    methods: {
        nextPages() {
            if (store.page < this.apiData.total_pages) {
                store.page++;
                this.getApi();
            } else {
                alert('no page found');
            }
        },
        prevPages() {
            store.page--;
            this.getApi();
        },

        reset() {
            store.showTranding = true;
            store.inputSearch = '';
            store.resultsFound = [];
            store.numberFound = 0;
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
                store.page = 1;
            }
            store.showTranding = false;
            store.isLoaded = false;

            axios
                .get(store.apiUrl, {
                    params: {
                        api_key: store.apiKey,
                        query: store.inputSearch,
                        page: store.page,
                        language: 'it-IT',
                    },
                })
                .then((result) => {
                    store.resultsFound = result.data.results;
                    this.apiData = result.data;
                    store.isLoaded = true;
                    store.numberFound = result.data.total_results;
                })
                .catch((error) => {
                    store.resultsFound = [];
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
        <AppMain v-else @nextPage="nextPages()" @prevPage="prevPages()" />
    </main>
</template>

<style lang="scss">
@use './style/general';
</style>
