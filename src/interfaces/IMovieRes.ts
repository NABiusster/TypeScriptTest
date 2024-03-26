import {IMovie} from "./IMovie";
export interface IMovieRes<T> {
    page: number,
    results:T[],
    total_pages:number,
    total_results:number
}