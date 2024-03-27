import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovie, IMovieDetails, IMovieRes} from "../../interfaces";
import {AxiosError} from "axios";
import {moviesService} from "../../services";

interface IState {
    movieDetails: IMovieDetails,
    movies: IMovie[],
    total_pages: number,
    total_results: number
}

const initialState: IState = {
    movieDetails: null,
    movies: [],
    total_pages: 1,
    total_results: 0
};

const getMovies = createAsyncThunk<IMovieRes<IMovie>, URLSearchParams>(
    'moviesSlice/getMovies',
    async (params, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovies(params || null);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const searchMovies = createAsyncThunk<IMovieRes<IMovie>, URLSearchParams>(
    'moviesSlice/searchMovies',
    async (params, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchMovies(params);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const getMovieDetails = createAsyncThunk<IMovieDetails, number>(
    'moviesSlice/getMovieDetails',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovieDetails.fulfilled, (state, action) => {
            state.movieDetails = action.payload
        })
        .addMatcher(isFulfilled(getMovies, searchMovies), (state, action) => {
            state.movies = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        })
});

const {reducer: moviesReducer, actions} = moviesSlice

const moviesActions = {
    ...actions,
    getMovies,
    searchMovies,
    getMovieDetails
}
export {moviesReducer, moviesActions}