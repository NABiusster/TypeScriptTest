const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const getUser='/account/21027196}';
const search ='/search/movie';
const Authorization = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDUyYWEyM2MzMzhmOTRiMDFmZTljYWE2ZTA2ZDk0MiIsInN1YiI6IjY1ZDhlOTEwOWEzNThkMDE2M2ZmMTRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VLqihnb5ymsGMPP-Uzf_SJqn69zWieLaP4O4_99QHCE'
const urls = {
    auth:{
        getUser
    },
    movies: {
        baseURL: movies,
        byId: (id: number): string => `/movie/${id}`
    },
    genres: genres,
    search:search

};

export {baseURL, urls, Authorization}