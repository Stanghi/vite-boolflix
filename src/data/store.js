import { reactive } from 'vue';

export const store = reactive({
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
    resultsFoundMovie: [],
    numberFoundMovie: 0,
    numberPageMovie: 0,
    pageMovie: 0,

    apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
    resultsFoundTv: [],
    numberFoundTv: 0,
    numberPageTv: 0,
    pageTv: 0,

    apiUrlTranding: 'https://api.themoviedb.org/3/trending/all/week',
    resultsTranding: [],
    showTranding: true,

    apiKey: '35b208680ca3079220657eefe98cf755',
    inputSearch: '',
    isLoaded: false,
});
