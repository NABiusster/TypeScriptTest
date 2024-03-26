import {configureStore} from "@reduxjs/toolkit";

import {authReducer, loadingReducer, moviesReducer, queryParamsReducer} from "./slices";

const store = configureStore({
    reducer: {
        authReducer,
        loadingReducer,
        movies:moviesReducer,
        queryParams:queryParamsReducer,
    },
});
export {store}