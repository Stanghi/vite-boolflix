<script>
import axios from 'axios';
import { store } from './data/store';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'App',
    data() {
        return {
            store,
            apiData: '',
        };
    },
    components: {
        AppHeader,
        AppMain,
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
            store.inputSearch = '';
            store.resultsFound = [];
            store.numberFound = 0;
            store.page = 1;
            this.getApi();
        },

        getApi(event = 'default') {
            if (event === 'search') {
                store.page = 1;
            }
            store.isLoaded = false;

            axios
                .get(store.apiUrl, {
                    params: {
                        api_key: store.apiKey,
                        query: store.inputSearch,
                        page: store.page,
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
        this.getApi();
    },
};
</script>

<template>
    <AppHeader @startSearch="getApi('search')" @reset="reset()" />
    <AppMain @nextPage="nextPages()" @prevPage="prevPages()" />
</template>

<style lang="scss">
@use './style/general';
</style>
