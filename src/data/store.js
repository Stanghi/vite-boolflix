import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi',
    apiUrlTranding: 'https://api.themoviedb.org/3/trending/all/week',
    apiKey: '35b208680ca3079220657eefe98cf755',
    inputSearch: '',
    isLoaded: false,
    resultsTranding: [],
    showTranding: true,
    resultsFound: [],
    numberFound: 0,
    page: 1,
});
