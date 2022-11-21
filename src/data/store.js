import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '35b208680ca3079220657eefe98cf755',
    inputSearch: '',
    resultsFound: [],
    page: 1,
    isLoaded: false,
});
