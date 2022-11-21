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
        };
    },
    components: {
        AppHeader,
        AppMain,
    },
};
</script>

<template>
    <AppHeader />
    <AppMain />
</template>

<style lang="scss">
@use './style/general';
</style>
