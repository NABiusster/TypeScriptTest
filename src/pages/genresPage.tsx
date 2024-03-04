import {useLoaderData} from "react-router-dom";

import {Genres, Movies} from "../components";
import {IGenresData} from "../interfaces";
import {Box} from "@mui/material";


const GenresPage = () => {
    const {data} = useLoaderData() as IGenresData
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: "2vw 2vh"
        }}>
            <Genres genres={data.genres}/>
            <Box sx={{
                width: "80vw"
            }}>
                <Movies/>
            </Box>
        </Box>
    );
};

export {GenresPage};