const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = 'genre/movie/list';

const Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDUyYWEyM2MzMzhmOTRiMDFmZTljYWE2ZTA2ZDk0MiIsInN1YiI6IjY1ZDhlOTEwOWEzNThkMDE2M2ZmMTRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VLqihnb5ymsGMPP-Uzf_SJqn69zWieLaP4O4_99QHCE'

const urls = {
    movies: {
        all: movies,
        byId: (id: number): string => `/movie/${id}`
    },
    genres: {
        all: genres,
    }
};

export {baseURL, urls, Authorization}