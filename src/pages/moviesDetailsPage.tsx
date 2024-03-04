import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {moviesService} from "../services";
import {IMovieDetails} from "../interfaces";
import {MovieDetails} from "../components";

const MoviesDetailsPage = () => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState<IMovieDetails>(null)
    useEffect(() => {
        try {
            moviesService.getById(+id).then(({data}) => setMovieDetails(data))
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                console.log(e.response.data.message)
            } else console.log(e)
        }
    }, [id]);

    return (
        <div>
            {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};


export {MoviesDetailsPage};