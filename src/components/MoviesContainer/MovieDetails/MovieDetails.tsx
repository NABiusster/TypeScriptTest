import {Card, CardContent, CardHeader, CardMedia, Stack, Typography} from "@mui/material";
import {FC, PropsWithChildren} from "react";


import {IMovieDetails} from "../../../interfaces";
import {GenreChip} from "../../GenresContainer";

interface IProps extends PropsWithChildren {
    movieDetails: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {
        title,
        vote_average,
        vote_count,
        release_date,
        runtime,
        overview,
        tagline,
        status,
        genres,
        poster_path
    } = movieDetails;

    return (
        <Card elevation={8} sx={{margin:10, padding: 2}}>
            <CardHeader title={title} style={{textAlign: 'center'}}/>
            <Stack direction="row" spacing={2}>
                <CardMedia
                    sx={{height: 300, width: 250, margin: 2}}
                    image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    title={title}
                />
                <CardContent>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="body2" color="text.primary">
                            Rating:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {vote_average} ({vote_count})
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="body2" color="text.primary">
                            Release date:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {release_date}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="body2" color="text.primary">
                            Runtime:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {runtime} min.
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="body2" color="text.primary">
                            Tagline:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {tagline}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="body2" color="text.primary">
                            Status:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {status}
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="body2" color="text.primary">
                            Genres:
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            { genres.map(genre=><GenreChip key={genre.id} genre={genre}/>)}
                        </Stack>

                    </Stack>
                </CardContent>
            </Stack>
            <Typography variant="h6" color="text.primary">
                Overview:
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {overview}
            </Typography>
        </Card>


    );
};

export {MovieDetails};