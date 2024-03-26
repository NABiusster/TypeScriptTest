import {apiService} from "./apiService";
import {IRes} from "../types";
import {IGenre, IMovie, IMovieDetails, IMovieRes} from "../interfaces";
import {urls} from "../constants";

const moviesService = {
    getMovies: (params: URLSearchParams): IRes<IMovieRes<IMovie>> => apiService.get(urls.movies.baseURL, {params}),
    getById: (id: number): IRes<IMovieDetails> => apiService.get(urls.movies.byId(id)),
    getGenres: (): IRes<IGenre> => apiService.get(urls.genres),
    searchMovies: (params: URLSearchParams): IRes<IMovieRes<IMovie>> => apiService.get(urls.search, {params})
}
export {moviesService}