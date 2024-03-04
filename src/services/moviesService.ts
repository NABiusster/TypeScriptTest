import {apiService} from "./apiService";
import {IRes} from "../types";
import {IGenre, IMovieDetails, IMovieRes} from "../interfaces";
import {urls} from "../constants";

const moviesService = {
    getAll: (page: number): IRes<IMovieRes> => apiService.get(urls.movies.all, {params: {page: page}}),
    getById: (id: number): IRes<IMovieDetails> => apiService.get(urls.movies.byId(id)),
    getGenres:():IRes<IGenre>=>apiService.get(urls.genres.all)
}
export {moviesService}