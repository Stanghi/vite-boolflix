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
            store.page = 1;
            this.$emit('startSearch');
        },

        getApi() {
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
    <AppHeader @startSearch="getApi()" @nextPage="nextPages()" @prevPage="prevPages()" @reset="reset()" />
    <AppMain />
</template>

<style lang="scss">
@use './style/general';
</style>
