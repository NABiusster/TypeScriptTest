import {Movies} from "../components";
import {useAppDispatch, useQueryParams} from "../hooks";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../store";
const MoviesPage = () => {
    const dispatch = useAppDispatch()
    const {pathname} = useLocation();
    const searchParams = useQueryParams(pathname)
    useEffect(() => {
        dispatch(moviesActions.getMovies(searchParams))
    }, [dispatch, searchParams,pathname]);
    return (
        <div>
           <Movies/>
        </div>
    );
};

export {MoviesPage};