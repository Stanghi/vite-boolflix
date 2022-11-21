import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi',
    apiKey: '35b208680ca3079220657eefe98cf755',
    inputSearch: '',
    isLoaded: false,
    resultsFound: [],
    numberFound: 0,
    page: 1,
});
