import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../../interfaces";
import {Link, useNavigate} from "react-router-dom";
import {
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Rating
} from "@mui/material";
import {CardTitle} from "./styles";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie
    const navigate = useNavigate();
    return (
        <Card elevation={12}
              onClick={() => {
                  navigate(`/movies/${id.toString()}`)
              }}
              sx={{maxWidth: '15vw', margin: "2vh 1vw"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{width: '100%'}}
                    image={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` :
                        'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
                    title={title}
                />
                <CardTitle>
                    {title}
                </CardTitle>
                <CardActions>
                    <Rating value={vote_average} max={10} precision={0.5} readOnly size="medium"/>
                </CardActions>
            </CardActionArea>
        </Card>

    )
        ;
};

export {Movie};
