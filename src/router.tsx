import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, ErrorPage, MoviesDetailsPage, GenresPage} from "./pages";
import {moviesService} from "./services";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement:<ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'movies/:id', element: <MoviesDetailsPage/>
            },
            {
                path: 'genres', element: <GenresPage/>,loader:() => moviesService.getGenres()
            }
        ]
    }
]);
export {router}
