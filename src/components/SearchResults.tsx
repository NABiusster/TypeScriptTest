import {MoviesContainer} from "./MoviesContainer";
import {useAppSelector} from "../hooks";

const SearchResults = () => {
    const {movies, total_results} = useAppSelector(state => state.movies)
    if (movies.length === 0) {
        return (
            <MoviesContainer>
                <div>Nothing found</div>
            </MoviesContainer>
        )
    } else {
        return (
            <MoviesContainer>
                <div>Found {total_results} movies</div>
            </MoviesContainer>)

    }
}

export {SearchResults};