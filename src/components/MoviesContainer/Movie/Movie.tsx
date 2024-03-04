import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../../interfaces";
import {
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Rating,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie
    return (
        <Link to={`${id.toString()}`}>
            <Card elevation={8} sx={{maxWidth: 200}}>
                <CardActionArea>
                    <CardMedia
                        sx={{height: 280}}
                        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        title={title}
                    />
                    <Typography gutterBottom variant="overline" component="div">
                        {title}
                    </Typography>
                    <CardActions>
                        <Rating defaultValue={vote_average} max={10} precision={0.5} readOnly size="medium"/>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Link>

    )
        ;
};

export {Movie};
