import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayout, MainLayout} from "./layouts";
import {MoviesPage, ErrorPage, MoviesDetailsPage, GenresPage, SearchPage, RegisterPage, LoginPage} from "./pages";
import {moviesService} from "./services";
import {AuthRequired} from "./hoc";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                element: <AuthRequired><AuthLayout/></AuthRequired>, children: [
                    {
                        path: 'movies', element: <MoviesPage/>
                    },
                    {
                        path: 'movies/:id', element: <MoviesDetailsPage/>
                    },
                    {
                        path: 'genres', element: <GenresPage/>, loader: () => moviesService.getGenres()
                    },
                    {
                        path: 'search', element: <SearchPage/>
                    }
                ]
            },
            {
                path: 'login', element: <LoginPage/>
            },
            {
                path: 'register', element: <RegisterPage/>
            }
        ]
    }
]);
export {router}
