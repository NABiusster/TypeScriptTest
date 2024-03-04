import axios from "axios";
import {FC, PropsWithChildren, useEffect, useState} from "react";
import {Box, Pagination} from "@mui/material";

import {IMovieRes} from "../../../interfaces";
import {moviesService} from "../../../services";
import {Movie} from "../Movie";
import {usePagination} from "../../../hooks";

interface IProps extends PropsWithChildren {

}
const Movies:FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovieRes>({page: 1, total_pages: 1, total_results: 0, results: []})
    const {page, handlePagination} = usePagination();
    useEffect(() => {
        try {
            moviesService.getAll(+page).then((({data}) => setMovies(data)))    
        }catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                console.log(e.response.data.message)
            } else console.log(e)
        }
        
    }, [page]);
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent:'space-between',
                    '& > :not(style)': {
                        m: "2vw 2vh",
                        width: "18vw",
                        // height: 400,
                    },
                }}
            >
                {movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </Box>
            <Pagination count={movies.total_pages} page={page} onChange={handlePagination} showFirstButton showLastButton/>
        </div>
    );
};
export {Movies};