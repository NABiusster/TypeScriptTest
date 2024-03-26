import {createSlice} from "@reduxjs/toolkit";
import {IMovQueryParams} from "../../interfaces";


const initialState: IMovQueryParams = {
    page: 1,
    // include_adult:null,
    // include_video:null,
    // language:null,
    // region:null,
    // sort_by:null,
    // with_cast:null,
    // with_companies:null,
    // with_crew:null,
    with_genres: [],
    // with_keywords:null,
    // with_origin_country:null,
    // with_original_language:null,
    // with_people:null,
    // with_watch_providers:null,
    // without_companies:null,
    // without_genres:null,
    // without_keywords:null,
    // without_watch_providers:null,
    // year:null
    query: null
}

const queryParamsSlice = createSlice(
    {
        name: 'queryParamsSlice',
        initialState,
        reducers: {
            setPage: (state, action) => {
                state.page = action.payload
            },
            setGenre: (state, action) => {
                state.with_genres.push(action.payload)
            },
            delGenre: (state, action) => {
                state.with_genres.splice(state.with_genres.indexOf(action.payload), 1)
            },
            setSearchQuery: (state, action) => {
                state.query = action.payload
            }
        }
    })

const {reducer: queryParamsReducer, actions} = queryParamsSlice

const queryParamsActions = {
    ...actions
}
export {queryParamsReducer, queryParamsActions}