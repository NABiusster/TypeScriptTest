import {Card, FormGroup} from "@mui/material";
import {IGenresRes} from "../../../interfaces";
import {Genre} from "../Genre";
import {useLoaderData} from "react-router-dom";


const Genres = () => {
    const {data} = useLoaderData() as IGenresRes
    return (
        <Card elevation={10} sx={{padding:'1vh 1vw'}}>
            <FormGroup>
                {data.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </FormGroup>
        </Card>
    );
};

export {Genres};