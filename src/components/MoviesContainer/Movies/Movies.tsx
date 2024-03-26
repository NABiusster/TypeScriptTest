import {Backdrop, Card, CircularProgress, Pagination} from "@mui/material";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

import {Movie} from "../Movie";
import {moviesActions, queryParamsActions} from "../../../store";
import {MoviesContainer} from "./styles";
import {useAppDispatch, useAppSelector, useQueryParams} from "../../../hooks";

const Movies = () => {
    const {isLoading} = useAppSelector(state => state.loadingReducer)
    const {movies, total_pages} = useAppSelector(state => state.movies)
    const {page} = useAppSelector(state => state.queryParams)
    const dispatch = useAppDispatch()
    const {pathname} = useLocation();
    const searchParams = useQueryParams(pathname)
    useEffect(() => {
        if (pathname === '/search') {
            dispatch(moviesActions.searchMovies(searchParams))
        } else {
            dispatch(moviesActions.getMovies(searchParams))
        }
    }, [dispatch, searchParams, pathname,]);
    if (isLoading) {
        return (
            <Backdrop open={isLoading}>
                <CircularProgress/>
            </Backdrop>)
    } else if (movies.length === 0) {
        return (
            <MoviesContainer>
                <div>Nothing found</div>
            </MoviesContainer>
        )
    } else {
        return (
            <div>
                <MoviesContainer>
                    {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </MoviesContainer>
                <Card elevation={10}>
                <Pagination
                    count={total_pages}
                            page={page}
                            onChange={(_, page) => {
                                dispatch(queryParamsActions.setPage(page))
                            }}
                            showFirstButton
                            showLastButton/>
                </Card>
            </div>
        )
    }
}
export {Movies}